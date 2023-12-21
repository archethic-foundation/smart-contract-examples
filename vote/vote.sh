#!/bin/sh

function usage {
  echo ""
  echo "Usage: $0 --seed=<seed> --endpoint=<endpoint> --contract=<contractAddress> --candidate=<candidate>"
  echo ""
  echo "Send vote to the contract"
  echo ""
  exit 1
}
SEED=""
ENDPOINT=""
CONTRACT=""
CANDIDATE=""

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
        --candidate)
            CANDIDATE=$VALUE
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

if [ -z "$CANDIDATE" ]
then
  echo "Missing required option: --candidate"
  usage
fi

voteCmd="archethic-cli send-transaction \
	--transaction-type transfer \
	--recipient $CONTRACT='{\"action\": \"vote\", \"args\": [\"$CANDIDATE\"]}'
	--endpoint $ENDPOINT \
	--access-seed $SEED"

eval $voteCmd


