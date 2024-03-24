//import { SwarmPlot } from "@nivo/swarmplot";
import { useNavigate } from "react-router-dom";
import dataSwarnPlot from "./assets/As.json"
import AS from "./AS";
import SwarmPlot from './component/SwarmPlot'
import dataSwarnPlot2 from "./assets/swarmPlot.json"

function Inicio() {
  const Navigate = useNavigate();

  return (
    <>
      <main  className="main_paginaPrincipal">
        <section className="section_paginaPrincipal">
          <a href="https://valentinoindorato.github.io/tf1/">
            <button>Primeros acercamientos</button>
          </a>
          <p>
            Estos ejemplos fueron realizados solo con <span>HTML</span> y <span>CSS</span> , que permite
            una menor interacción en comparación con tener <span>JavaScript</span>  <br />
            para los que use en su momento trabajos realizados para el seminario. <br />
            <span>En principio solo se trabajó con el hover para modificar el fill y stroke.</span>
            <hr />
          </p>
        </section>

        <section  className="section_paginaPrincipal">
          <button onClick={() => Navigate("/pag")}>Grilla 1</button>
          <button onClick={() => Navigate("/pag1")}>Grilla 2</button>
          <p>
            Para esta instancia de Trabajo final genere las siguientes dos grillas, con menor exhaustividad en planificación de la realización. Utilización de JS.
            <hr />
          </p>
          
        </section>

        <section  className="section_paginaPrincipal">         
          <button onClick={() => Navigate("/p1Circulo")}>Circulo 1</button>
          <button onClick={() => Navigate("/p2Circulo")}>Circulo 2</button>
          <p>
          Aquí <span>se incrementara la interacción con el usuario</span> a partir de JS relacionando un primer grafico circulo con su fondo, en el segundo al hacer hover sobre un segmento del circulo se le pasa información a otro svg para modificarlo. <br />
           Tomando numero de index y color para los distintos cambios.
            <hr />
          </p>
        </section>

        

        <section  className="section_paginaPrincipal">
          
          <button onClick={() => Navigate("/TpCompleto")}>
            Web más completa
          </button>
          <p>
          <span>Este trabajo se propone una mayor unificación de contenidos y rumbo hacia lo que tendría pensado,</span> presentándose dos momentos uno en el cual se ven franjas las cuales con el evento de click son borradas, cambiando a otro tipo franja y gama cromática; el segundo se encuentra al borrado de todas mostrando otro contenido que tiene dos instancias como en el anterior. 
            <hr />
          </p>
        </section>
      {/*  <div className='Swarm'> <SwarmPlot data={dataSwarnPlot2}/>  </div>
        <section className='AS'> <AS data={dataSwarnPlot}/> </section>*/}
      </main>
    </>
  );
}
export default Inicio;
//Swarm