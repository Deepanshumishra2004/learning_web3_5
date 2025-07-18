import { useState } from 'react'
import './App.css'

import { ConnectionProvider , WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider , WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'


import {clusterApiUrl} from '@solana/web3.js'
import { RequestAirDrop } from './ReqestAIrDrop'
import { ShowBalance } from './ShowBalance'
import { SendToken } from './SendToken'
import { SignMessage } from './SignMessage'

function App() {
  const [count, setCount] = useState(0)

  return (

    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{width:"100vw", display:"flex" , justifyContent:"center"}}>
            <WalletMultiButton/>
            <RequestAirDrop/>
          </div>
          <div>
            <ShowBalance/>
          </div>

          <div style={{marginTop:"30px"}}>
            <SendToken/>
          </div>

          <div style={{marginTop:"30px"}}>
            <SignMessage/>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
