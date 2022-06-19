import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'
import {useMarketplace} from "@thirdweb-dev/react"


const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState()
  const [enableButton, setEnableButton] = useState(false)
  console.log(listings)
  console.log(enableButton)

  const marketPlace = useMarketplace("0x74E0447189A60F573e12800D1a0294aE34F42291")
  //console.log("MmmmPPP",marketPlace)

  useEffect(() => {
    if (!listings || isListed === 'false') return
    ;(async () => {
      setSelectedMarketNft(
        listings.find((i) => i.asset?.id._hex == selectedNft.id._hex)
      )
      console.log(selectedMarketNft)
    })()
  }, [selectedNft, listings, isListed])

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return

    console.log("selected nft useeffect",selectedNft)
    console.log(enableButton)
    setEnableButton(true)
  }, [selectedMarketNft, selectedNft])

  const confirmPurchase = (toastHandler = toast) =>
    toastHandler.success(`Purchase successful!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
    })
  
  
  const buyItem = async (selectedNft) => {
    try{
      console.log("inside buyItem",selectedNft)
      await marketPlace.buyoutListing(Number(selectedNft.id._hex), 1)
      alert("Asset purchased successfully")

      //window.location.reload()
    } catch(err){
      console.log(err)
      alert('error purchasing asset')
    }
  }
    //confirmPurchase()
  

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />
      {isListed === 'true' ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedNft) : null
            }}
            className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
          >
            <IoMdWallet className={style.buttonIcon} />
            <div className={style.buttonText}>Buy Now</div>
          </div>
          <div
            className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
          >
            <HiTag className={style.buttonIcon} />
            <div className={style.buttonText}>Make Offer</div>
          </div>
        </>
      ) : (
        <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>List Item</div>
        </div>
      )}
    </div>
  )
}

export default MakeOffer
