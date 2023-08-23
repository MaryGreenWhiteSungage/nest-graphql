export type TableDefinition = {
  keystoneTableName: string;
  nestTableName: string;
  fields: Record<string, string>[];
};
export const UserTableDefinition: TableDefinition = {
  keystoneTableName: 'User',
  nestTableName: 'User',
  fields: [
    { id: 'id' },
    { loggedInAs: 'loggedInAs' },
    { authId: 'authId' },
    { email: 'email' },
    { firstName: 'firstName' },
    { middleInitial: 'middleInitial' },
    { lastName: 'lastName' },
    { createdAt: 'createdAt' },
    { updatedAt: 'updatedAt' },
    { createdBy: 'createdBy' },
    { updatedBy: 'updatedBy' },
  ],
};

export const UserTableDefinitionMods: TableDefinition = {
  keystoneTableName: 'User',
  nestTableName: 'AuthUser',
  fields: [{ authId: 'authId' }],
};
