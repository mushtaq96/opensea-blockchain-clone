import Header from '../../components/Header'
import {useEffect, useMemo, useState} from 'react'
import {useWeb3} from '@3rdweb/hooks'
//import {ThirdwebSDK} from '@3rdweb/sdk'
import {useRouter} from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const style={
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container:`container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer:`flex-[2] ml-4`
}

const Nft = () =>{
  const { provider} = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()
  
  const nftModule = useMemo(() => {
    const sdk = new ThirdwebSDK("rinkeby")
    return sdk.getNFTCollection("0xA26c2d451BE3717973f25De833f537313B314A5a")//NFT collection bored ape address
  }, [])
  //get all nfts in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()
      console.log("NFTS",nfts)
      let selectedNftItem = nfts.find((nft) => Number(nft.metadata.id._hex) == router.query.nftId)
      selectedNftItem = selectedNftItem.metadata
      
      setSelectedNft(selectedNftItem)
      console.log("selectedNftItem", selectedNftItem)
    })()
  }, [nftModule])

  useEffect(() => {
    ; (async () => {
      const sdk = new ThirdwebSDK("rinkeby")

      const listingsContract = sdk.getMarketplace("0x74E0447189A60F573e12800D1a0294aE34F42291")//Marketplace address
      const listings1 = await listingsContract.getAllListings()
      setListings(listings1)
      
    })()
  }, [])

  return (
    <div>
      <Header />
      {/* <NFTImage selectedNft={selectedNft}/> */}
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft}/>
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft}/>
              <Purchase 
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
              />
            </div>
          </div>
          <ItemActivity/>
        </div>
      </div>
    </div>
  )
}

export default Nft