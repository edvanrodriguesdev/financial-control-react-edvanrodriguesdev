import LogoHeader from "../../assets/img/nukenzie.svg"
import '../styles.css'


export const Header = ({pagina, setPagina}) => {



    return (
        <div className="header">
        <div className="containerHeader">
            <img src={LogoHeader} alt='logo'></img>
            <button type="button" onClick={() => setPagina(!pagina)}>Inicio</button>
        </div>
        </div>
    )

}