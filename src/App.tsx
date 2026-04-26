import { useState } from 'react';
import MainPage from './components/MainPage'
import WishlistPage from './components/WishlistPage';

export default function App() {
  const [page, setPage] = useState("home");
  return (<>
    <nav className='flex border-b-2 border-b-white p-2 space-x-3'>
      <button onClick={() => setPage("home")} className='text-2xl font-bold cursor-pointer'>Right to Roam <span className='text-yellow-400'>Studios</span></button>

      <button onClick={() => setPage("home")} className='font-bold cursor-pointer'>Home</button>

      <button onClick={() => setPage("games")} className='font-bold cursor-pointer'>Games</button>

      <button onClick={() => setPage("wishlist")} className='font-bold cursor-pointer ml-auto bg-amber-100 text-black p-2 rounded-xl'>Wishlist</button>
    </nav>
    <main className='m-3'>
      {page === "home" && <MainPage />}
      {page === "wishlist" && <WishlistPage />}
      {page === "games" && <p className='font-bold'>Games coming soon!</p>}
    </main>
  </>)
}
