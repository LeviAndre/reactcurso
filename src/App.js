import React from "react";
import { Component } from "react/cjs/react.production.min";
import Lista from "./components/Lista"
import Formulario from "./components/Formulario"

class App extends Component() {
  render() {
    return (
      <section>
        <Formulario/>
        <Lista/>
      </section>
    );
  }
}

export default App;
