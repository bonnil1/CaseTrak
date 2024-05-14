import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Evidence, EvidenceSchema } from '../schemas/casefile.schema'
import { EvidenceController } from './evidence.controller';
import { EvidenceService } from './evidence.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Evidence.name,
    schema: EvidenceSchema
  }])],
  controllers: [EvidenceController],
  providers: [EvidenceService]
})
export class EvidenceModule {}
