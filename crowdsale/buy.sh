#!/bin/sh

function usage {
  echo ""
  echo "Usage: $0 --seed=<seed> --endpoint=<endpoint> --contract=<contractAddress> --amount=<amount>"
  echo ""
  echo "Buy tokens from the ICO contract"
  echo ""
  exit 1
}
SEED=""
ENDPOINT=""
CONTRACT=""
AMOUNT=""

while [ "$1" != "" ]; do
    PARAM=`echo $1 | awk -F= '{print $1}'`
    VALUE=`echo $1 | awk -F= '{print $2}'`
    case $PARAM in
        -h | --help)
            usage
            exit
            ;;
        --endpoint)
            ENDPOINT=$VALUE
            ;;
        --seed)
            SEED=$VALUE
            ;;
        --contract)
            CONTRACT=$VALUE
            ;;
        --amount)
            AMOUNT=$VALUE
            ;;
        *)
            echo "ERROR: unknown parameter \"$PARAM\""
            usage
            exit 1
            ;;
    esac
    shift
done

if [ -z "$SEED" ]
then
  echo "Missing required option: --seed"
  usage
fi

if [ -z "$ENDPOINT" ]
then
  echo "Missing required option: --endpoint"
  usage
fi

if [ -z "$CONTRACT" ]
then
  echo "Missing required option: --contract"
  usage
fi

if [ -z "$AMOUNT" ]
then
  echo "Missing required option: --amount"
  usage
fi

URL="${ENDPOINT}/api?query=query\{genesisAddress(address:\"000035BA6E53957E33F34BDD415FB0788D2DD10A008CC3711E12464C8AF8ED6DB8DA\")\}"
echo $URL

result=$(curl -s "$URL")
contractGenesisAddress=$(echo "$result" | grep -o '"genesisAddress":"[^"]*' | sed 's/"genesisAddress":"//')

buyCmd="archethic-cli send-transaction \
	--transaction-type transfer \
	--uco-transfer $contractGenesisAddress=$AMOUNT
    --recipient $CONTRACT='{\"action\": \"buy_token\", \"args\": []}'
	--endpoint $ENDPOINT \
	--access-seed $SEED"

eval $buyCmd


