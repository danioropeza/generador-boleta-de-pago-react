import React from 'react'; 
import { Button } from "semantic-ui-react";

class PaginaBoletas extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (data) => {
        console.log(data)
        alert("se guardo la venta correctamente!");
    };
    redireccionarAFormulario(url) {
        //this.props.history.push('/' + url);
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "generarboleta")} color="red" fluid>Generar Boleta</Button>
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "enviarnotificacion")} color="red" fluid>Enviar Notificaciones</Button>
                </div>
            </div>
        );
    }
}
export default PaginaBoletas;