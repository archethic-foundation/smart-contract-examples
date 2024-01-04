import WelcomeScreen from './welcome_screen.jsx'
import VotingScreen from './voting_screen.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Archethic from "@archethicjs/sdk"

import { useState, useEffect, useRef } from 'react';

function App() {

  const [archethic, setArchethic] = useState(new Archethic("ws://localhost:12345"))
  const [connected, setConnected] = useState(false);
  const [start, setStart] = useState(false)
  const connectingRef = useRef(false);

  useEffect(() => {
    connectWallet()
  }, [archethic])

  async function connectWallet() {
    try {
      // Avoid reconnecting twice
      if (connectingRef.current) {
        return
      }
      connectingRef.current = true
      archethic.rpcWallet.setOrigin({name:"FlutterDappExample",url:null,logo:null});
      await archethic.connect()
      console.log("connect")

      setConnected(true)
      setArchethic(archethic)
    }
    catch(e) {
      console.error(e)
      setConnected(false)
    }
  }

  function onStart() {
    setStart(true)
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <Router>
        { start && connected && 
          <Navigate to="/app" />
        }
        <Routes>
          <Route path="/" element={<WelcomeScreen onConnect={() => connectWallet()} connected={connected} onStart={() => onStart()} />} />
          <Route path="/app" element={<VotingScreen archethic={archethic}/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
