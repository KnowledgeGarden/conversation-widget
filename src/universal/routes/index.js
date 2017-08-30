import SinglePageContainer from 'universal/containers/SinglePage/SinglePageContainer';

export default store => {
  return {
    component: SinglePageContainer,
    childRoutes: [
      require('./maps')(store),
      require('./accounts')(store),
      require('./graphql'),
      require('./notFound')(store)
    ]
  };
};
