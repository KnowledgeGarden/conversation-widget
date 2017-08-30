import {GraphQLObjectType} from 'graphql';
import user from './models/User/userQuery';
import map from './models/Maps/mapQuery';
import node from './models/Nodes/nodeQuery';

const rootFields = Object.assign(user, map, node);

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootFields
});
