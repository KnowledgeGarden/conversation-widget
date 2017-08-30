import {GraphQLObjectType} from 'graphql';
import user from './models/User/userMutation';
import map from './models/Maps/mapMutation';
import node from './models/Nodes/nodeMutation';

const rootFields = Object.assign(user, map, node);

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => rootFields
});
