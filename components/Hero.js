import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/NIqqZVelGfLVtZsGGLBRVtjdTM17pQt3tzAaq8zRPQXmEzRihoFqg39b9vnGRfmTdElha3x4LrrpsF5C82Pc0mA3isRmIhzJHD4RsD8=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, Collect and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img 
              className="rounded-t-lg" 
              src="https://lh3.googleusercontent.com/NIqqZVelGfLVtZsGGLBRVtjdTM17pQt3tzAaq8zRPQXmEzRihoFqg39b9vnGRfmTdElha3x4LrrpsF5C82Pc0mA3isRmIhzJHD4RsD8=s550"
              alt="current display image from opensea"
            />
            <div className={style.infoContainer}>
              <img 
               className="h-[2.25rem] rounded-full"
               src="https://lh3.googleusercontent.com/-lbs9f-YskoyOK2_0Li6saTrc-i5AuyR3IA7udHihmQJI_fgDRak0wfUQS4ZXATWu3u6zOzlG-q6iv2xuK0ggTYNJsrS2QJ5qrZXhQ=s80"
               alt="current dp creator data"
               />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a 
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/33445046430196205871873533938903624085962860434195770982901962545689408831489"
                >
                TheHazelru
                </a>
              </div>               
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero