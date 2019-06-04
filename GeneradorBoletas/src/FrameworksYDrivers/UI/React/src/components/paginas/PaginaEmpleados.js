import React from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import axios from "axios";

import empleadoFeliz from "../../imagenes/empleadoFeliz.jpg";

class PaginaEmpleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDeEmpleados: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:7000/empleados')
             .then(respuesta => {
                this.setState({
                    listaDeEmpleados: respuesta.data
                })
             })
    }
    redireccionarAFormulario(url) {
        this.props.history.push('/' + url);
    }
    generarJSON() {
        axios.get('http://localhost:7000/empleado/generarjson')
             .then(respuesta => {
                alert(respuesta.data)
                window.location.reload();  
             })
             .catch(error => console.log(error))
    }
    generarCartaDeEmpleados() {
        let listaDeCartasDeEmpleados = [];
        this.state.listaDeEmpleados.forEach((empleado) => {
            listaDeCartasDeEmpleados.push(this.generarCarta(empleado));
        });
        return listaDeCartasDeEmpleados;
    }
    generarCarta(empleado) {
        return (<Card>
                    <Image src={empleadoFeliz} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{empleado.nombre}</Card.Header>
                    <Card.Description>
                        ci: {empleado.ci} <br />  
                        salario: {empleado.salario} <br /> 
                        montoPorHora: {empleado.montoPorHora} <br />
                        comision: {empleado.comision} <br />
                        salarioBase: {empleado.salarioBase} <br />
                        fechaInicioLaboral: {empleado.fechaInicioLaboral} <br />
                        perteneceASindicato: {empleado.perteneceASindicato} <br />
                    </Card.Description>
                    </Card.Content>
                </Card>);
    }
    render(){
        let listaDeCartasDeEmpleados = this.generarCartaDeEmpleados();
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "empleado")} color="red" fluid>Registrar Empleado</Button>
                    <br />
                    <Button onClick={this.generarJSON} color="red" fluid>Generar Empleados</Button>
                    <br />
                    <Card.Group>
                        {listaDeCartasDeEmpleados}
                    </Card.Group>
                </div>
            </div>
        );
    }
}
export default PaginaEmpleados;