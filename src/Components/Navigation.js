
import { useState, useEffect } from 'react';
import logo from '../logo.png';
import Container from './Container';

const Navigation = () => {

    const openMenu = () => {
        document.getElementById('list-btn').classList.add('hidden')
        document.getElementById('cross-btn').classList.remove('hidden')
        // document.getElementById('navbar-items').classList.remove('hidden')
        document.getElementById('navbar-items').classList.remove('-right-3/4')
        document.getElementById('navbar-items').classList.add('right-0')
        document.getElementById('navbar-items').classList.add('opacity-100')
    }

    const closeMenu = () => {
        // document.getElementById('navbar-items').classList.add('hidden')
        document.getElementById('list-btn').classList.remove('hidden')
        document.getElementById('cross-btn').classList.add('hidden')
        document.getElementById('navbar-items').classList.add('-right-3/4')
        document.getElementById('navbar-items').classList.remove('right-0')
        document.getElementById('navbar-items').classList.remove('opacity-100')
    }


    const [listener, setListener] = useState(null)
    const [navbarClass, setNavbarClass] = useState("fixed")
    

    useEffect(() => {
      setListener(
          document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 80) {
            if (navbarClass !== "sticky bg-primary") {
                setNavbarClass("stick bg-primary")
            }
            } else {
            if (navbarClass !== "fixed") {
                setNavbarClass("fixed")
            }
            }
        })
      )
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [navbarClass, listener])


    return(
        // <nav className = 'border-t-4 py-20px border-green-400'>
        //     <div className = 'container flex flex-row justify-between align-center text-white'>
        //         <div>
        //             <img src = {logo} alt = 'logo'></img>
        //         </div>
                // <div>
                //     <ul className = 'flex flex-row'>
                //         <li className = 'min-w-100px'><a href = '#home'>Home</a></li>
                //         <li className = 'min-w-100px'><a href = '#ourproduct'>Our Product</a></li>
                //         <li className = 'min-w-100px'><a href = '#ourteam'>Our Team</a></li>
                //         <li className = 'min-w-100px'><a href = '#roadmap'>Roadmap</a></li>
                //         <li className = 'min-w-100px'><a href = '#roadmap'>Get Airdrop</a></li>
                //     </ul>
                // </div>
        //     </div>
        // </nav>
        <nav className = {`${navbarClass} fixed top-0 w-full border-t-4 py-20px border-custom-green`}>
            <Container>
                <div className = 'flex flex-row justify-between items-center text-white'>
                    <div>
                        <img src = {logo} alt = 'logo'></img>
                    </div>
                    <div className="block h-100 absolute mr-6 right-0 lg:hidden z-30">
                        <button onClick = {openMenu} id = 'list-btn' className="flex items-center text-teal-200 hover:text-white hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                        <button onClick = {closeMenu} id = 'cross-btn' className="hidden flex items-center text-teal-200 hover:text-white hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>
                    </div>

                    <div id = 'navbar-items' className = {`fixed w-3/4 max-w-500px lg:max-w-none lg:w-auto px-50px py-20 lg:p-0 lg:py-0 min-h-screen lg:min-h-full bg-secondary lg:bg-transparent top-0 -right-3/4 lg:static
                        transition-all duration-500 
                        `}>
                        <ul className = 'flex flex-col lg:flex-row text-left lg:text-center font-bold text-2xl lg:text-sm lg:items-center text-white'>
                            <li className = 'min-w-100px mt-8 lg:my-0'>
                                <a className = 'mt-1 pb-2 lg:pb-1 px-2 border-b-2 border-transparent hover:border-custom-green lg:block hover:text-custom-green' href = '#home'>Home</a>
                            </li>
                            <li className = 'min-w-100px mt-8 lg:my-0 lg:ml-5'>
                                <a className = 'mt-1 border-b-2 pb-2 lg:pb-1 px-2 border-transparent hover:border-custom-green lg:block hover:text-custom-green' href = '#ourproduct'>Our Product</a>
                            </li>
                            <li className = 'min-w-100px mt-8 lg:my-0 lg:ml-5'>
                                <a className = 'mt-1 border-b-2 pb-2 lg:pb-1 px-2 border-transparent hover:border-custom-green lg:block hover:text-custom-green' href = '#ourteam'>Our Team</a>
                            </li>
                            <li className = 'min-w-100px mt-8 lg:my-0 lg:ml-5'>
                                <a className = 'mt-1 border-b-2 pb-2 lg:pb-1 px-2 border-transparent hover:border-custom-green lg:block hover:text-custom-green' href = '#roadmap'>Roadmap</a>
                            </li>
                            <li className = 'min-w-100px text-center my-8 lg:my-0 lg:ml-5'>
                                <a className = 'p-4 border-2 rounded-xl border-custom-green block hover:text-custom-green' href = '#roadmap'>🎁 Get Airdrop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation;