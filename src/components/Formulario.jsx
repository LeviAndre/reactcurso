import { Component } from "react/cjs/react.production.min"
import React from "react"

class Formulario extends Component{

    render() {
        return (
        <section>
            <form>
              <input type="text" placeholder="Titulo"/>
              <textarea placeholder="Escreva sua nota..."/>
              <button>Criar Nota</button>
            </form>
        </section>
        );
    }
}

export default Formulario;