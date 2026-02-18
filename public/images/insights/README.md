# Insight hero images

Each Insight uses a hero image at:

```
public/images/insights/<slug>/header.jpg
```

Convention: one folder per article slug, one file `header.jpg` per folder.

## Image prompt template (for external generation)

Use this template to brief or generate hero images so they stay consistent across posts.

**Inputs:**
- **Article title:** [title]
- **Summary:** [1–2 sentence description]
- **Mood keywords:** [e.g. restrained, editorial, decision-focused, operational]

**Style guidelines:**
- Black-and-white or grayscale (minimal palette)
- Editorial illustration or diagram-like illustration is OK
- Cartoon feel is acceptable if professional and consistent
- Human, realistic, or conceptual scenes are OK
- Not glossy or futuristic
- Mood-setting, not explanatory
- Consistent aspect ratio across posts (match current layout; e.g. 1200×600 or 2:1)
- Must look cohesive as a set

**Example prompt:**
"Editorial hero image, grayscale, restrained mood. [Article title]. [Summary]. Mood: [keywords]. No glossy or futuristic style. Consistent with a serious operator publication."
