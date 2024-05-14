import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Investigator } from 'src/schemas/casefile.schema';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';

@Injectable()
export class InvestigatorsService {
    constructor(@InjectModel(Investigator.name) private investigatorModel: Model<Investigator>) {}

    async getInvestigators(): Promise<Investigator[]> {
        return this.investigatorModel.find().exec();
    }

    async getInvestigator(id: string): Promise<Investigator> {
        const investigator = this.investigatorModel.findById(id)

        if(!investigator) {
            throw new Error('Investigator not found.');
        }

        return investigator;
    }

    async createInvestigator(createInvestigatorDto: CreateInvestigatorDto): Promise<Investigator> {
        const createdInvestigator = new this.investigatorModel(createInvestigatorDto);
        
        return createdInvestigator.save()
    }

}
