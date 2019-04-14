import React from 'react'; 
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const Navigation = () => (
    <div className="ui centered grid">
        <div className="center aligned column">
            <div className="ui inverted menu">
                <Link className="item" to="/"><Icon name="home" /> Home </Link>
                <Link className="item" to="/empleado" ><Icon name="sign in alternate" /> Empleado </Link>
                <Link className="item" to="/asistencia" ><Icon name="sign in alternate" /> Asistencia </Link>
                <Link className="item" to="/venta" ><Icon name="sign in alternate" /> Venta </Link>
            </div>
        </div>
    </div>
)
export default Navigation;