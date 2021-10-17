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
            if(number2===0 && number1===0){
                setTotal('undefined')
                break;
            }else{
                setTotal(Number(number1)/Number(number2));
                break;
            }
          
        
        default:
            setTotal(0);
               
      }
    console.log(total)
  }




return (
        <div className="calci"  data-testid="calculator">
            <h1>Mini Calculator</h1>
            <Input inputValue={number1} id='number1' inputChange={e=>{setNumber1(e.target.value)}}/>
            <Input inputValue={number2} id='number2' inputChange={e=>{setNumber2(e.target.value)}}/><br/>
            <Buttons calculate={()=>{calculateTotal('+')}} id='add' name={'+'}/>
            <Buttons calculate={()=>{calculateTotal('-')}} id='subtract' name={'-'}/>
            <Buttons calculate={()=>{calculateTotal('/')}} id='divide' name={'/'}/>
            <Buttons calculate={()=>{calculateTotal('*')}} id='multiply' name={'*'}/>
            <Buttons calculate={()=>{setNumber1(0);setNumber2(0);setTotal(0);}} id='clear'  name={'Clear'}/>
            <br/>
            <h2>Result:<span  data-testid="result">{total}</span></h2>
        </div>
    )
}

export default Calculator;