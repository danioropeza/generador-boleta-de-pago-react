import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

class FormularioEmpleado extends React.Component{
    state = {
        data: {
            ci: "",
            nombre: "",
            salario: "",
            fecha_de_nacimiento: "",
            tipo: "",
            horas: "",
            comision: "",
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
                    <label htmlFor="nombre">Nombre</label>
                    <input  
                        id="nombre" 
                        name="nombre" 
                        placeholder="Jose Daniel Oropeza Soria" 
                        value={data.nombre}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="ci">CI</label>
                    <input  
                        id="ci" 
                        name="ci" 
                        placeholder="7711450" 
                        value={data.ci}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Form.Field>
                    <label htmlFor="salario">Salario</label>
                    <input  
                        id="salario" 
                        name="salario" 
                        placeholder="9000" 
                        value={data.salario}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento</label>
                    <input  
                        id="fecha_de_nacimiento" 
                        name="fecha_de_nacimiento" 
                        placeholder="10/12/97" 
                        value={data.fecha_de_nacimiento}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="tipo">Tipo</label>
                    <input  
                        id="tipo" 
                        name="tipo" 
                        placeholder="fijo" 
                        value={data.tipo}    
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="horas">Horas</label>
                    <input  
                        id="horas" 
                        name="horas" 
                        placeholder="10" 
                        value={data.horas}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="comision">Comision</label>
                    <input  
                        id="comision" 
                        name="comision" 
                        placeholder="110" 
                        value={data.comision}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Button primary>Registrar Empleado</Button>
            </Form>
        );
    }
}

FormularioEmpleado.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioEmpleado;
