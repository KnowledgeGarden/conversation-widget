import MapsContainer from '../modules/maps/containers/Maps/MapsContainer';

export default function (store) {
  return {
    component: MapsContainer,
    childRoutes: [
      require('./login')(store),
      require('./signup')(store),
      require('./logout'),
      require('./verifyEmail')
    ]
  };
}
