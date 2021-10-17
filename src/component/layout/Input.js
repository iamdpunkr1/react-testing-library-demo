function Input({inputValue, inputChange, id}){
    return (
        <input type="number" data-testid={id}  value={inputValue} onChange={inputChange}/>
    )
}

export default Input;