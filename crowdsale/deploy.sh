#!/bin/sh

function usage {
  echo ""
  echo "Usage: $0 --seed=<seed> --endpoint=<endpoint>"
  echo ""
  echo "Deploy the crowdsale contract"
  echo ""
  exit 1
}
SEED=""
ENDPOINT=""

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


URL="${ENDPOINT}/api?query=query\{sharedSecrets\{storageNoncePublicKey\}\}"

result=$(curl -s "$URL")
storageNoncePublicKey=$(echo "$result" | grep -o '"storageNoncePublicKey":"[^"]*' | sed 's/"storageNoncePublicKey":"//')

deployCmd="archethic-cli send-transaction \
	--config ico_template.yaml \
	--ownership $SEED=$storageNoncePublicKey \
	--endpoint $ENDPOINT \
	--access-seed $SEED"

eval $deployCmd



