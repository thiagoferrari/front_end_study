import React from 'react'
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext)

    if (global.dados === null) return null;
    return (
        <div>
            Produtos:
            {global.dados.map((produto) => (
                <li key={produto.id}>{produto.id}</li>
            ))}
            <br />
        </div>

    )
}

export default Produto