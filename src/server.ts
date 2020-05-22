import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import schema from './schema';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(5)],
});

app.use('*', cors());
app.use(compression());
app.use(morgan('common'));
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
const port = 3000;

httpServer.listen({ port }, (): void =>
  console.log(`🚀 GraphQL is now running on http://localhost:${port}/graphql`),
);
