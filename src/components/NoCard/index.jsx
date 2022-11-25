import NoCardImg from "../../assets/img/NoCard.svg"
import '../styles.css'


export const NoCard = () => {

return (
            <li className="nocard">
                <p>Você ainda não possui nenhum lançamento</p>
                <img src={NoCardImg} alt="no card"></img>
            </li>
)

}