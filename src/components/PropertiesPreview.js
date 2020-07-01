import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { Link } from "gatsby";
import urlSlug from "url-slug";

import Icons from "./Icons";

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`;

const PropertiesPreview = ({ propiedad, Nombre }) => {
  const {
    nombre,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad;
  return (
    <Card>
      <Image fluid={imagen.sharp.fluid} />
      <Content>
        <h3>{nombre}</h3>
        <p>Precio: $ {precio}</p>
        <Icons
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        {Nombre === "Propiedades" ? (
          <Button to={urlSlug(nombre)}>Visitar Propiedad</Button>
        ) : (
          <Button to={`propiedades/${urlSlug(nombre)}`}>
            Visitar Propiedad
          </Button>
        )}
      </Content>
    </Card>
  );
};

export default PropertiesPreview;
