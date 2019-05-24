import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

const styles = {
    borderColor: "red"
}

class FormularioEmpleado extends React.Component{
    constructor(){
        super();
        this.state = {
            data: {
                ci: "",
                nombre: "",
                fecha_de_nacimiento: "",
                tipo: "",
                horas: "",
                comision: "",
            },
            comboBoxLista: []
        }
    }
    componentDidMount() {
        this.obtenerTiposDeEmpleado();
    }
    obtenerTiposDeEmpleado() {
        //firebase.database().ref('/tipo').on('value', listaDeElementos => this.obtenerTiposDeFirebase(listaDeElementos));
    }
    obtenerTiposDeFirebase(listaDeElementos) {
            listaDeElementos.forEach(elemento => this.añadirTiposAlaLista(elemento));
            this.actualizarComboBoxLista();
    }
    añadirTiposAlaLista(tipo) {
        this.state.comboBoxLista.push(this.convertirFormatoComboBox(tipo.val()));
    }
    convertirFormatoComboBox(val) {
        var {id, tipo} = val;
        return <option key={id} value={tipo}>{tipo}</option>
    }
    actualizarComboBoxLista(){
        this.setState({comboBoxLista: this.state.comboBoxLista});
    }
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        
    onSubmit = () => {
        this.props.submit(this.state.data);
    }
    render(){
        const { data, comboBoxLista } = this.state;
        var campoHoras = <Form.Field>
                            <label htmlFor="horas">Horas</label>
                            <input
                                style={styles}  
                                id="horas" 
                                name="horas" 
                                placeholder="horas" 
                                value={data.horas}    
                                onChange={this.onChange}
                            />
                        </Form.Field>
        var campoComision = <Form.Field>
                                <label htmlFor="comision">Comision</label>
                                <input
                                    style={styles}  
                                    id="comision" 
                                    name="comision" 
                                    placeholder="110" 
                                    value={data.comision}    
                                    onChange={this.onChange}
                                />
                            </Form.Field>
        const value = this.state.data.metodoDePago;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="nombre">Nombre</label>
                    <input  
                        style={styles}  
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
                        style={styles}  
                        id="ci" 
                        name="ci" 
                        placeholder="7711450" 
                        value={data.ci}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Form.Field>
                    <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento</label>
                    <input
                        style={styles}  
                        type="date"  
                        id="fecha_de_nacimiento" 
                        name="fecha_de_nacimiento"  
                        value={data.fecha_de_nacimiento} 
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="tipo">Tipo</label>
                    <select style={styles} id="tipo" name="tipo" value={data.tipo} onChange={this.onChange}>
                        {comboBoxLista}
                    </select>
                </Form.Field>
                <Form.Group inline>
                    <label>Metodo de metodo de pago</label>
                    <Form.Radio
                        label='Small'
                        value='Deposito'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Medium'
                        value='Cheque'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Large'
                        value='Efectivo'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group grouped>
                    <label>Metodos de notificacion</label>
                    <Form.Field label='Facebook' control='input' type='checkbox' />
                    <Form.Field label='Whatsapp' control='input' type='checkbox' />
                    <Form.Field label='Email' control='input' type='npm checkbox' />
                </Form.Group>
                {this.state.data.tipo==="parcial"? campoHoras: ""} 
                {this.state.data.tipo==="comision"? campoComision: ""} 
                <Button negative>Registrar Empleado</Button>
            </Form>
        );
    }
}

FormularioEmpleado.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioEmpleado;
