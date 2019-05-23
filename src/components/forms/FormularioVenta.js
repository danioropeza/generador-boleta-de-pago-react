import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

const styles = {
    borderColor: "red"
}

class FormularioVenta extends React.Component{
    state = {
        data: {
            monto: "",
            descripcion: "",
            fecha: "",
            empleadoCI: ""
        },
        loading: false,
        errors: {}
    }
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        
    onSubmit = () => {
        this.props.submit(this.state.data);
    }
    render(){
        const { data } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="monto">Monto</label>
                    <input  
                        style={styles}  
                        id="monto" 
                        name="monto" 
                        placeholder="200 bs" 
                        value={data.monto}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input 
                        style={styles}   
                        id="descripcion" 
                        name="descripcion" 
                        placeholder="venta de leche de cabra soltera" 
                        value={data.descripcion}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="fecha">Fecha</label>
                    <input 
                        style={styles}  
                        type="date" 
                        id="fecha" 
                        name="fecha" 
                        value={data.fecha}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="empleadoCI">Empleado CI</label>
                    <input  
                        style={styles}  
                        id="empleadoCI" 
                        name="empleadoCI" 
                        placeholder="7711450" 
                        value={data.empleadoCI}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Button negative>Registrar Venta</Button>
            </Form>
        );
    }
}

FormularioVenta.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioVenta;
