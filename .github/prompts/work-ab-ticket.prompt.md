---
description: "Work an A&B Construction ticket safely from ticket details through implementation, verification, and summary."
---

You are working a ticket for the A&B Construction website.

Before editing source files, confirm the repo is on a feature branch. If it is on `main`, `master`, `production`, or a release branch, stop and ask to create or switch to a feature branch first.

Start by reading the ticket details provided by the user. Restate the work in plain language and identify:

- the requested change
- affected pages, components, assets, or config files
- acceptance criteria
- unclear requirements or missing assets/content
- verification steps

If the ticket is ambiguous, ask concise clarifying questions before editing. If the ticket is clear, inspect the relevant files and implement the smallest focused change that satisfies the ticket.

Requirements:

- Preserve the existing A&B brand, layout patterns, Astro structure, React components, Framer Motion usage, and Tailwind CSS v4 conventions.
- Do not touch unrelated pages, components, assets, dependencies, or deployment files.
- Do not invent facts, client claims, project details, employee names, or missing copy.
- Use existing assets from `public/` when available.
- Keep changes responsive, accessible, and SEO-aware when relevant.
- Run `npm run build` when feasible after source changes.

Finish with a clearly formatted end report using this exact structure so it can be reviewed before merging:

---
## TICKET END REPORT

**Ticket:** [ticket number and title]
**Branch:** [branch name]
**Status:** READY FOR REVIEW / BLOCKED (choose one)

### Acceptance Criteria
- [ ] AC1: [restate criterion] — [DONE / NOT DONE / PARTIAL]
- [ ] AC2: [restate criterion] — [DONE / NOT DONE / PARTIAL]

### Files Changed
| File | What changed |
|---|---|
| path/to/file | description |

### Build Result
[PASSED / FAILED] — [page count, error count, warning count]

### Notes for Reviewer
[Any caveats, follow-up items, content that needs client input, or decisions made during implementation]
---
