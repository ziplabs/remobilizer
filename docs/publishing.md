# Publishing Model

Insights are authored as typed content blocks in the codebase. This keeps publishing simple and static-friendly while still allowing rich structure.

## Add a New Insight
1. Create a new file under `content/insights/` that exports a single Insight object.
2. Include required fields: `slug`, `title`, `date`, `description`, `tags`, `outcomes`, `decisions`, `blocks`.
3. Add optional `cta` text that links to `/contact`.
4. Import the new Insight into `lib/insights.ts` and add it to the `insights` array.

## Content Blocks
Supported blocks today:
- `paragraph`
- `heading`
- `list`

## Outcomes and Decisions
- Outcomes are defined in `lib/outcomes.ts`.
- Decisions are defined in `lib/decisions.ts`.
- Each Insight should reference outcome and decision slugs that exist in those files.

If you need a new block type, add it to the Insight types and extend the renderer in `app/insights/[slug]/page.tsx`.
