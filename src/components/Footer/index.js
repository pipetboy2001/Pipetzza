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
import { FiPhoneCall } from 'react-icons/fi'

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
                        <Heading>Contactanos</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsFacebook /> PipetzzaPizzeria 
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsInstagram /> Pipetzza_Pizzeria
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsTwitter /> PipetzzaPizzeria 
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    <FiPhoneCall  /> +569 79148614
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
