import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

class FormularioEmpleado extends React.Component{
    state = {
        data: {
            ci: "",
            nombre: "",
            descripcion: ""
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
                    <label htmlFor="descripcion">Descripcion</label>
                    <input  
                        id="descripcion" 
                        name="descripcion" 
                        placeholder="Guapo y extrovertido" 
                        value={data.descripcion}    
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
