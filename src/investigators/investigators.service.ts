import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Investigator } from 'src/schemas/casefile.schema';
import { Casefile } from 'src/schemas/casefile.schema';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';

@Injectable()
export class InvestigatorsService {
    constructor(
        @InjectModel(Investigator.name) private investigatorModel: Model<Investigator>,
        @InjectModel(Casefile.name) private casefileModel: Model<Casefile>
        ) {}

    async getInvestigators(): Promise<Investigator[]> {
        return this.investigatorModel.find().exec();
    }

    async getInvestigator(investigatorId: string): Promise<Investigator> {
        const investigator = this.investigatorModel.findById(investigatorId)

        if(!investigator) {
            throw new Error('Investigator not found.');
        }

        return investigator;
    }

    async createInvestigator(createInvestigatorDto: CreateInvestigatorDto, id: string): Promise<Investigator> {
        const createdInvestigator = new this.investigatorModel(createInvestigatorDto);
        console.log(createdInvestigator)
        const casefile = await this.casefileModel.findById(id)
        console.log(casefile)
        casefile.investigator.push(createdInvestigator)
        await casefile.save()
        
        return createdInvestigator.save()
    }

}
