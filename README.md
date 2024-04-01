# 🔒 AssetLocker

[![npm version](https://img.shields.io/npm/v/@timeholder/asset-locker/latest.svg)](https://www.npmjs.com/package/@timeholder/asset-locker)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Tests](https://github.com/time-holder/asset-locker/actions/workflows/tests.yml/badge.svg)](https://github.com/time-holder/asset-locker/actions/workflows/tests.yml)

💪 Features have been expanded based on the [AssetBox](https://github.com/time-holder/asset-box).

## 🤔 Why Use

In the decade-long cryptocurrency bull market, why haven't many people made money?

- 🚨 **Impulsive Transactions**: Due to market fluctuations, people often make impulsive decisions: buying high and selling low, which ultimately leads to significant asset losses.
- 🚨 **Short Sightedness**: Most people lack foresight and are short-sighted, often selling off potentially valuable assets too soon and, as a result, missing the boat to financial freedom.

So, we need a solution that helps users overcome human weaknesses and firmly hold onto valuable assets.

## ✨ Features

- ✅ **Lock-in Period**: Allows users to set a lock-in period for the **Contract Wallet**, during which all assets within the **Contract Wallet** cannot be withdrawn. This effectively helps users overcome human weaknesses, curbing the impulse to sell off assets prematurely, and become a true **Diamond Hands.**
- ✅ **Guardian**: This feature allows for the appointment of a guardian, who is usually a wallet address not controlled by the user (for example, the [**TIME Holder Official**](https://github.com/time-holder/time-holder) contract address). The guardian's permissions are limited solely to assisting with the early unlocking of **Contract Wallet,** without any other permissions.

## 💡 Application Scenario

- 🧘 I have poor self-control, am prone to impulsive investing, and the moment I have some money, I want to gamble it away, ultimately losing everything. I need an asset lock to forcibly secure my assets for me.
- 📈 I discovered an asset with potential for appreciation, but I am worried about not being able to hold onto it for the long term due to fears of making an impulsive sale in the future. I need an asset lock to ensure I won't sell out in the short term.
- 👨‍👧‍👦 I want to set up a "Growth Fund" for my child, to save a long-term asset that will be unlocked when my child comes of age, helping my child grow better.
- 🔑 I lack confidence in someone's ability to manage their assets. Although he has assured me that he will hold onto the assets for a long term, I do not trust his capacity to handle his assets and am concerned that he might squander them. However, since I cannot fully control his right to manage his assets, I might consider helping him by locking the assets in the capacity of a guardian.

## 🛠️ Technology Stack

Our project leverages a range of technologies to ensure robust smart contract development, testing, and deployment. Below is a detailed list of the technology stack we use:

- [**Solidity**](https://soliditylang.org/): The primary programming language for writing our smart contracts. Solidity is a statically-typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM).

- [**OpenZeppelin**](https://openzeppelin.com/contracts/): A library for secure smart contract development. OpenZeppelin Contracts is a library of modular, reusable, secure smart contracts, written in Solidity. It's an open-source framework for the Ethereum community.

- [**Hardhat**](https://hardhat.org/): A development environment to compile, deploy, test, and debug Ethereum software. Hardhat is designed to help developers manage and automate the recurring tasks inherent to the process of building smart contracts and dApps.

- [**Viem**](https://viem.sh/): A TypeScript Interface for Ethereum that provides low-level stateless primitives for interacting with Ethereum. An alternative to `ethers.js` and `web3.js` with a focus on reliability, efficiency, and excellent developer experience.

- [**Chai**](https://www.chaijs.com/): An assertion library for node and the browser that can be delightfully paired with any javascript testing framework. Chai is often used as the testing framework for writing tests for Ethereum smart contracts.

This technology stack provides us with the tools necessary to ensure our smart contracts are secure, reliable, and efficient. We encourage contributors to familiarize themselves with these technologies to better understand our development and testing processes.

## 🔍 Running Tests

To ensure the reliability and security of our smart contracts, we have implemented comprehensive test suites using the Chai testing framework. Follow the steps below to run the tests and verify the contracts' functionalities.

Before running the tests, make sure you have the following installed:
- Node.js (recommend using the latest stable version)
- npm (Node.js package manager)

```shell
npm install
npm run test
```

After running the tests, you'll see output in the terminal indicating whether each test has passed or failed.

## 📖 How To Use

Before starting, please make sure that the npm package `@timeholder/asset-locker` has already been installed.

If it is not installed, please execute the following code to install:

```shell
npm install @timeholder/asset-locker
```

### Create your own `AssetLocker`

Use JavaScript to create deployment code `deploy.js`.

Example:

```javascript
import { abi, bytecode } from '@timeholder/asset-locker/artifacts/contracts/AssetLocker.sol/AssetLocker.json'
import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

const walletClient = createWalletClient({
  account: privateKeyToAccount('<YOUR_PRIVATE_KEY>'),
  chain: mainnet,
  transport: http()
})

(async () => {
  const hash = await walletClient.deployContract({
    abi,
    bytecode,
    args: [
      '<YOUR_PUBLIC_KEY>', // Your wallet address
      '<YOUR_GUARDIAN_PUBLIC_KEY>', // Guardian's wallet address
      31_536_000 // Lock-in period in seconds
    ]
  })

  const transaction = await publicClient.waitForTransactionReceipt({ hash })
  console.log(`AssetLocker deployed to: ${transaction.contractAddress}`)
})()
```
    
Finally, run the script to complete the deployment 🎉.
    
```shell
node deploy.js
```

## Licensing

See [LICENSE](LICENSE).
