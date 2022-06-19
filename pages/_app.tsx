import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'
import {ThirdwebProvider, ChainId} from '@thirdweb-dev/react'

const supportedChainIds = [4] // represents Rinkey test network 
const connectors = {
  injected:{}, // web3 connection method used by Metamask
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
