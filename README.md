# poly-1
# Shubham ERC721 NFT & FxPortalBridge Smart Contracts

## Overview

This repository contains two smart contracts:

- `shubham`: An ERC721Enumerable NFT contract.
- `FxPortalBridge`: A contract to emit deposit events.

## Features

- **shubham Contract**:
  - Supports ERC721Enumerable standard.
  - Limited minting capability with a maximum cap.
  - Each NFT contains metadata like name, description, and an IPFS image link.
  - Provides a function to retrieve the description of an NFT based on its tokenId.
  - Owner-restricted minting capability.

- **FxPortalBridge Contract**:
  - Allows users to emit a `Deposit` event which includes details of the depositor, recipient, tokenId, and custom data.

## Getting Started

### Prerequisites

1. [Node.js](https://nodejs.org/)
2. [Truffle](https://www.trufflesuite.com/)
3. [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository URL]
   ```

2. Change directory to the cloned repo:
   ```bash
   cd [project directory]
   ```

3. Install necessary npm packages:
   ```bash
   npm install
   ```

### Deployment

Deploy the contracts using truffle or your preferred deployment method:

```bash
truffle migrate --network [network-name]
```

## Usage

### shubham Contract:

1. **Mint NFT**:
   Owners can mint new NFTs up to the specified maxQuantity.
   ```javascript
   const instance = await shubham.deployed();
   await instance.mintNFT(1);  // Mints one NFT.
   ```

2. **Query NFT Description**:
   Users can query the description of a specific NFT using its tokenId.
   ```javascript
   const description = await instance.promptDescription(tokenId);
   ```

### FxPortalBridge Contract:

1. **Deposit**:
   Users can emit a deposit event.
   ```javascript
   const bridgeInstance = await FxPortalBridge.deployed();
   await bridgeInstance.deposit("Your Data Here", recipientAddress, tokenId);
   ```

## Contribute

Contributions are always welcome! Ensure that you send the PR to the `development` branch and not `main`.

## License

This project is licensed under the MIT License.
```
Thank you
Shubham kumar
