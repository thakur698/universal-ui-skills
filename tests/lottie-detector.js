const fs = require('fs');
const path = require('path');

// Lottie Detector Script
// Usage: node lottie-detector.js <path-to-project>

const projectPath = process.argv[2] || process.cwd();

function checkWeb(dir) {
  const packageJsonPath = path.join(dir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) return null;

  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    const hasDependency = !!(deps['lottie-react'] || deps['lottie-web'] || deps['@lottiefiles/react-lottie-player']);
    return { isWeb: true, hasDependency };
  } catch (e) {
    return { isWeb: true, hasDependency: false, error: e.message };
  }
}

function checkFlutter(dir) {
  const pubspecPath = path.join(dir, 'pubspec.yaml');
  if (!fs.existsSync(pubspecPath)) return null;

  try {
    const pubspec = fs.readFileSync(pubspecPath, 'utf8');
    const hasDependency = pubspec.includes('lottie:');
    return { isFlutter: true, hasDependency };
  } catch (e) {
    return { isFlutter: true, hasDependency: false, error: e.message };
  }
}

function findLottieAssets(dir, limit = 5) {
  let results = [];
  
  const searchDirs = ['public', 'assets', 'src/assets', 'web'];
  
  for (const sDir of searchDirs) {
    const fullPath = path.join(dir, sDir);
    if (fs.existsSync(fullPath)) {
      searchRecursive(fullPath, results, limit);
    }
  }
  
  return results;
}

function searchRecursive(dir, results, limit) {
  if (results.length >= limit) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (results.length >= limit) break;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'build', 'dist', '.git'].includes(file)) {
        searchRecursive(filePath, results, limit);
      }
    } else if (file.endsWith('.json')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Handle BOM
        const cleanContent = content.charCodeAt(0) === 0xFEFF ? content.slice(1) : content;
        const data = JSON.parse(cleanContent);
        if (data.v && data.layers) {
           results.push(filePath);
        }
      } catch (e) {
        // Fallback to basic string matching if JSON parse fails (e.g. encoding issues)
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('"layers":') && content.includes('"v":')) {
           results.push(filePath);
        }
      }
    }
  }
}

function runDetection() {
  const webStatus = checkWeb(projectPath);
  const flutterStatus = checkFlutter(projectPath);
  
  let environment = 'UNKNOWN';
  let hasDependency = false;
  
  if (webStatus) {
    environment = 'REACT/WEB';
    hasDependency = webStatus.hasDependency;
  } else if (flutterStatus) {
    environment = 'FLUTTER';
    hasDependency = flutterStatus.hasDependency;
  }

  const assets = findLottieAssets(projectPath);
  const hasAssets = assets.length > 0;

  let finalStatus = 'NOT AVAILABLE';
  
  if (environment !== 'UNKNOWN') {
    if (hasDependency && hasAssets) {
      finalStatus = 'AVAILABLE + EXECUTABLE';
    } else if (hasDependency && !hasAssets) {
      finalStatus = 'REQUIRES USER SETUP';
    } else if (!hasDependency && environment !== 'UNKNOWN') {
      finalStatus = 'REQUIRES USER SETUP';
    }
  }

  const report = {
    tool: 'Lottie',
    environment,
    hasDependency,
    hasAssets,
    assetCount: assets.length,
    sampleAsset: assets.length > 0 ? assets[0] : null,
    status: finalStatus
  };

  console.log(JSON.stringify(report, null, 2));
}

runDetection();
