function WelcomeScreen({ onConnect, connected, onStart }) {

  return (
    <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="mx-auto max-w-md">
        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p>A voting app using Archethic smart contracts</p>
            <p>Requirements:</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p className="ml-4">
                  Need the Archethic's wallet
                </p>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p className="ml-4">
                  The wallet's address must be funded
                  <small className="text-sm text-gray-900"><br />(You can use Faucet available from the testnet)</small>
                </p>
              </li>
            </ul>
            <p>This use case is to demonstrate the usage of</p>
            <ul className="space-y-4 text-base text-sm">
              <li className="flex items-center"> - smart contract triggers by transaction</li>
              <li className="flex items-center"> - smart contract calls (for inspection)</li>
              <li className="flex items-center"> - interaction with wallet using the Javascript SDK</li>
            </ul>
          </div>
          <div className="pt-8 text-base font-semibold leading-7">
            { connected === false &&
              <button className="bg-teal-100 p-2 rounded-lg border-2 border-teal-300 text-teal-600" onClick={onConnect}>Connect wallet</button>
            }
            { connected &&
              <button className="bg-teal-100 p-2 rounded-lg border-2 border-teal-300 text-teal-600" onClick={onStart}>Start voting</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
