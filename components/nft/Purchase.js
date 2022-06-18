import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings }) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState()
  const [enableButton, setEnableButton] = useState(false)

  useEffect(() => {
    if(!selectedNft) return;
    //console.log("SelectedNFt",selectedNft)
    //console.log("Listings", listings)
    if (!listings || isListed === 'false') return
    ;(async () => {
      setSelectedMarketNft(
        listings.find((marketNft) => marketNft.asset?.id == selectedNft.id)
      )
    })()
    //console.log("selnft", selectedNft)
  }, [selectedNft, listings, isListed])

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return
    console.log("selected nft useeffect",selectedNft.id)
    setEnableButton(true)
  }, [selectedMarketNft, selectedNft])

  const confirmPurchase = (toastHandler = toast) =>
    toastHandler.success(`Purchase successful!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
    })

  const buyItem = async (
    listingId = Number(selectedMarketNft.id._hex),
    quantityDesired = 1,
  ) => {
    console.log("Inside buyItem", listingId, quantityDesired, module, 'david')
    // yo RAZA lets goooo!!!
    //yo Qazi, ok
    // sure okay about to run it...
    // just clicked buy now...
    // still error
    // where can i see the contract address of the marketplace module
    // in [nftId.js]
    const sdk = new ThirdwebSDK("rinkeby")
    let listingsContract = sdk.getMarketplace("0x74E0447189A60F573e12800D1a0294aE34F42291")//Marketplace address
    listingsContract = await listingsContract.getAllListings()
    
    await listingsContract
      .buyoutListing(listingId, quantityDesired)
      .catch((error) => console.error(error))
    confirmPurchase()
  }

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />
      {isListed === 'true' ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedMarketNft.id, 1) : null
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
