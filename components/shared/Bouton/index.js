import React from 'react'
import BoutonStc from './Bouton.stc'

function Bouton(props) {
    return (
        <BoutonStc href={props.href} className={props.className} >
            {props.children}
        </BoutonStc>
    )
}

export default Bouton
