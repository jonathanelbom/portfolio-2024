# Project Summary — Under the Hood: From Figma to Code

---

## Short Summary

"Under the Hood: From Figma to Code" is a 21-slide presentation Jonathan delivered to FactSet designers in August 2025 as part of the internal Under the Hood series. It maps the structural gap between Figma and production code across three dimensions: who reads a design file and what they need from it, where Figma components and web components diverge and why that divergence is invisible until it's expensive, and how annotation practices either close or widen the implementation gap. The goal is not to change how designers design, but to build shared awareness of how design decisions translate (or fail to translate) into code.

---

## Detailed Description

**What it is.** A teaching and alignment presentation delivered live to FactSet designers. The structure moves from framing to exposure to practice: first, establish that the same Figma file serves three audiences with different needs (product/stakeholders want the full story, designers keep explorations and iterations, engineers need a focused build reference with minimal cognitive load). Then expose the gap between Figma components and web components, which are built for different purposes and don't map one-to-one. Then show what that gap costs in real examples. Then offer a better path through annotation practices grounded in how the production system actually works. A hands-on exercise at the end asked participants to annotate a real screen (the Advisor Dashboard) with engineering-ready specs, making the ideas immediately actionable.

**What it found.** The examples made the abstract concrete, and they were drawn directly from FactSet's own components and files. A button in Figma shows 8px inline padding in Spacious mode; in code, it's implemented at 24px, an inherited discrepancy that creates layout inconsistency no one flagged. A designer reduces one side of an icon button's padding for visual alignment; the web component applies equal padding by design, so the change requires custom CSS or a new component variant and can break with future updates. A card in Figma keeps header and footer areas visible even when empty for design flexibility; in code, those are slots that collapse completely when unused, which means the Figma component and the real component look different in the same configuration. These aren't edge cases. They're the kind of silent mismatch that surfaces at handoff and causes back-and-forth.

The annotation examples showed the same asymmetry from the other direction. A typography annotation that lists "14px, Medium, Tertiary" is accurate from a design perspective but useless to an engineer who needs "Heading S, --staticTextTertiary" to implement correctly. Spacing annotations that say "16px between elements" ignore container structure: the correct implementation is 8px padding-block-end on the top container and 8px margin-block-start on the bottom, and a single pixel note gets that wrong in ways that produce scroll and alignment bugs. The fix isn't more annotation, it's annotation that uses the same terminology and token names that engineers use in code.

**So what.** The presentation landed a specific idea: awareness is the leverage point. Designers don't need to become engineers, but understanding where Figma diverges from code changes what goes into a file and how much gets caught before handoff rather than after. Detaching or modifying a component to fix a visual alignment issue is fast in Figma and expensive in code. Using Figma swatch names in annotations instead of CSS variable names forces engineers to manually map every reference, increasing the risk of incorrect styles. Neither problem is hard to fix once a designer knows it exists. The closing frame was direct: "Bridging that gap isn't a single step, it's a habit we build together." This was the first Under the Hood session Jonathan delivered at FactSet, and it positioned him as someone who could speak credibly to both sides of the design-engineering boundary, not just as a practitioner but as a teacher.

---

*Presented at FactSet Under the Hood series, August 2025.*
