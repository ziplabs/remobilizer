# Key Decisions

## Information Architecture
- Public content type: Insights only.
- Outcomes and Decisions are navigational lenses over Insights.
- Core pages: Home, Insights index/detail, Outcomes index/detail, Decisions index/detail, About, Contact.
- Simple navigation without dropdowns or heavy UI systems.

## Design Direction
- Editorial, calm, and professional.
- Emphasis on typography, spacing, and readable line lengths.
- Consistent hero sections across pages, smaller on internal pages.

## Content Model
- Insight metadata: title, date, description, tags, outcomes, decisions.
- Outcomes and Decisions are lightweight lookup tables.
- Insight content is stored as typed blocks in code for easy additions.
- Static-first: no database or runtime services.
