import { Card } from "../Card"
import { NoCard } from "../NoCard"


export const List = ({listTransactions, handleValue, filterList, setFilterList}) => {
    
    const filteredList = listTransactions.filter((transaction) => {
        return transaction.type === filterList
    }) 

    return(
        <div className="containerList">
            <div className="DivTopAllCL">
            <div>
                <p className="pDivTopCL">Resumo financeiro</p>
            </div>
            <div className="divButtonsCL">
                <button type="button" onClick={() => setFilterList("Todos")}>Todos</button>
                <button type="button" onClick={() => setFilterList("Entrada")}>Entradas</button>
                <button type="button" onClick={() => setFilterList("Despesa")}>Despesas</button>
            </div>
            </div>
            <ul className="ulCard">
            {filterList === "Todos"?(
                listTransactions?.map((transaction, index) => <Card transaction={transaction} key={index} handleValue={handleValue} />)
            ):filteredList.map((transaction, index) => <Card transaction={transaction} key={index} handleValue={handleValue} />)}
            </ul>
            {listTransactions < 1?(<NoCard />):''}
            
        </div>
    )
}