import React from 'react'; 
import homeImage from '../../imagenes/imagenHomePrincipal.jpg';

const styles = {
    textAlign: "center"
}

class  PaginaPrincipal  extends React.Component {
    render() {
        return (
            <div className="ui container" style={styles}>
                <img src={homeImage} alt="" width="500px" height="500px"/>
            </div>
        )
    }

}
export  default  PaginaPrincipal;
