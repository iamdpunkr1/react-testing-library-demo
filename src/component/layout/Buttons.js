function Buttons({name,calculate,id}){
    return (
    <button data-testid={id} onClick={calculate}>{name}</button>
    )
}

export default Buttons;