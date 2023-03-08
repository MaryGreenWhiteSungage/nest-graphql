import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationStringResolver } from './application-string.resolver';

describe('ApplicationStringResolver', () => {
  let resolver: ApplicationStringResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationStringResolver],
    }).compile();

    resolver = module.get<ApplicationStringResolver>(ApplicationStringResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
