import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance(){

    const wallet = useWallet();
    const {connection} = useConnection();

    async function getBalance(){
        const publickey = wallet.publicKey;
        const balance = await connection.getBalance(publickey)/LAMPORTS_PER_SOL;
        document.getElementById('balance').innerHTML = balance;
    }

    useEffect(()=>{
        getBalance()
    },[wallet]);

    getBalance()
    return <div>
        Balance : <span id="balance"></span>  SOL
    </div>
}