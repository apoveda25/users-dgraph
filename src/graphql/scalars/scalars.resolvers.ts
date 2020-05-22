import { RegularExpression } from 'graphql-scalars';

export const Password = new RegularExpression(
  'Password',
  /^[a-zA-Z][a-zA-Z0-9.*_-]{7,15}$/,
);
