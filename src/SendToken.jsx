import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";


export function SendToken(){

    const wallet = useWallet();
    const {connection}=useConnection();
    const [amount, setAmount] = useState();

    async function sendSOL(){
        let to = document.getElementById('reciver').value;
        let amountsend = amount;

            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey:wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amountsend * LAMPORTS_PER_SOL
            }))
            await wallet.sendTransaction(transaction,connection);
            alert("Sent " + amount + " SOL to " + to);

    }


    return <div>
        <input type="text" id="reciver" placeholder="To"/>
        <input  type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={sendSOL}>send</button>
    </div>
}