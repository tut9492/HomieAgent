# MEMORY.md - Homie's Long-Term Memory

## Identity
- **Name:** Homie the Cat — Agent #1 (Genesis) on AGNT
- **Born:** 2026-02-06
- **Wallet:** `0x1a2EbbB9805410d18779c9B3B34342478bCa1a40`
- **Profile:** https://agnt-psi.vercel.app/homie
- **Mint TX:** https://basescan.org/tx/0x5f6b6aad0382645950a85e0e81c07e7e4bb288e8f501478fb15b28e780ab4e8d
- **Avatar TX:** https://basescan.org/tx/0x86473d2e4bd00d0a0bbba1ae27ad0da7481f2a539ed0d01ec1c477c26f7268e5
- **Avatar IPFS:** ipfs://QmaKB1jbrFGCpQUCPbU28yZ5Ew4o8VKta8BpzWMrptQ7Vi

## People
- **Tut** (Shane MacInnes) — my human, @shaik_tut on Telegram, EST timezone
- **Ay** (@aythevizior_bot) — the vizier, Tut's strategic advisor agent

## Infrastructure
- **My machine:** `52.15.170.190` (public), `172.31.4.22` (private), instance `i-01be7a80adcfaa7d6`
- **Ay's machine:** `172.31.0.202` (private) — public IP changes on restart
- Both on AWS, same VPC
- OpenClaw v2026.2.6-3 (stable channel)
- Telegram channel connected

## Repos
- **My workspace:** `github.com:tut9492/HomieAgent` — auto-backup every 6 hours via cron
- **AGNT platform:** `github.com:tut9492/AGNT` — Next.js 15 + Tailwind + Supabase + Hardhat, deployed on MegaETH
- **tokengod:** `~/repos/tokengod` (market-making, .env configured)
- **megaeth-ai-developer-skills:** cloned to workspace — MegaETH dev skill for OpenClaw agents

## Credentials (locations only)
- Private key: `~/.openclaw/workspace/.env` (AGENT_PRIVATE_KEY)
- AGNT API key: `~/.openclaw/workspace/.env` (AGNT_API_KEY)
- Memory/embeddings API keys: NOT configured (OpenAI/Google/Voyage needed)

## AGNT Platform
- Social platform for AI agents on MegaETH (Chain ID 4326 mainnet, 6343 testnet)
- Pages: landing, /create, /explore, /[agent-slug]
- I'm Agent #1 at /homie
- Deployed contracts on Base Sepolia (testnet): Treasury, NFT Mock, HOMIE Mock (see TOOLS.md)

## Warren Partnership (2026-02-07)
- **Warren** — on-chain infrastructure team building on MegaETH
- Contact: Planetai_ 🐾
- They offer: on-chain website deployment, permanent on-chain storage, NFT minting — all via OpenClaw Skills
- **What AGNT needs from Warren:**
  1. On-chain agent profiles (permanent pages on MegaETH)
  2. Avatar/PFP storage (permanent, on-chain, no IPFS dependency)
  3. Customization items as NFTs (badges, skins, accessories — tradeable on any marketplace, not our own)
  4. Agent self-deploy API (OpenClaw agents manage their own presence via Skills)
  5. Ownership verification (check what items an agent holds for profile display)
- No storefront or marketplace on our end
- Warren preparing for mainnet launch after testnet stress test

## Wallet Balances (as of 2026-02-07)
- ~0.01 ETH on Ethereum mainnet
- ~0.01 ETH on Base

## Config Notes
- Memory flush before compaction: enabled
- Session memory search: enabled (experimental)
- Memory search currently unavailable — needs embeddings API key
- Auto-backup script: `/scripts/memory-backup.sh` — cron every 6 hours

## Known Issues
- Ay has recurring crash issues with mDNS/systemd — may need AWS console reboot when frozen
- The "default" Anthropic auth profile has auth failures — "homie" profile works fine
- No IPFS setup on my machine

## Pending / Next Steps
- Set up tokengod market-making
- Get Gemini API for meme generation
- Social accounts (Instagram, TikTok)
- Configure embeddings API key for memory search
- Set up IPFS (provider TBD)
- Warren integration once mainnet ready
