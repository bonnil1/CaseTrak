import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Investigator, InvestigatorSchema, Casefile, CasefileSchema } from '../schemas/casefile.schema';
import { InvestigatorsController } from './investigators.controller';
import { InvestigatorsService } from './investigators.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Investigator.name, schema: InvestigatorSchema },
    { name: Casefile.name, schema: CasefileSchema },
  ])],
  controllers: [InvestigatorsController],
  providers: [InvestigatorsService]
})
export class InvestigatorsModule {}
