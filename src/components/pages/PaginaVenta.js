import React from 'react'; 
import FormularioVenta from "../forms/FormularioVenta";
import { Link } from "react-router-dom";
import firebase from "../API/firebase";

class PaginaVenta extends React.Component {
    submit = (data) => {
        var task = firebase.database().ref("venta/" + 123);
        task.set(data);
        alert("se guardo la venta correctamente!");
    };
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nueva venta</h1>
                    <FormularioVenta submit={this.submit}/>
                    <br />
                    <Link className="ui button" to="/">Cancelar</Link>
                    <br />
                </div>
            </div>
        );
    }
}
export default PaginaVenta;