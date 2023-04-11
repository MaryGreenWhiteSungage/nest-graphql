import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationStringService } from './application-string.service';

describe('ApplicationStringService', () => {
  let service: ApplicationStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationStringService],
    }).compile();

    service = module.get<ApplicationStringService>(ApplicationStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
