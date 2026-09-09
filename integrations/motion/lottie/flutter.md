# Lottie: Flutter Recipe

## Installation
Run: `flutter pub add lottie`

## Usage Constraints
- Declare the `.json` asset in `pubspec.yaml` under `assets:`.

## Minimal Example

```dart
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class LottieShowcase extends StatelessWidget {
  const LottieShowcase({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 400,
      height: 400,
      child: Lottie.asset('assets/lottie-sample.json'),
    );
  }
}
```
