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
import P1Circulo from './component/P1Cirulo'
import Inicio from './Inicio'
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
        path: "/TpCompleto",
        element: < PrimerTp/>,
    },
    {
            path: "/pag",
            element: < Pagina1/>,
        },
        {
          path: "/pag1",
          element: < Pagina1 pag1={true}/>,
      },
      {
        path: "/p1Circulo",
        element: < P1Circulo />,
    },
    {
      path: "/p2Circulo",
      element: < P1Circulo circulo2={true} />,
  },
  {
    path: "/",
    element: < Inicio  />,
},
      
       
      ])
  return (
    <>  
       <RouterProvider router={router} />            
    </>
  )
}

export default App
