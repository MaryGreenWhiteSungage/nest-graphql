import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TableDefinition, UserTableDefinition } from './TableDefinitions';
import { FileService } from './file.service';

@Injectable()
export class TableDescriptionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileService: FileService,
  ) {}

  getJoinFieldAliasValues(fieldRecords: Record<string, string>[]) {
    const fieldAliases = fieldRecords.map(
      (keystoneField, nestField) => `${keystoneField} AS ${nestField}`,
    );

    return `${fieldAliases.join(',')}`;
  }

  getJoinFieldValues(fieldRecords: Record<string, string>[]) {
    const fields = fieldRecords.map(
      (keystoneField, nestField) => `${nestField}`,
    );

    return `${fields.join(',')}`;
  }

  async getSelectedData(
    tableDefinition: TableDefinition,
  ): Promise<Record<string, string>[]> {
    try {
      const fields = this.getJoinFieldAliasValues(tableDefinition.fields);
      const queryPart = `
      SELECT ${fields} from public.${tableDefinition.keystoneTableName}
;\n`;
      console.log(queryPart);
      return this.prisma.$queryRaw`${queryPart}`;
    } catch (e) {
      console.error(e.toString());
      throw e;
    }
  }

  getInsertQuery(
    tableDefinition: TableDefinition,
    values: Record<string, string>[],
  ) {
    const fields = this.getJoinFieldValues(tableDefinition.fields);

    let queryPart = `
  INSERT INTO public.${tableDefinition.nestTableName}
  (${fields})
  VALUES `;
    queryPart += values.map(
      (object) => '\n   ' + `(${Object.values(object).join(',')}),`,
    );
    queryPart = queryPart.substring(0, queryPart.length - 1) + '\n';

    console.log(queryPart);
    return queryPart;
  }

  async generateScript() {
    const tableData = await this.getSelectedData(UserTableDefinition);
    const script = this.getInsertQuery(UserTableDefinition, tableData);

    this.fileService.saveFile(script);
  }
}
