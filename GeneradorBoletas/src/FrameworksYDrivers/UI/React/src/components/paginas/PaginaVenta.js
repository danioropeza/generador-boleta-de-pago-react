import React from 'react'; 
import FormularioVenta from "../formularios/FormularioVenta";
import { Button } from "semantic-ui-react";

class PaginaVenta extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (data) => {
        console.log(data)
        alert("se guardo la venta correctamente!");
    };
    volverAPaginaEmpleados() {
        this.props.history.goBack();
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nueva venta</h1>
                    <FormularioVenta submit={this.submit}/>
                    <br />
                    <Button onClick={this.volverAPaginaEmpleados.bind(this)}>Cancelar</Button>
                    <br />
                </div>
            </div>
        );
    }
}
export default PaginaVenta;