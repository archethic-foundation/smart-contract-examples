# Vote example

This example demonstrates the usage of Archethic smart contract and the [CLI](https://github.com/archethic-foundation/archethic-cli) in the context of voting system.

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
./deploy.sh --seed=CONTRACT_SEED --endpoint=https://testnet.archethic.net
```

This will take the configuration file `vote_template.yaml` containing the smart contract to create smart contract.

## Vote for a candidate

In order to vote, you can use this script to exchange UCO to get tokens

```sh
./vote.sh --seed=USER_SEED --endpoint=https://testnet.archethic.net --contract=CONTRACT_ADDRESS --candidate=CANDIDATE
```

This script will execute actions on the smart contract, this will result in a transaction updating the votes count.

