import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

export const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "red",
                textAlign: "center",
            }}>
                🍕 Pipetzza Pizzeria 🍕
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>Soporte</Heading>
                        <FooterLink href="#">Contacto</FooterLink>
                        <FooterLink href="#">Preguntas Frecuentes</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Conócenos</Heading>
                        <FooterLink href="#">Zona de Delivery</FooterLink>
                        <FooterLink href="#">Información legal</FooterLink>
                        <FooterLink href="#">Términos y condiciones</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Redes sociales</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsFacebook /> Facebook 
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsInstagram /> Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsTwitter /> Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsYoutube  /> Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                <center>
                    <h5 style={{
                        color: "#fd7724",
                        textAlign: "center",
                    }}>Copyright © Pipetzza - 2022 Todos los derechos reservados</h5>
                </center>
            </Container>
        </Box>
    )
}
