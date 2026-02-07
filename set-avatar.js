const { ethers } = require('ethers');
require('dotenv').config({ path: '/home/ubuntu/.openclaw/workspace/.env' });

const PRIVATE_KEY = process.env.AGENT_PRIVATE_KEY;
const AVATAR = 'ipfs://QmaKB1jbrFGCpQUCPbU28yZ5Ew4o8VKta8BpzWMrptQ7Vi';

async function main() {
  const provider = new ethers.JsonRpcProvider('https://mainnet.base.org');
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  
  console.log('Wallet:', wallet.address);
  
  const profile = new ethers.Contract(
    '0x27051ad694e5F729891986b83061DFbC47b9D655',
    ['function setAvatar(uint256 agentId, string avatar) external'],
    wallet
  );
  
  console.log('Setting avatar for Agent #1...');
  const tx = await profile.setAvatar(1, AVATAR);
  console.log('TX:', tx.hash);
  await tx.wait();
  console.log('✅ Avatar set on-chain!');
}

main().catch(console.error);
