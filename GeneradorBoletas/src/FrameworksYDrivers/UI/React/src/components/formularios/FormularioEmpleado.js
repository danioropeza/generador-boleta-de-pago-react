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
            datosEmpleado: {
                nombre: "",
                ci: "",
                salario: "",
                montoPorHora: "",
                comision: "",
                metodoDePago: "Cheque",
                metodosDeNotificacion   : [],
                salarioBase: "",
                tipo: "Parcial",
                fechaInicioLaboral: "",
                perteneceASindicato: false,
            },
            notificaciones: {
                Whatsapp: false,
                Facebook: false,
                Email: false,
            }
        }
    }
    agregarNotificacion(notificacion) {
        var notificaciones = this.state.notificaciones;
        notificaciones[notificacion] = !this.state.notificaciones[notificacion];
        this.setState({ notificaciones: notificaciones });
    }
    crearListaDeNotificaciones() {
        var notificaciones = this.state.notificaciones;
        var listaDeNotificaciones = []
        for(var notificacion in notificaciones){
            if(notificaciones[notificacion]){
                listaDeNotificaciones.push(notificacion);
            }
        }
        return listaDeNotificaciones;
    }
    actualizarSindicatoCheckBox() {
        var datosEmpleado = this.state.datosEmpleado;
        datosEmpleado.perteneceASindicato = !datosEmpleado.perteneceASindicato;
        this.setState({ datosEmpleado });
    }
    onChange = evento => 
        this.setState({
            datosEmpleado: {...this.state.datosEmpleado, [evento.target.name]: evento.target.value }
        });
        
    onSubmit = () => {
        var datosEmpleado = this.state.datosEmpleado;
        datosEmpleado.metodosDeNotificacion = this.crearListaDeNotificaciones();
        this.props.submit(datosEmpleado);
    }
    esEmpleadoComision(tipoEmpleado) {
        return tipoEmpleado == "Comision";
    }
    esEmpleadoFijo(tipoEmpleado) {
        return tipoEmpleado == "Fijo";
    }
    esEmpleadoParcial(tipoEmpleado) {
        return tipoEmpleado == "Parcial";
    }
    generarCampoFormularioDeSalario(salario) {
        return (<Form.Field>
                    <label htmlFor="salario">Salario</label>
                    <input
                        style={styles}  
                        id="salario" 
                        name="salario" 
                        placeholder="9000" 
                        value={salario}    
                        onChange={this.onChange}
                    />
                </Form.Field>);
    }
    generarCampoFormularioDeFechaInicioLaboral(fechaInicioLaboral) {
        return (<Form.Field>
                    <label htmlFor="fechaInicioLaboral">Fecha de inicio laboral</label>
                    <input
                        style={styles}  
                        type="date"  
                        id="fechaInicioLaboral" 
                        name="fechaInicioLaboral"  
                        value={fechaInicioLaboral} 
                        onChange={this.onChange}
                    />
                </Form.Field>);
    }
    generarCampoFormularioDeComision(comision) {
        return (<Form.Field>
                    <label htmlFor="comision">Comision</label>
                    <input
                        style={styles}  
                        id="comision" 
                        name="comision" 
                        placeholder="110" 
                        value={comision}    
                        onChange={this.onChange}
                    />
                </Form.Field>);
    }
    generarCampoFormularioDeSalarioBase(salarioBase) {
        return (<Form.Field>
                <label htmlFor="salarioBase">Salario base</label>
                <input
                    style={styles}  
                    id="salarioBase" 
                    name="salarioBase" 
                    placeholder="110" 
                    value={salarioBase}    
                    onChange={this.onChange}
                />
            </Form.Field>);
    }
    generarCampoFormularioDeMontoPorHora(montoPorHora) {
        return (<Form.Field>
                    <label htmlFor="montoPorHora">Monto por hora</label>
                    <input
                        style={styles}  
                        id="montoPorHora" 
                        name="montoPorHora" 
                        placeholder="20" 
                        value={montoPorHora}    
                        onChange={this.onChange}
                    />
                </Form.Field> );
    }
    generarCamposFormularios(datosEmpleado) {
        return {
            "campoFormularioDeSalario": this.generarCampoFormularioDeSalario(datosEmpleado.salario),
            "campoFormularioDeFechaInicioLaboral": this.generarCampoFormularioDeFechaInicioLaboral(datosEmpleado.fechaInicioLaboral),
            "campoFormularioDeComision": this.generarCampoFormularioDeComision(datosEmpleado.comision),
            "campoFormularioDeSalarioBase": this.generarCampoFormularioDeSalarioBase(datosEmpleado.salarioBase),
            "campoFormularioDeMontoPorHora": this.generarCampoFormularioDeMontoPorHora(datosEmpleado.montoPorHora),
        }
    }
    render(){
        const { datosEmpleado } = this.state;
        const camposFormulario = this.generarCamposFormularios(datosEmpleado);
        
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="nombre">Nombre</label>
                    <input  
                        style={styles}  
                        id="nombre" 
                        name="nombre" 
                        placeholder="Jose Daniel Oropeza Soria" 
                        value={datosEmpleado.nombre}    
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
                        value={datosEmpleado.ci}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="tipo">Tipo</label>
                    <select style={styles} id="tipo" name="tipo" value={datosEmpleado.tipo} onChange={this.onChange}>
                        <option key="1" value={"Parcial"}>Parcial</option>
                        <option key="2" value={"Comision"}>Comision</option>
                        <option key="3" value={"Fijo"}>Fijo</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="metodoDePago">Metodo de pago</label>
                    <select style={styles} id="metodoDePago" name="metodoDePago" value={datosEmpleado.metodoDePago} onChange={this.onChange}>
                        <option key="1" value={"Cheque"}>Cheque</option>
                        <option key="2" value={"Deposito"}>Deposito</option>
                        <option key="3" value={"Efectivo"}>Efectivo</option>
                    </select>
                </Form.Field>  
                {this.esEmpleadoComision(datosEmpleado.tipo)?camposFormulario.campoFormularioDeComision:[]}
                {this.esEmpleadoComision(datosEmpleado.tipo)?camposFormulario.campoFormularioDeSalarioBase:[]}
                {this.esEmpleadoFijo(datosEmpleado.tipo)?camposFormulario.campoFormularioDeSalario:[]}
                {this.esEmpleadoFijo(datosEmpleado.tipo)?camposFormulario.campoFormularioDeFechaInicioLaboral:[]}
                {this.esEmpleadoParcial(datosEmpleado.tipo)?camposFormulario.campoFormularioDeMontoPorHora:[]}
                <Form.Group grouped>
                    <label>Metodos de notificacion</label>
                    <Form.Field onChange={this.agregarNotificacion.bind(this, "Facebook")} value="Facebook" label='Facebook' control='input' type='checkbox'/>
                    <Form.Field onChange={this.agregarNotificacion.bind(this, "Whatsapp")} value="Whatsapp" label='Whatsapp' control='input' type='checkbox'/>
                    <Form.Field onChange={this.agregarNotificacion.bind(this, "Email")} value="Email" label='Email' control='input' type='checkbox'/>
                </Form.Group>
                <Form.Group grouped>
                    <label>Pertenece al sindicato</label>
                    <Form.Field onChange={this.actualizarSindicatoCheckBox.bind(this)} label='Sindicato' control='input' type='checkbox'/>
                </Form.Group>
                <Button negative>Registrar Empleado</Button>
            </Form>
        );
    }
}

FormularioEmpleado.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioEmpleado;
