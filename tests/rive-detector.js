const fs = require('fs');
const path = require('path');

// Rive Detector Script
// Usage: node rive-detector.js <path-to-project>

const projectPath = process.argv[2] || process.cwd();

function checkWeb(dir) {
  const packageJsonPath = path.join(dir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) return null;

  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    const hasDependency = !!(deps['@rive-app/react-canvas'] || deps['@rive-app/canvas']);
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
    // Simple check, a real parser would be better but this works for detection
    const hasDependency = pubspec.includes('rive:');
    return { isFlutter: true, hasDependency };
  } catch (e) {
    return { isFlutter: true, hasDependency: false, error: e.message };
  }
}

function findRiveAssets(dir, limit = 5) {
  let results = [];
  
  // Only look in typical asset directories to save time
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
      // Ignore node_modules, build, etc.
      if (!['node_modules', 'build', 'dist', '.git'].includes(file)) {
        searchRecursive(filePath, results, limit);
      }
    } else if (file.endsWith('.riv')) {
      results.push(filePath);
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

  const assets = findRiveAssets(projectPath);
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
    tool: 'Rive',
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
