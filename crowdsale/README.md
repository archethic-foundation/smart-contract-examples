# Crowdsale example

This examples demonstrates the usage of Archethic smart contract and the CLI in the context of crowdsale and ICO to sell tokens in exchange of UCOs.

## Funding

1. Contract's chain funding

```bash
archethic-cli generate-address --seed CONTRACT_SEED
```

You  need to generate a dedicated address for the contract's chain, in order to fund it.

For this purpose, you can use the Faucet available on the testnet.

---

Same can be done for the user's chain (the one interacting with the contract):

```bash
archethic-cli generate-address --seed USER_SEED
```

## Deploy

To initiate the contract's chain, you can use this script to deploy it

```sh
sh ./deploy.sh --seed=CONTRACT_SEED --endpoint=https://testnet.archethic.net
```

This will take the configuration file `ico.yaml` containing the smart contract and the token definition to create smart contract and mint the tokens at once

## Buy tokens

In order to buy tokens in the ICO, you can use this script to exchange UCO to get tokens

```sh
./buy.sh --seed=USER_SEED --endpoint=https://testnet.archethic.net --contract=CONTRACT_ADDRESS --amount=NB_UCO_TO_SEND
```

This script will execute actions on the smart contract and send UCO to it, this will result in a transaction sending the tokens to the user's chain.

