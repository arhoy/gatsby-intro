const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      tours: allContentfulTourExample {
        nodes {
          slug
          tourLength
        }
      }
    }
  `);

  data.tours.nodes.forEach(tour => {
    createPage({
      path: `tours/${tour.slug}`,
      component: path.resolve('./src/templates/TourTemplate.js'),
      context: {
          slug:tour.slug
      }
    });
  });
};
