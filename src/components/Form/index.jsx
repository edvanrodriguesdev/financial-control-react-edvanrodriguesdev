import { useState } from "react";
import App from "../../App";


export const Form = ( {listTransactions, setListTransactions}) => {

  const  [userInput, setUserInput] = useState('')
  const  [userValue, setUserValue] = useState('')
  const  [userType, setUserType] = useState('Entrada')
  
    
    const list = [
      {id: 1, name: 'Entrada', desc: 'Entrada'},
      {id: 2, name: 'Saída', desc: 'Despesa'}
    ]
  
  const addValue = (event) => {
    event.preventDefault()
    setListTransactions((info) => [...info, {description:userInput, type:userType, value:userValue, id:info.length+1}])
  }

  return (
    <form className="formNK" onSubmit={addValue}>
        <div className="divTopForm">
        <p className="pTopForm1">Descrição</p>
      <input type="text" placeholder="Digite aqui sua descrição" value={userInput}onChange={(event) =>
      setUserInput(event.target.value)} />
      <p className="pTopForm2">Ex: Compra de roupas</p>
      </div>
      <div className="divMidForm">
      <p className="pMidForm1">Valor</p>
      <p className="pMidForm2">Tipo de valor</p>
      </div>
      <div className="divBotForm">
      <input type="text" placeholder="R$"value={userValue}onChange={(event) =>
      setUserValue(event.target.value)} />
      <select value={userType} onChange={(event) =>
      setUserType(event.target.value)}>
        {list.map((item, index) => (
          <option key={index} value={item.desc}>{item.name}</option>
        ))}
      </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
