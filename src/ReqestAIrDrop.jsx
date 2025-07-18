import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirDrop(){

    const wallet = useWallet()
    const {connection} = useConnection();

    
    async function airdrop(){
        const publickey = wallet.publicKey;
        const amount = document.getElementById('amount').value;
        connection.requestAirdrop(publickey,amount*LAMPORTS_PER_SOL);
    }

    return <div>
        <input type="text" placeholder="Amount...." id="amount"/>
        <button onClick={airdrop}>Request AirDrop</button>
        <div>
            {wallet.publicKey ? wallet.publicKey.toBase58() : ''}
        </div>
    </div>

}