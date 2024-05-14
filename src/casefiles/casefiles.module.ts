import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Casefile, CasefileSchema } from '../schemas/casefile.schema';
import { CasefilesController } from './casefiles.controller';
import { CasefilesService } from './casefiles.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Casefile.name, 
    schema: CasefileSchema
  }])],
  controllers: [CasefilesController],
  providers: [CasefilesService]
})
export class CasefilesModule {}
