import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Investigator, InvestigatorSchema } from '../schemas/casefile.schema';
import { InvestigatorsController } from './investigators.controller';
import { InvestigatorsService } from './investigators.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Investigator.name, 
    schema: InvestigatorSchema
  }])],
  controllers: [InvestigatorsController],
  providers: [InvestigatorsService]
})
export class InvestigatorsModule {}
