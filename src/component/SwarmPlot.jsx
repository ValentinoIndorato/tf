import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import { useState, useEffect } from 'react'
import Network from './Network'
function SwarmPlot({data}){
   const[hover, setHover]= useState(true)
    const handleHover=()=>{setHover(!hover)}
    const [changeColor, setChangeColor]=useState(true)
    const handleChangeColor=()=>{setChangeColor(!changeColor)}
    const [changeMouse, setChangeMouse]=useState(true)
    useEffect(()=>{console.log(hover),[hover]})
        return(
        <>
         <ResponsiveSwarmPlot
        data={data}
        groups={hover == true ?[ 'group A']: [ 'group A', 'group B', 'group C' ]}
        identity="id"
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
        size={hover == true ?{
            key: 'volume',
            values: [
                4,
                50
            ],
            sizes: [
                100,
                500
            ]
        }:{
            key: 'volume',
            values: [
                4,
                20
            ],
            sizes: [
                6,
                20
            ]
        }}
        forceStrength={hover == false ?3:4}
        simulationIterations={hover == false ?2:220}
        colors={changeColor==false ?{ scheme: 'nivo' }:  { scheme: 'category10' }}
        borderWidth={changeColor==false ?9:null}
        
        borderColor={changeColor==false ?{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }:{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.2'
                ],
                [
                    'opacity',
                    '0.6'
                ]
            ]
        }}
        margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
        enableGridX={false}
        enableGridY={false}
        axisTop={ null}
        axisBottom={null}        
        axisRight={null}       
        axisLeft={null}
        colorBy={hover==true?"id":"group"}
        onMouseEnter={(node)=>{console.log(node),handleChangeColor()}}
        onMouseLeave={(node)=>{console.log(node),handleChangeColor()}}
        onClick={(node)=>{console.log(node),handleHover()}}
        tooltip={()=>{false}}
        
    />
    {hover==false&& <div className='net' onMouseEnter={()=>{setChangeMouse(true)}} onMouseLeave={()=>{setChangeMouse(false)}}  ><Network changeMouse={changeMouse}/></div> } 
        </>
    )
}
export default SwarmPlot