import { useState } from 'react';
import Buttons from './layout/Buttons'
import Input from './layout/Input'

function Calculator(){
    
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function calculateTotal(x) {
      switch(x){
        case '+':
            setTotal(Number(number1)+Number(number2));
            break;
        case '-':
            setTotal(Number(number1)-Number(number2));
            break;
        case '*':
            setTotal(Number(number1)*Number(number2));
            break;
        case '/':
            setTotal(Number(number1)/Number(number2));
            break;
        default:
            setTotal(0);
               
      }
    console.log(total)
  }




return (
        <div className="calci">
            <h1>Mini Calculator</h1>
            <Input inputValue={number1} inputChange={e=>{setNumber1(e.target.value)}}/>
            <Input inputValue={number2} inputChange={e=>{setNumber2(e.target.value)}}/><br/>
            <Buttons calculate={()=>{calculateTotal('+')}} name={'+'}/>
            <Buttons calculate={()=>{calculateTotal('-')}} name={'-'}/>
            <Buttons calculate={()=>{calculateTotal('/')}} name={'/'}/>
            <Buttons calculate={()=>{calculateTotal('*')}} name={'*'}/>
            <Buttons calculate={()=>{setNumber1(0);setNumber2(0);setTotal(0);}} name={'Clear'}/>
            <br/>
            <h2>Result: {total}</h2>
        </div>
    )
}

export default Calculator;