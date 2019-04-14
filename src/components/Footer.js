import React from 'react'; 
import { Container, Divider, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

const Footer = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
            <Grid divided inverted stackable>
            <Grid.Column width={8}>
                <Header inverted as='h4' content='Redes sociales' />
                <List link inverted>
                <List.Item as='a'><Icon name='whatsapp' />Whatsapp</List.Item>
                <List.Item as='a'><Icon name='facebook' />Facebook</List.Item>
                <List.Item as='a'><Icon name='instagram' />Instagram</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header inverted as='h4' content='Mision' />
                <p>
                    Contribuir al desarrollo integral de los clientes mediante el diseño y la aplicación de un conjunto de servicios que fortalezcan la salud física y mental.
                </p>
            </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
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