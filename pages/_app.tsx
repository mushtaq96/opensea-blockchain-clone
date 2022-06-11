import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4] // represents Rinkey test network 
const connectors = {
  injected:{}, // web3 connection method used by Metamask
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
