export default function MainPage({setPage}: {setPage: any}) {
  return (<>
    <p className="uppercase text-amber-200" style={{fontFamily: "inter"}}>Independent game studio</p>
    <br />
    <p className="text-3xl font-bold">Worlds worth <br /><span className="text-amber-300">wandering</span> in.</p>
    <br />
    <p className="text-gray-500">We make games built around freedom of exploration, rich worlds, and stories that unfold differently for everyone.</p>

    <br />
    <button onClick={() => setPage("games")} className="btnNormal">See our games</button>
  </>)
}
