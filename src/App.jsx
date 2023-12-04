import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grafico from './component/Grafico'
import data from "./assets/data.json"
import data2 from "./assets/dataCopy.json"
import dataSwarnPlot from "./assets/swarmPlot.json"
import SwarmPlot from './component/SwarmPlot'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pagina1 from './component/Pagnina1'
import PrimerTp from './PrimerTp'
function App() {
  
  const [Data, setData] =useState(data)

  function handlerdata(){
    Data== data && setData(data2)
    Data== data2 && setData(data)
    console.log(Data)
  }
  const [count, setCount] = useState(0)
  useEffect(()=>{setCount( Data.length),[]})

    const router = createBrowserRouter([
        {
            path: "/pag",
            element: < Pagina1/>,
        },
        {
          path: "/TpCompleto",
          element: < PrimerTp/>,
      }
       
      ])
  return (
    <>  
       <RouterProvider router={router} />            
    </>
  )
}

export default App
