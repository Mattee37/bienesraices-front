import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "./Layout";
import PropertiesList from "./PropertiesList";

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;
export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        Nombre
        Contenido
        Imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Pages = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { Nombre, Contenido, Imagen } = nodes[0];
  return (
    <Layout>
      <main className="contenedor">
        <h1>{Nombre}</h1>
        <PageContent>
          <Image fluid={Imagen.sharp.fluid} />
          <p>{Contenido} </p>
        </PageContent>
      </main>

      {Nombre === "Propiedades" && <PropertiesList Nombre={Nombre} />}
    </Layout>
  );
};

export default Pages;
