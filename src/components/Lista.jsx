import React, { Component } from "react"
import CardNota from "./CardNota"

class Lista extends Component{

    render(){
        return (
            <ul>
            <li>
                <CardNota/>
            </li>
            <li>
                <CardNota/>
            </li>
            <li>
                <CardNota/>
            </li>
        </ul>

        )
    }
}

export default Component;