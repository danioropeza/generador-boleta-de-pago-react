import React from 'react'; 
import axios from "axios";
import { Image, Card } from 'semantic-ui-react';
import boletaDePagoCorriente from "../../imagenes/boletaDePagoCorriente.jpg";

class  PaginaListaBoletas  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listaDeBoletas: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:7001/verboletadepagos')
             .then(respuesta => {
                 console.log(respuesta.data);
                    this.setState({
                        listaDeBoletas: respuesta.data
                    })
             })
    }
    generarCartaDeBoletas() {
        let listaDeCartasDeBoletas = [];
        this.state.listaDeBoletas.forEach((boleta) => {
            listaDeCartasDeBoletas.push(this.generarCarta(boleta));
        });
        return listaDeCartasDeBoletas;
    }
    generarCarta(boleta) {
        return (<Card>
                    <Image src={boletaDePagoCorriente} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{boleta.nombreEmpleado}</Card.Header>
                    <Card.Description>
                        ci: {boleta.ci} <br />  
                        salario: {boleta.salario} <br /> 
                        tipo de moneda: {boleta.tipoDeMoneda} <br />
                        metodo de pago: {boleta.metodoDePago} <br />
                    </Card.Description>
                    </Card.Content>
                </Card>);
    }
    render(){
        let listaDeCartasDeBoletas = this.generarCartaDeBoletas();
        return (
            <div>
                <Card.Group>
                    {listaDeCartasDeBoletas}
                </Card.Group>
            </div>
        )
    }

}
export  default  PaginaListaBoletas;
