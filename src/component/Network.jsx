import { ResponsiveNetwork } from '@nivo/network'
import dataNetwork from "../assets/network.json"
function Network({changeMouse}){
return(
    <ResponsiveNetwork
        data={dataNetwork}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={e=>e.distance}
        
        centeringStrength={changeMouse==true?0:2}
        repulsivity={changeMouse==true? 100:4000}

        nodeSize={n=>n.size}
        activeNodeSize={n=>1.5*n.size}
        nodeColor={e=>e.color}
        nodeBorderWidth={1}
        nodeBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.8
                ]
            ]
        }}
        linkThickness={n=>2+2*n.target.data.height}
        linkBlendMode="multiply"
        motionConfig="wobbly"
        onClick={ (element) =>(alert(element.id) )}

    />
)
}
export default Network

{/**

<ResponsiveNetwork
    data={dataNetwork}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    linkDistance={e=>e.distance}
    centeringStrength={0.3}
    repulsivity={96}
    iterations={74}
    nodeSize={n=>n.size}
    activeNodeSize={n=>1.5*n.size}
    nodeColor={e=>e.color}
    nodeBorderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '0.4'
            ]
        ]
    }}
    linkThickness={n=>2+2*n.target.data.height}
    linkColor={{ from: 'source.color', modifiers: [] }}
    linkBlendMode="multiply"
    motionConfig="wobbly"
/>
*/

}