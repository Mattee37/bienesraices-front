const urlSlug = require("url-slug");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          Nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `);
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors);
  }

  const paginas = resultado.data.allStrapiPaginas.nodes;
  const propiedades = resultado.data.allStrapiPropiedades.nodes;

  paginas.forEach((pagina) => {
    actions.createPage({
      path: urlSlug(pagina.Nombre),
      component: require.resolve("./src/components/Pages.js"),
      context: {
        id: pagina.id,
      },
    });
  });

  propiedades.forEach((propiedad) => {
    actions.createPage({
      path: `propiedades/${urlSlug(propiedad.nombre)}`,
      component: require.resolve("./src/components/Properties.js"),
      context: {
        id: propiedad.id,
      },
    });
  });
};
