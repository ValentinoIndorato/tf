import { useState, useEffect } from 'react'
import Grafico from './component/Grafico'
import data from "./assets/data.json"
import data2 from "./assets/dataCopy.json"
import dataSwarnPlot from "./assets/swarmPlot.json"
import SwarmPlot from './component/SwarmPlot'


function PrimerTp(){
    const [Data, setData] =useState(data)

  function handlerdata(){
    Data== data && setData(data2)
    Data== data2 && setData(data)
    console.log(Data)
  }
  const [count, setCount] = useState(0)
  useEffect(()=>{setCount( Data.length),[]})
    return (
        <>  
          
           {count==0 ? <div className='Swarm'> <SwarmPlot data={dataSwarnPlot}/>  </div>: <> <div className='graf'> <Grafico  Data={Data} handlerdata={handlerdata} /> </div></> }
          
          
          
          
        </>
      )
}
export default PrimerTp