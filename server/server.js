
const {ApolloServer, gql} = require('apollo-server'); // Tag function to parse the schema

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

// Resolver function to return the data. 
// It has to match our type definitions
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world!👋'
  }
}

// Set up the server with ApolloServer
const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9000})
  .then(({url}) => console.log(`Server running at ${url}`));
