import './Button.css'

function Button({count, increment, decrement}){

    return <button onMouseEnter={increment} onMouseLeave={decrement} className="Button">{count}</button>
}

export default Button;