import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage(){
    
    const {publicKey, signMessage}=useWallet()

    async function check(){
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');

        const message = document.getElementById('message').value;
        console.log("message :",message)

        const encodedmessage = new TextEncoder().encode(message);
        console.log("encodemessage :",encodedmessage)

        const signature =await signMessage(encodedmessage);

        console.log("signature :",signature)

        if(!ed25519.verify(signature,encodedmessage, publicKey.toBytes())) throw new Error("message signature invalid");
        alert(`Success!\nSignature: ${bs58.encode(signature)}`);

        console.log("sign message : ",bs58.encode(signature))
        
    }

    return <div>
        <input type="text" id="message" placeholder="message...."/>
        <button onClick={check}>sign Message</button>
    </div>
}