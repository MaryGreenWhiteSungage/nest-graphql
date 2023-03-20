import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { initialModelsToCreate } from './data';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}
  /**
   * Seed all languages.
   *
   * @function
   */
  async seed() {
    try {
      console.log(`🌱 Start seeding Initial data... `);
      const model = initialModelsToCreate[0];

      const promises = model.data.map((data) => {
        console.log(`🌱 Start seeding Initial data... ${JSON.stringify(data)}`);
        this.prisma[model.name].delete({ where: { key: data.key } });
        this.prisma[model.name].create({ data: data });
      });

      return Promise.all(promises);

      console.log('✅ Database was seeded with Initial data');
    } catch (e) {
      console.error('❌ Seeding Initial data error');
      console.error(e);
    }
  }
}
