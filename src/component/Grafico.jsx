import { ResponsiveAreaBump } from '@nivo/bump'
import data from "../assets/data.json"
import data2 from "../assets/dataCopy.json"
import { useState, useEffect } from 'react'
function Grafico ({Data, handlerdata}){
 
 function deleteElement(element){
  const index= Data.findIndex((e)=>e.id== element)
  Data.splice(index, 1)

 }



return(
  <>
     <ResponsiveAreaBump
    
     
        data={Data}
        margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
        spacing={Data == data ? 200 : 8}
        colors={Data == data ? { scheme: 'nivo' }:{ scheme: 'category10' }}
        blendMode="multiply"
       
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel={false}
        endLabel={false}
                enableGridX={false}
                
        axisTop={ null}
        axisBottom={null}
       tooltip={()=>{false}}
       onClick={ (element) =>(console.log(element.id),handlerdata(),deleteElement(element)  )}
    />
  </>
)
  
  }


export default Grafico