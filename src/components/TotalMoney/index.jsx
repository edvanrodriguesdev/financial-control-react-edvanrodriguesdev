import '../styles.css'


export const TotalMoney = ({listTransactions, filterList, setFilterList}) => {

    const In = listTransactions.filter((value) => {
        return value.type === "Entrada"
    })
    
    const Out = listTransactions.filter((value) => {
        return value.type === "Despesa"
    })

    const totalInValue = In.reduce((oldValue, curValue) => {
        return parseInt(curValue.value) + parseInt(oldValue)
    }, 0)

    const totalOutValue = Out.reduce((oldValue, curValue) => {
        return parseInt(curValue.value) + parseInt(oldValue)
    }, 0)

    const totalValue = totalInValue - totalOutValue

return (
<div className="divTotalMoney">
<div className='divTopTotalMoney'>
    <p>Valor total:</p>
    <span>
        <p>$</p>
        <p>{totalValue}</p>
    </span>
</div>
<div className='divBotTotalMoney'>
    <p>O valor se refere ao saldo</p>
</div>
</div>
)
}