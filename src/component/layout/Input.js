function Input({inputValue, inputChange}){
    return (
        <input type="number" placeholder="0" value={inputValue} onChange={inputChange}/>
    )
}

export default Input;