import { Test, TestingModule } from '@nestjs/testing';
import { TableDescriptionService } from './table-description.service';
import { UserTableDefinition } from './TableDefinitions';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileService } from './file.service';

describe('TableDescriptionService', () => {
  let service: TableDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDescriptionService],
    })
      .useMocker((token) => {
        switch (token) {
          case PrismaService:
            return {};
          case FileService:
            return {};
          default:
            return null;
        }
      })
      .compile();

    service = module.get<TableDescriptionService>(TableDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get values back', () => {
    const values = service.getJoinFieldValues(UserTableDefinition.fields);
    console.log(values);
    expect(values).toBeDefined();
    expect(values.length).toBe(22);
  });

  it('should get select values back', () => {
    const values = service.getSelectedData(UserTableDefinition);
    console.log(values);
    expect(values).toBeDefined();
    expect(values).not.toBeFalsy();
  });
});
