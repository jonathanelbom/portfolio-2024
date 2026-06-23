# Project Summary: Fusion DS AI Strategy

---

## Short Summary

Two competing proposals for making FactSet's Fusion design system AI-native arrived at the same underlying goal from different angles. I synthesized them into a single, prioritized strategy by identifying where the proposals genuinely overlapped and where they talked past each other. The work sits at the intersection of understanding how design systems fail at scale and knowing how to apply agentic AI to solve those failures — without adding headcount.

---

## Detailed Description

### What it is

Fusion is FactSet's core design system — five years old, serving 600 engineers and 40 designers, with adoption sitting around 30%. Two proposals emerged for how AI could change that trajectory: one focused on pipeline automation (design token workflows, Figma Code Connect, CI/CD integration), the other a more radical "open AI-native" direction that questioned whether the system should be rebuilt from the ground up. My job was to assess both and produce something actionable — a strategy the team could actually execute against, with clear priorities and a principled rationale for what gets resourced first.

### What I found

The proposals weren't as opposed as they appeared. Both were trying to solve the same structural problem — the DS team as a bottleneck — just from different assumptions about where the friction lived. Sorting that out required fluency in both domains: deep enough understanding of how Fusion works (architecturally, structurally, and in terms of how engineers actually use it) to evaluate what would meaningfully change adoption, and enough understanding of how agentic AI tools reason about code to know which investments would actually produce better output.

The harder diagnosis that emerged: both proposals assumed the problem was "engineers don't have the right tools." But the deeper issue was that Fusion had trained engineers to be dependent — by building complex, opinionated components to meet specific team needs rather than composable building blocks that engineers could learn to extend themselves. That reframing reorganized the entire strategy. AI skills could either reinforce that dependency or break it, depending entirely on what knowledge gets encoded in them. And the quality of those skills scales directly with the quality of the underlying system — Claude's output is only as reliable as the examples and documentation it can reason from. A skill built on a weak foundation produces confident but wrong answers. That insight made the ordering explicit: foundational DS improvements first, AI skill layer second, automation on top of both.

### So what

The resulting strategy is three pillars with a clear dependency chain: make the design system itself more composable, themeable, and AI-legible (Pillar 1); build agentic skills that encode DS judgment — composition patterns, theming guidance, when-to-use rules — so any engineer can get reliable answers without involving the DS team (Pillar 2); then layer automation and pipeline infrastructure on top of that foundation (Pillar 3). The ordering is the core deliverable — it's the thing neither original proposal had. Neither one recognized that the AI layer's effectiveness depends on the quality of what's underneath it, and that the "automation pipeline" work primarily serves the DS team's internal workflow, not the 600 engineers it was intended to reach.

For product and engineering teams, the practical outcome is a path to greater self-sufficiency: the knowledge that currently lives in the heads of a small DS team gets encoded into an installable plugin that's available at the moment of need, inside the tools engineers already use. For the DS team, it's a force multiplier — instead of scaling headcount to match a growing organization, the system carries the intelligence.
