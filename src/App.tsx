import { useState } from 'react';
import MainPage from './components/MainPage'
import WishlistPage from './components/WishlistPage';
import CareersPage from './components/CareersPage';
import GamesPage from './components/GamesPage';
import Remmyy from './components/cv/Remmyy';
import Jackko from './components/cv/Jackko';
import Nameless from './components/cv/Nameless';

export default function App() {
  const [page, setPage] = useState("home");
  return (<>
    <nav className='flex border-b-2 border-b-white p-2 space-x-3'>
      <button onClick={() => setPage("home")} className='text-2xl font-bold cursor-pointer'>Right to Roam <span className='text-yellow-400'>Studios</span></button>

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

      <br />
      <p className='font-bold text-lg' style={{fontFamily: "Cabin Condensed"}}>Join our Discord:</p>
      <iframe src="https://canary.discord.com/widget?id=1493337596909322281&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </main>
  </>)
}
