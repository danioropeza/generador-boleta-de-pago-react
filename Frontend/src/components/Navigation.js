import React from 'react'; 
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const styles = {
    backgroundColor: "red"
}
const Navigation = () => (
    <div className="ui centered grid">
        <div className="center aligned column">
            <div className="ui menu">
                <Link className="item ui basic red button" to="/"><Icon name="home" /> Home </Link>
                <Link className="item ui basic red button" to="/empleados" ><Icon name="address book" /> Empleados </Link>
                <Link className="item ui basic red button" to="/boletas" ><Icon name="ticket" /> Boletas </Link>
            </div>
        </div>
    </div>
)
export default Navigation;