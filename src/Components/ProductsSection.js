import Wrapper from "./Wrapper";
import logoB from '../logoB.png';

const ProductsSection = () => {
    return(
        <div className = 'pb-24 bg-dark' id = 'ourproduct'>

            <section className = 'pt-24'>
                <Wrapper>
                    <div className = 'h-1 w-28 bg-custom-green '></div>
                    <h1 className = 'text-5xl mt-2 mb-4 font-bold'>Our Mission</h1>
                    <h2 className = 'text-2xl text-graytext max-w-800px font-bold my-5'>
                        Build the next generation of music creation & streaming tools for consumers and artists with a bridge between the music industry and DeFi.
                    </h2>
                    <h2 className = 'text-2xl text-graytext max-w-800px font-bold my-5'>
                        Pave the future of both the crypto & music industry with an ecosystem that boasts of a new and improved solution for paying artists and products that will innovate both industries.
                    </h2>
                </Wrapper>
            </section>

            <section className = 'pt-24'>
                <Wrapper>
                    <div className = 'h-1 w-28 bg-custom-green '></div>
                    <h1 className = 'text-5xl mt-2 mb-4 font-bold'>Our Product(s)</h1>
                    <div className = 'flex flex-col md:flex-row md:items-center md:justify-between 2xl:max-w-70p'>
                        <div className = 'group flex items-center hover:text-custom-green cursor-pointer'>
                            <div style = {{width:'128px',height:'128px'}}>
                                <img className = 'w-full h-full rounded-full group-hover:rounded-none' src = {logoB} alt = 'logoB'></img>
                            </div>
                            <p className = 'ml-5 font-semibold'>BeatPlaylist</p>
                        </div>
                        <div className = 'md:ml-12 max-w-500px text-graytext text-lg'>
                            <p className = 'my-4'>BeatPlaylist is a desktop music streaming platform powered by YouTube that will be released in Beta during Q3, 2021.</p>
                            <p className = 'my-4'>FF9 will be integrated into BeatPlaylist as the platform's currency, powering our NFT albums, singles, playlists, and pins, and will offer wallet perks such as free premium to wallet holders of more than 10 million tokens and much more.</p>
                            <p className = 'my-4'>Learn more about FF9 and BeatPlaylist through our <a href = '/' className = 'hover:text-custom-green text-white'>Whitepaper.</a></p>
                        </div>
                    </div>
                </Wrapper>
            </section>

        </div>
    )
}

export default ProductsSection;