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

      await this.prisma.applicationString.deleteMany({
        where: {
          key: {
            in: model.data.map((item) => item.key),
          },
        },
      });
      await this.prisma[model.name].createMany({ data: model.data });

      console.log('✅ Database was seeded with Initial data');
      return true;
    } catch (e) {
      console.error('❌ Seeding Initial data error');
      console.error(e);
    }
  }
}
