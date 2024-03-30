"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TextWrapper } from "@/components/text";


export default function HowTo(){
    return (
      <div>
        <div className="bg-[#5BA7FF] pb-[40px] min-h-screen">
          <Navbar />
          <div className="lg:pt-[140px] pt-[100px] text-[40px] font-upheavtt text-center flex justify-center">
            <TextWrapper>Add Base Network</TextWrapper>
          </div>
          CoinBase Basically the CoinBase wallet browser extension provides
          support for Base by default, so it should be already there. To verify
          just log in to your Coinbase wallet press Swap and switch the network,
          Base Network should be there by default. Meta Mask For MM however we
          need to add Base as a Custom Network. Connect to your MM wallet and go
          to your Networks. Click Add Network, Base Mainnet should be in the
          list of popular networks so you don't need to add it manually. Just
          press Add and Approve popup, now just switch to the Base network.
        </div>
        <div>
          <div className="lg:pt-[140px] pt-[100px] text-[40px] font-upheavtt text-center flex justify-center">
            <div>Add Base Network</div>
                </div>
                <p>Locate Base Network and Click Add</p>
          <p>Click on MetaMask Browser Extension</p>
        </div>
        <p>Click on MetaMask Browser Extension</p>
        <p>Click Approve on the pop-up screen</p>
        <p>You have added it.</p>
        <div className="lg:pt-[140px] pt-[100px] text-[40px] font-upheavtt text-center flex justify-center">
            <TextWrapper>How-to? (Step 2)</TextWrapper>
          </div>
        <Footer />
        hello
      </div>
    );
}