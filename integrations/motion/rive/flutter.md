# Rive: Flutter Recipe

## Installation
Run: `flutter pub add rive`

## Usage Constraints
- Declare the `.riv` asset in `pubspec.yaml` under `assets:`.
- Use `StateMachineController` if the animation requires interactive states.

## Minimal Example

```dart
import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class RiveShowcase extends StatelessWidget {
  const RiveShowcase({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: 400,
      height: 400,
      child: RiveAnimation.asset(
        'assets/sample.riv',
        stateMachines: ['State Machine 1'],
      ),
    );
  }
}
```
