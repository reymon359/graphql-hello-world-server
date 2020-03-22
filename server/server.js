
const {gql} = require('apollo-server'); // Tag function to parse the schema

// GraphQL Schema. 
// It describes what our API can do
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

/* Now typeDefs is an abstract syntax 
   tree of the Graphql code:
    {
      kind: 'Document',
      definitions: [
        {
          kind: 'ObjectTypeDefinition',
          description: undefined,
          name: [Object],
          interfaces: [],
          directives: [],
          fields: [Array]
        }
      ],
      loc: { start: 0, end: 41 }
    }
*/

