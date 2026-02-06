# meme-gen Skill

Generate HOMIE the Cat memes using Gemini Imagen API.

## Trigger

Use when asked to:
- "generate a meme"
- "create HOMIE art"
- "make a meme about..."

## Character Guide

**HOMIE the Cat:**
- Grey tabby cat, humanoid form
- Black tech goggles on head
- 1970s street aesthetic
- Confident, cool, slightly mischievous
- Urban/street settings work best

## How to Generate

1. Ensure GEMINI_API_KEY is set in environment

2. Use this prompt structure:
```
A humanoid grey tabby cat wearing black tech goggles on his head, 1970s street fashion style, [SCENE/ACTION]. The cat has a cool confident expression. Urban aesthetic, warm colors.

[USER REQUEST HERE]
```

3. Call Gemini Imagen API via curl with the prompt

4. Decode base64 response and save to ~/memes/YYYY-MM-DD-description.png

5. Report back with the file path and offer to post (requires approval)

## Style Notes

- Warm color palette (oranges, browns, golds)
- Urban backgrounds (brick walls, streets, bodegas)
- 70s fashion elements (leather jacket, bell bottoms, gold chain)
- Goggles always on head, never over eyes
- Confident/cool poses, never aggressive

## Limits

- Max 10 generations per day (API costs)
- Always save before posting
- Never post without explicit approval

## Files

Generated memes go to: ~/memes/
Create the directory if it doesn't exist.
