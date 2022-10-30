import { useState } from "react";

const inicialState = {
    cart: [],
}

const useInicialState = () => {
    const [state, setState] = useState(inicialState);

    const addToCart = (payload) => {
        setState({
            ... state,
            cart: [... state.cart, payload]
        });
    };

    return {
        state,
        addToCart
    }
}

export default useInicialState;