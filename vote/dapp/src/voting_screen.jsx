import VoteCandidate from "./vote_candidate.jsx"

function VotingScreen({ archethic }) {

  async function handleVote(candidate) {
     const tx = archethic.transaction.new()
      .setType("transfer")
      .addRecipient("0000583a6a1d9a536ed7f3c8e7f3981ed2f7ff8cb3c3f8f2b9eb0c862d81f75d28cb", "vote", [candidate])

      await archethic.rpcWallet.sendTransaction(tx)
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative w-5/6 bg-white px-6 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <p className="text-center">Please vote between the candidates</p>
          <div className="py-8 text-base leading-7 text-gray-600 flex gap-x-5">
            <div className="w-1/2">
              <VoteCandidate name="Smith" color="red" onVote={() => handleVote("smith") }/>
            </div>
            <div className="w-1/2">
              <VoteCandidate name="Doe" color="blue" onVote={() => handleVote("doe") } />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingScreen;
