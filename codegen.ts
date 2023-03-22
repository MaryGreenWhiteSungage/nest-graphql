import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.gql',
  overwrite: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    'src/graphql/generated-types.ts': {
      plugins: [
        'add',
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        content: '/* eslint-disable */',
        withRefetchFn: true,
        scalars: {
          CalendarDay: 'string',
          DateTime: 'string',
          Decimal: 'string',
        },
      },
    },
  },
};

export default config;
