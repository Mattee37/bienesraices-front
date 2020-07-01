import React, { useState, useEffect, Fragment } from "react";
import { css } from "@emotion/core";
import listadoPropiedadesCSS from "../css/listadoPropiedades.module.css";

import useProperties from "../hooks/useProperties";
import useFilter from "../hooks/useFilter";

import PropertiesPreview from "./PropertiesPreview";

const PropertiesList = ({ Nombre }) => {
  const resultado = useProperties();
  const [propiedades] = useState(resultado);
  const [filtradas, setFiltradas] = useState([]);

  const { FiltroUI, categoria } = useFilter();

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        (propiedad) => propiedad.categoria.nombre === categoria
      );
      setFiltradas(filtro);
    } else {
      setFiltradas(propiedades);
    }
    // eslint-disable-next-line
  }, [categoria]);

  return (
    <Fragment>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map((propiedad) => (
          <PropertiesPreview
            key={propiedad.id}
            propiedad={propiedad}
            Nombre={Nombre}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PropertiesList;
