import './App.css'
import {TailwindCard} from './Components/TailwindCard'

function App() {
   let obj ={
      a:"aa",
      b:"bb"
   }

   let arr=[1,2,3]

   let txt = "Chai aur Code"
   return (
    <>
    <div className='header'>
      <h1 className="bg-cyan-100 text-center w-96 text-black font-bold text-2xl p-3 m-2 rounded-lg">Tailwind CSS </h1>
      <button className=' p-3 font-bold  bg-green-300 text-black rounded-2xl text-2xl mb-3'>Click me!</button>
    </div>
      <TailwindCard name="Chai" btntxt="Contect me!" txt={txt} />
      <TailwindCard  name="Code"  txt="Code aur Chai"/>
    </>
  )
}

export default App
