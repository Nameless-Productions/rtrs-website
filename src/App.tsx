import { useEffect, useRef, useState } from 'react';
import MainPage from './components/MainPage'
import WishlistPage from './components/WishlistPage';
import CareersPage from './components/CareersPage';
import GamesPage from './components/GamesPage';
import Remmyy from './components/cv/Remmyy';
import Jackko from './components/cv/Jackko';
import Nameless from './components/cv/Nameless';
import SecretPage from './components/secretPage';

export default function App() {
  const [page, setPage] = useState("home");
  const [titleClicks, setTitleClick] = useState(0)

  console.log(
    `%c
  ██████╗ ████████╗██████╗ 
  ██╔══██╗╚══██╔══╝██╔══██╗
  ██████╔╝   ██║   ██████╔╝
  ██╔══██╗   ██║   ██╔══██╗
  ██║  ██║   ██║   ██║  ██║
  ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
  `,
    "color: #7c3aed; font-family: monospace;"
  );

  console.log(
    "%cHey, you found this. That means you're our kind of person. We are hiring!",
    "color: #fff; font-size: 14px;"
  );


  useEffect(() => {
    console.log(titleClicks)
    if(titleClicks === 5){
      setPage("secret");
    }
  }, [titleClicks])
  return (<>
    <nav className='flex border-b-2 border-b-white p-2 space-x-3'>
      <button onClick={() => setPage("home")} className='text-2xl font-bold cursor-pointer'>Right to Roam <span className='text-yellow-400' title='Click me 5 times' onClick={() => setTitleClick((c) => c + 1)}>Studios</span></button>

      <button onClick={() => setPage("home")} className='font-bold cursor-pointer'>Home</button>

      <button onClick={() => setPage("games")} className='font-bold cursor-pointer'>Games</button>

      <button onClick={() => setPage("careers")} className='font-bold cursor-pointer'>Careers</button>

      <button onClick={() => setPage("wishlist")} className='font-bold cursor-pointer ml-auto bg-amber-100 text-black p-2 rounded-xl'>Wishlist</button>
    </nav>
    <main className='m-3'>
      {page === "home" && <MainPage setPage={setPage} />}
      {page === "wishlist" && <WishlistPage />}
      {page === "games" && <GamesPage />}
      {page === "careers" && <CareersPage />}
      {page === "remmyy" && <Remmyy />}
      {page === "jackko" && <Jackko />}
      {page === "nameless" && <Nameless />}
      {page === "secret" && <SecretPage />}

      <br />
      <p className='font-bold text-lg' style={{fontFamily: "Cabin Condensed"}}>Join our Discord:</p>
      <iframe src="https://canary.discord.com/widget?id=1493337596909322281&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </main>
  </>)
}
