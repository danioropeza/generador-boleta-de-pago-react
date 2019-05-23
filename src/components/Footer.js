import React from 'react'; 
import { Container, Divider, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';
const styles = {
    backgroundColor: "red"
}
const Footer = () => (
    <Segment primary vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} >
        <Container textAlign='center'>
            <Grid divided stackable>
            <Grid.Column width={8}>
                <Header primary as='h4' content='Redes sociales' />
                <List link primary>
                <List.Item as='a'><Icon name='whatsapp' />Whatsapp</List.Item>
                <List.Item as='a'><Icon name='facebook' />Facebook</List.Item>
                <List.Item as='a'><Icon name='instagram' />Instagram</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header primary as='h4' content='Funcion' />
                <p>
                    Permitir los registros de nuevos empleados, asistencias, ventas en la compania para contar con el seguimiento de los mismo. De esta forma se podra generar boletas de pago para cada empleado.
                </p>
            </Grid.Column>
            </Grid>

            <Divider primary section style={styles}/>
            <List horizontal npm  divided link size='small'>
            <List.Item as='a' href='#'>
                Mapa
            </List.Item>
            <List.Item as='a' href='#'>
                Contactanos
            </List.Item>
            <List.Item as='a' href='#'>
                Terminos de condiciones
            </List.Item>
            <List.Item as='a' href='#'>
                Politica de privacidad
            </List.Item>
            </List>
        </Container>
    </Segment>
)
export default Footer;