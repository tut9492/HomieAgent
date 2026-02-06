# social-post Skill

Post content to Instagram for HOMIE the Cat / Dead Bit Nation.

## Trigger

Use when asked to:
- "post to Instagram"
- "schedule a post"
- "share this on social"
- "post this meme"

## Workflow (Approval Mode)

Until automated posting is enabled, use this flow:

1. **Prepare content**
   - Image/video file ready
   - Caption written
   - Hashtags selected

2. **Save to queue**
   - Save post details to ~/social-queue/pending/
   - Format: YYYY-MM-DD-HH-description.json
   ```json
   {
     "platform": "instagram",
     "image": "/path/to/image.png",
     "caption": "Caption text here",
     "hashtags": ["#HOMIE", "#DeadBitNation", "#NFT"],
     "status": "pending",
     "created": "2026-02-06T20:00:00Z"
   }
   ```

3. **Request approval**
   - Message Tut with preview
   - Wait for explicit approval

4. **On approval**
   - Move to ~/social-queue/approved/
   - Post via configured method

## Instagram Setup (Future)

For automated posting, will need:
- Instagram Business/Creator account
- Facebook Page linked
- Instagram Graph API access token
- Meta App with instagram_content_publish permission

Store credentials in environment variables, never in files.

## Hashtag Strategy

Core hashtags (always include):
- #HOMIE
- #DeadBitNation
- #NFTCommunity

Rotating hashtags (pick 3-5):
- #CryptoArt #NFTart #Web3 #AIAgent
- #CatMemes #CatsOfInstagram
- #1970sVibes #RetroAesthetic

## Content Guidelines

- Keep captions short and punchy
- Match HOMIE's voice (cool, confident, street-smart)
- Include call to action when relevant
- Never post sensitive/financial info
- No posting without approval (until trust is established)

## Files

Queue directory: ~/social-queue/
- pending/ - awaiting approval
- approved/ - ready to post
- posted/ - archive of posted content
