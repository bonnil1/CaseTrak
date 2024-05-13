import { Test, TestingModule } from '@nestjs/testing';
import { CasefilesService } from './casefiles.service';

describe('CasefilesService', () => {
  let service: CasefilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasefilesService],
    }).compile();

    service = module.get<CasefilesService>(CasefilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
