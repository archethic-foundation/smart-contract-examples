
function VoteCandidate({ name, color, onVote }) {
  return (
    <div className="rounded-t-md rounded-bl-none rounded-br-none border-2 border-teal-200 shadow-md">
      <div className="flex min-w-full flex-col items-center">
        <div className={`mt-5 bg-${color}-200`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#ffa726" d="M15,27c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-2.2,1.8-4,4-4S15,24.8,15,27 M41,27c0-2.2-1.8-4-4-4 s-4,1.8-4,4c0,2.2,1.8,4,4,4S41,29.2,41,27"></path>
            <path fill="#ffb74d" d="M10,19c0-12.7,28-10.3,28-2v13c0,8.3-8.2,15-14,15s-14-6.7-14-15V19z"></path>
            <path fill="#424242" d="M8,19.3c0.5-6,1.7-11.9,9-13.3l2-3h5c9.2,0,16,7.5,16,18v3.4L37,28c0,0,0,0.5,0-6 c0-10.5-13.5,4.4-20-9c-0.3,5.5-6,8-6,8v7l-3-3.6V21C8,20.4,7.9,19.9,8,19.3"></path>
            <path fill="#784719" d="M33,28c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S33,26.9,33,28 M19,28c0-1.1-0.9-2-2-2s-2,0.9-2,2 s0.9,2,2,2S19,29.1,19,28"></path>
            <path fill="#ff9100" d="M20 37H28V39H20z"></path>
          </svg>
        </div>
        <p className="mb-5 mt-5 w-full text-center">{ name }</p>
        <button className="w-full rounded-t-lg bg-teal-200 p-2 text-teal-600" onClick={onVote}>Vote</button>
      </div>
    </div>
  )
}

export default VoteCandidate;