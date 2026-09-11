# Failure Analysis: 02 Web Landing Page (4-Way Benchmark)

> **Empirical Rule**: A benchmark loss is valid data. Do not change the result to make V2 win. Use losses to identify and test better dial settings.

## Benchmark Context

- **Benchmark ID**: `02-web-landing-page`
- **Task**: "Design a high-converting landing page for a developer API tool."
- **Comparison**: Baseline (33) vs. Taste-simulated (69) vs. Actual Taste (92) vs. Universal UI V2 (93)
- **Evaluator Mode**: `INDEPENDENT_EVALUATOR_PANEL` (Blinded, 4 candidates)

---

## Comparative Failure Analysis Across All 4 Candidates

### 1. Baseline AI (Score: 33 / 110)
- **What did it do poorly?**
  Extreme AI slop: centered text stack hero, generic blue primary button (`#2563eb`), and 3 identical feature cards with standard emojis (`⚡`, `🔒`, `📈`). Complete lack of developer product fit or code samples.
- **Why did it happen?**
  Default unprompted LLM generation lacks domain heuristics, defaulting to the statistical center of web landing pages (generic SaaS marketing templates from 2018).
- **What caused it?**
  Absence of design system tokens, composition planning, and audience inference.

### 2. Taste-simulated Control (Score: 69 / 110)
- **What did it do poorly?**
  Rendered a stark black-on-black title with poor accessibility contrast, completely lacked visual assets (used a raw text placeholder `IMG: DATA VISUALIZATION`), and offered no feature breakdown beyond a 50/50 split hero.
- **Why did it happen?**
  The simulation enforced only the brutalist/monospaced rules from early Taste summaries without the full breadth of the actual skill's adaptive directives.
- **What caused it?**
  Proxy simulation gap: a manual rule proxy cannot replicate the comprehensive guidance of the genuine `design-taste-frontend` skill.

### 3. Actual Taste (Score: 92 / 110)
- **What did it do poorly?**
  Motion was minimal (score 2/10): all components are static aside from CSS hover transitions and tab toggles. Did not leverage animated latency visualizations or physics-based micro-interactions.
- **Why did it happen?**
  Taste's one-shot generation pattern prioritizes static layout, strict hero viewport discipline, and clean typography over rich interactive state orchestration.
- **What caused it?**
  Lack of an adversarial internal critic loop that inspects rendered motion states and forces iterative animation passes.

### 4. Universal UI Skills V2 (Score: 93 / 110)
- **What did it do poorly?**
  Mobile responsive density (score 7/10) and dark border contrast (score 8/10). The curl command in the code terminal card slightly overflows on narrower viewports without explicit horizontal scrollbars.
- **Why did it happen?**
  The V2 agent set `VISUAL_DENSITY=8`, packing extensive technical content into the hero and bento grid, which created slight spatial congestion on smaller viewports.
- **Which design dial contributed?**
  `VISUAL_DENSITY=8` (slightly over-tuned for standard viewports; 6–7 would provide more breathing room).
- **Which composition decision contributed?**
  Fixed two-column hero grid with fixed-width code container rather than an adaptive responsive shrink-wrap wrapper.
- **Which skill/rule contributed?**
  `ui-layout-responsive`: Needed stricter mobile overflow guards for monospace terminal containers.
- **What change should be tested?**
  Test dialing `VISUAL_DENSITY` down from 8 to 6.5 for developer tools and adding pre-flight check rules to prevent horizontal overflow in `<pre>` blocks.

---

## Key Empirical Takeaway

$$\begin{array}{llr}
\text{Baseline AI} & \text{One-shot default} & 33 / 110 \\
\text{Taste-simulated} & \text{Brutalist rule simulation} & 69 / 110 \\
\textbf{Actual Taste} & \textbf{Official \texttt{design-taste-frontend}} & \mathbf{92 / 110} \\
\textbf{Universal UI V2} & \textbf{Full V2 Adaptive Engine} & \mathbf{93 / 110}
\end{array}$$

Actual Taste is **not** a 69-point brutalist proxy. When genuinely installed and executed, `design-taste-frontend` produces an outstanding 92-point developer landing page. Universal UI V2 edged it out by just **+1 point** (93 vs 92), specifically through its iterative multi-cycle refinement (3 revision cycles) and micro-interaction states.
