import '../styles/styles.scss';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import cert from "../images/ibm.png";
import google from '../images/google.png';
import twitch from '../images/twi.png';
import logo1 from "../images/illustration-mockups.svg";
import logo2 from '../images/illustration-your-users.svg';
import logo3 from '../images/illustration-flowing-conversation.svg';
import Projects from '../components/Projects';
import Certificaciones from '../components/Certificaciones';
import Footer from '../components/Footer';
import '../styles/page/App.scss';


function App() {
  return (
    <>
      <div id='inicio'>
        <Nav />
      </div>
      <Hero />
      <div className='ProjectsPage' id='Projects'>
        <Projects name='PokeApi' description='Es una aplicaciòn web hecha en react junto con hooks para consumir la
					API de pokemón. Tiene como objetivo buscar un pokemon en dicha Api. Se
					realizaron los test con la biblioteca enzyme.' enlace='https://armandocres.github.io/pokeapi/' logo={logo1} className="color1" />
        <Projects name='GiftExpert' description='Es una aplicación hecha con React y hooks para consumirla API de Giphy.
          Tiene como objetivo traer 10 gifs de alguna categoria.
          Se implemenatron pruebas con enzyme' enlace='https://armandocres.github.io/react-gifexpertapp/' logo={logo3} className='color2'/>
        <Projects name='Rick And Morty' description='Es una aplicación hecha con React, Hooks que consume la API de Rick And Morty además de hacer un dark mode con el uso de UseContext' enlace='https://armandocres.github.io/rickandmortyapi/' logo={logo2} className='color3' />
        <Projects name='TODO App' description='Es una aplicación hecha con React que tiene como objetivo listar, eliminar y tachar activididades diarias' enlace='https://todo-armandocres.herokuapp.com/' logo={logo1} className='color3' />
      </div>
      <div className='CertificacionesPage'>
      <Certificaciones img={cert} desc='Logramos entrar al top 5 de los mejores proyectos dedicados a mejorar
					el ámbito educativo' link='https://challenge.talent-network.org/2020/developer-land-at-home/educacion-remota-con-ibm/' desclink='leer más' />
      <Certificaciones img={twitch} desc='Tenemos un canal en Twitch donde se enseñan conceptos del desarrollo web' link='https://www.twitch.tv/armandocodigo' desclink='Ir a twitch'/>
        <Certificaciones img={google} desc='Certificado "Introducción al desarrollo web I y II impartido por Google. Id: "GQ6 Y7Y JB6" ' link='https://learndigital.withgoogle.com/activate/validate-certificate-code' desclink='ver certificado' />
      </div>
      <Skills />
      <div id='footers'>
        <Footer />
      </div>
    </>
  );
}

export default App;
