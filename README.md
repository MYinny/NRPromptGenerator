# Naomi Prompt Director

A small static web app for generating ComfyUI-ready prompt sections for Naomi carousel workflows.

## What it does

- Generates logical wardrobe, environment, and lighting/style combinations.
- Lets you lock any section you like and reroll the rest.
- Provides copy/paste sections for ComfyUI v7/v8 workflows.
- Includes an expandable prompt bank saved in browser `localStorage`.
- Runs entirely in the browser — no backend or API key required.

## How to run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8787
```

Then open:

```text
http://127.0.0.1:8787
```

## Recommended ComfyUI use

Use this app as the prompt director, then paste the generated sections into your ComfyUI v7/v8 workflow:

- Wardrobe fallback / manual lock
- Environment fallback / manual lock
- Lighting/style fallback / manual lock
- User creative brief
- Gaze / expression bias
- Rear / side bias · Shot 3
- Pose variety / anti-repetition

## Best workflow

1. Pick a vibe.
2. Use Smart style set mode.
3. Click **Randomize unlocked**.
4. Lock sections you like.
5. Reroll the rest.
6. Copy prompts into ComfyUI.
7. Add successful custom style sets back into the bank.
