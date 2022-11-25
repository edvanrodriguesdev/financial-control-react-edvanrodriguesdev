import { List } from "../List"
import Trash from "../../assets/img/trash.svg"
import GrayBorder from "../../assets/img/grayborder.svg"
import GreenBorder from "../../assets/img/greenborder.svg"
import '../styles.css'


export const Card = ({transaction, handleValue}) => {
    
    return(
            <li className="card">
                {transaction.type === "Entrada"?(<img className="borderImg" src={GreenBorder} alt=""></img>)
            :   (<img className="borderImg" src={GrayBorder} alt=""></img>) 
            }
                <div className="divLiLeft">
                    <p className="pLiLeft1">{transaction.description}</p>
                    <p className="pLiLeft2">{transaction.type}</p>
                </div>
                <div className="divLiRight">
                    <p>R$ {transaction.value}</p>
                    <button type="button" onClick={ () => handleValue(transaction.id)}>
                        <img src={Trash} alt="trash"></img>
                    </button>
                </div>
            </li>
    )
}