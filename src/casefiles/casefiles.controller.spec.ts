import { Test, TestingModule } from '@nestjs/testing';
import { CasefilesController } from './casefiles.controller';

describe('CasefilesController', () => {
  let controller: CasefilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasefilesController],
    }).compile();

    controller = module.get<CasefilesController>(CasefilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
