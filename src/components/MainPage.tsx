export default function MainPage({setPage}: {setPage: any}) {
  return (<>
    <p className="uppercase text-amber-200" style={{fontFamily: "inter"}}>Independent game studio</p>
    <br />
    <p className="text-3xl font-bold">Worlds worth <br /><span className="text-amber-300">wandering</span> in.</p>
    <br />
    <p className="text-gray-500">We make games built around freedom of exploration, rich worlds, and stories that unfold differently for everyone.</p>

    <br />
    <button onClick={() => setPage("games")} className="btnNormal">See our games</button>


    <p className="text-2xl font-bold mt-5">Our team</p>
    <br />

    <div className="flex gap-4 w-fitup">
      <div className="text-center w-50 border-white border-2 p-2 rounded-xl">
          <p className="font-bold">Nameless</p>
          <p className="text-gray-400">Website developer</p>
      </div>

      <div className="text-center w-50 border-white border-2 p-2 rounded-xl">
          <p className="font-bold">Jackko</p>
          <p className="text-gray-400">UI design</p>
      </div>

      <div className="text-center w-50 border-white border-2 p-2 rounded-xl">
          <p className="font-bold">Remmyy</p>
          <p className="text-gray-400">On a journey to find a C++ dev</p>
      </div>
    </div>

  </>)
}
