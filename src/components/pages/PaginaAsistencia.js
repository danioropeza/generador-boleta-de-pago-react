import React from 'react'; 
import FormularioAsistencia from "../forms/FormularioAsistencia";
import { Link } from "react-router-dom";
import firebase from "../API/firebase";

class PaginaAsistencia extends React.Component {
    submit = (data) => {
        var task = firebase.database().ref("asistencia/" + 123);
        task.set(data);
        alert("se guardo la asistencia correctamente!");
    };
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nueva asistencia</h1>
                    <FormularioAsistencia submit={this.submit}/>
                    <br />
                    <Link className="ui button" to="/">Cancelar</Link>
                    <br />
                </div>
            </div>
        );
    }
}
export default PaginaAsistencia;