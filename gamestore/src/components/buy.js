import { useState, useEffect } from "react"

export default function Buy(props) {
    const [cart, setCart] = useState([])

    const handleCart = () => {
        setCart([...cart, props.game])
    }
    return(
        <a>
        <button>Kjøp</button>
        </a>
    )
}