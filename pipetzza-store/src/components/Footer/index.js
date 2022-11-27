import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

export const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "yellow",
                textAlign: "center",
            }}>
                Pipetzza los reyes de las pizzas 👑
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>Soporte</Heading>
                        <FooterLink href="#">Contacto</FooterLink>
                        <FooterLink href="#">Preguntas frecuentes</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Conócenos</Heading>
                        <FooterLink href="#">Zona de Delivery</FooterLink>
                        <FooterLink href="#">Informacion legal</FooterLink>
                        <FooterLink href="#">Terminos y condicciones</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Redes sociales</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                <center>
                    <h5>Copyright © Pipetzza - 2022 Todos los derechos reservados</h5>
                </center>
            </Container>
        </Box>
    )
}
