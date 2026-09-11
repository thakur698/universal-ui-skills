# Universal UI Skills Benchmarks

This directory contains the formal A/B evaluation suite for measuring UI quality across real-world product scenarios.

The benchmark system is designed to compare UI approaches and identify failure modes. Current results are experimental evidence from controlled evaluations, not universal proof of superiority.

## Core Benchmark Domains

1. Flutter Onboarding ([01-flutter-onboarding.md](01-flutter-onboarding.md))
2. Web Landing Page ([02-web-landing-page.md](02-web-landing-page.md))
3. Mobile Dashboard ([03-mobile-dashboard.md](03-mobile-dashboard.md))
4. Ecommerce Storefront ([04-ecommerce-storefront.md](04-ecommerce-storefront.md))
5. Game UI ([05-game-ui.md](05-game-ui.md))
6. React SaaS ([06-react-saas.md](06-react-saas.md))
7. Cinematic Web Experience ([07-cinematic-web-experience.md](07-cinematic-web-experience.md))

## Methodology & Rubric

- **[methodology.md](methodology.md)**: Details testing constraints, evaluator independence, blind grading, failure taxonomy, dial attribution, and hypothesis/results separation.
- **[rubric.md](rubric.md)**: 110-point scoring matrix across 11 key dimensions with scoring anchor scales.
- **[RESULTS.md](RESULTS.md)**: Overview of completed benchmark scores and historical results.
- **[aggregate-results.json](aggregate-results.json)**: Machine-readable historical benchmark evaluation data.

## Evaluators & Failure Analysis

- **[evaluators/](evaluators/README.md)**: Protocols and review templates for `HUMAN`, `INDEPENDENT_MODEL`, and `MULTI_EVALUATOR` independent evaluations.
- **[failure-analysis/](failure-analysis/README.md)**: Standard failure taxonomy, design dial attribution framework, and failure analysis templates.

> **Empirical Rule**: A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.
