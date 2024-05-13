import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Casefile } from '../schemas/casefile.schema';
import { CreateCasefileDto } from './dto/create-casefile.dto';


@Injectable()
export class CasefilesService {
    constructor(@InjectModel(Casefile.name) private casefileModel: Model<Casefile>) {}
    
    async getCasefiles(): Promise<Casefile[]> {
        return this.casefileModel.find().exec();
    }

    async getCasefile(id: string) {
        const casefile = this.casefileModel.find((casefile) => casefile.id === id);

        if(!casefile) {
            throw new Error('casefile not found');
        }

        return casefile;
    }
    
    async createCasefile(createCasefileDto: CreateCasefileDto): Promise<Casefile> {
        const createdCasefile = new this.casefileModel(createCasefileDto);
        return createdCasefile.save();
    }

    
}
