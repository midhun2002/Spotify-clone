import React from 'react'
import './sideopt.css'
function Sidebaroption({Icon,option}) {
    return (
        <div className="sidebaropt">
            <Icon className="icon"/>
            <h4>{option}</h4>
        </div>
    )
}

export default Sidebaroption
