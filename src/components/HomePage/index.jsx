import React from "react"
import BackgroundHomePage from "../../assets/img/group272.svg"
import BackgroundHPMobile from "../../assets/img/group272mobile.svg"
import '../styles.css'


export const HomePage = ({pagina, setPagina}) => {



return (
    <div className="conTainerHP">  
    <img className="backgroundHP" src={BackgroundHomePage} alt="Homepage Background" onClick={() => setPagina(!pagina) }></img>
    <img className="backgroundHPMobile" src={BackgroundHPMobile} alt="Homepage Background" onClick={() => setPagina(!pagina) }></img>
    </div>
)
}