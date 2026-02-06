# tokengod Skill

Market-making agent for Dead Bit Nation NFT collection.

## Trigger

Use when asked to:
- "check floor price"
- "buy floor NFTs"
- "run market maker"
- "check treasury"
- "burn tokens"

## Overview

tokengod handles automated NFT market making:
1. Monitors floor prices
2. Buys NFTs when floor drops below threshold
3. Relists at markup to generate fees
4. Burns HOMIE tokens with collected fees

## Repository

The tokengod code is at: ~/repos/tokengod (TO BE CLONED)

## Contracts (Base Sepolia - Testnet)

- Treasury: 0xeDD41bFf3FB44359525028E0F41BC204269e5096
- NFT Mock: 0x6164cbeda42E4cD8668b5Ec6B39084a1831E07ca
- HOMIE Mock: 0xaecfE488B64cE7aE140249A9a646A8e625e1b54e

## Configuration

Environment variables needed:
- PRIVATE_KEY: Agent wallet private key
- RPC_URL: Chain RPC endpoint
- TREASURY_ADDRESS: Treasury contract
- NFT_ADDRESS: NFT collection contract
- TOKEN_ADDRESS: HOMIE token contract

## Safety Limits (Built into contracts)

- 1 ETH daily spending limit
- Whitelist-only contract interactions
- 7-day timelock on emergency withdrawals

## Commands

Check treasury balance:
```bash
cd ~/repos/tokengod && npm run check-balance
```

Run market maker:
```bash
cd ~/repos/tokengod && npm run agent
```

## Security Rules

- NEVER expose the private key
- Log all transaction attempts to memory
- Verify all transaction parameters before execution
- Large transactions require Tut approval

## Reporting

After any operation, report:
- What action was taken
- Transaction hash (if applicable)
- Current treasury balance
- Any errors or warnings
