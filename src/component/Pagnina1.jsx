import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import dataSwarnPlot from "../assets/swarmPlot.json"

function Pagina1({pag1}){
return (
    <div className='Swarm'>
    <ResponsiveSwarmPlot
    data={dataSwarnPlot}
    groups={pag1==true?[ 'group A']: [ 'group A', 'group B', 'group C' ]}
    identity="id"
    value="price"
    valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
    size={{
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
    spacing={15}
    forceStrength={7.2}
    simulationIterations={159}
    colors={ '#ffffffde' }
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '0'
            ],
            [
                'opacity',
                '0'
            ]
        ]
    }}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    enableGridX={false}
    enableGridY={false}
    axisTop={false}
    axisRight={false}
    axisBottom={false}
    axisLeft={false}
    useMesh={true}
    debugMesh={true}
    tooltip={false}

/>
</div>
)
}
export default Pagina1