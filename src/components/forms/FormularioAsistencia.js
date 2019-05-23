import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const styles = {
    borderColor: "red"
}

class FormularioAsistencia extends React.Component{
    state = {
        data: {
            hora_ingreso: "",
            hora_salida: "",
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
                    <label htmlFor="hora_ingreso">Hora ingreso</label>
                    <input 
                        style={styles} 
                        id="hora_ingreso" 
                        name="hora_ingreso" 
                        placeholder="1" 
                        value={data.hora_ingreso}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="hora_salida">Hora salida</label>
                    <input  
                        style={styles} 
                        id="hora_salida" 
                        name="hora_salida" 
                        placeholder="12" 
                        value={data.hora_salida}    
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
                <Button negative>Registrar Asistencia</Button>
            </Form>
        );
    }
}

FormularioAsistencia.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioAsistencia;
