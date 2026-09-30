# Project Summary: Fusion DS AI Strategy

---

## Short Summary

Two competing proposals for making FactSet's Fusion design system AI-native arrived at the same goal from different angles. I synthesized them into a single, prioritized strategy by identifying where the proposals overlapped and where they talked past each other. The work required understanding how design systems fail at scale and knowing how to apply agentic AI to fix those failures without adding headcount.

---

## Detailed Description

### What it is

Fusion is FactSet's core design system (five years old, serving 600 engineers and 40 designers, with adoption sitting around 30%). Two proposals emerged for how AI could change that trajectory: one focused on pipeline automation (design token workflows, Figma Code Connect, CI/CD integration), the other a more radical "open AI-native" direction that questioned whether the system should be rebuilt from the ground up. My job was to assess both and produce a strategy the team could execute against, with clear priorities and a rationale for what the team resources first.

### What I found

The proposals weren't as opposed as they appeared. Both tried to solve the same structural problem, the DS team as a bottleneck, from different assumptions about where the friction lived. Sorting that out required fluency in both domains: understanding of how Fusion works in architecture, structure, and daily use, deep enough to evaluate what would change adoption, and understanding of how agentic AI tools reason about code, deep enough to know which investments would produce better output.

The harder diagnosis: both proposals assumed the problem was "engineers don't have the right tools." The deeper issue was that Fusion had trained engineers to depend on it, by building complex, opinionated components to meet specific team needs rather than composable building blocks that engineers could learn to extend themselves. That reframing reorganized the strategy. AI skills could reinforce that dependency or break it, depending on what knowledge they encode. The quality of those skills scales with the quality of the underlying system: Claude's output is only as reliable as the examples and documentation it can reason from. A skill built on a weak foundation produces confident, wrong answers. That insight set the order: foundational DS improvements first, an AI skill layer second, automation on top of both.

### So what

The resulting strategy has three pillars in a dependency chain. Pillar 1 makes the design system more composable, themeable, and AI-legible. Pillar 2 builds agentic skills that encode DS judgment (composition patterns, theming guidance, when-to-use rules) so any engineer can get reliable answers without involving the DS team. Pillar 3 layers automation and pipeline infrastructure on top of that foundation. The ordering is the core deliverable, the thing neither original proposal had. Neither one recognized that the AI layer's effectiveness depends on the quality of what sits underneath it, or that the "automation pipeline" work serves the DS team's internal workflow more than the 600 engineers it aimed to reach.

For product and engineering teams, the practical outcome is a path to self-sufficiency: an installable plugin encodes knowledge that lives in the heads of a small DS team, available at the moment of need, inside the tools engineers already use. For the DS team, it works as a force multiplier: instead of scaling headcount to match a growing organization, the system carries the intelligence.
