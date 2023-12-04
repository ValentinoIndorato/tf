import { ResponsiveChord } from "@nivo/chord";
import ChordData from "../assets/ChordData.json";
import PatronSvg from "./PatronSvg";
import { useState } from "react";

function P1Circulo({circulo2}) {
    const[color, setColor]= useState("")
    const[numero, setNumero]= useState("")

  return (
    <>
      <div className="Chord">
        <ResponsiveChord
          data={ChordData}
          keys={["John", "Raoul", "Jane", "Marcel", "Ibrahim"]}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          valueFormat=".2f"
          padAngle={0.02}
          innerRadiusRatio={0.96}
          arcOpacity={0}
          innerRadiusOffset={0}
          inactiveArcOpacity={0}
          arcBorderColor={{
            from: "color",
            modifiers: [["darker", 0.6]],
          }}
          ribbonOpacity={0}
          activeRibbonOpacity={1}
          inactiveRibbonOpacity={0}
          ribbonBorderColor={{
            from: "color",
            modifiers: [["darker", 0.6]],
          }}
          enableLabel={false}
          labelRotation={-90}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          colors={{ scheme: "nivo" }}
          motionConfig={{
            mass: 17,
            tension: 170,
            friction: 331,
            clamp: true,
            precision: 0.01,
            velocity: 0,
          }}
          ribbonTooltip={() => {
            false;
          }}
          onRibbonMouseEnter={(ribbon) => { console.log(ribbon.source.index)
            setColor(ribbon.source.color) 
            setNumero(ribbon.source.index)           
          }}
        />
      </div>
      {circulo2==true &&<section className="sectionSvg">
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
        <PatronSvg color={color} numero={numero} />
      </section>}
    </>
  );
}
export default P1Circulo;
