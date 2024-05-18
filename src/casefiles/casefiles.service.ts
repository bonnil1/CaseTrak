import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Casefile } from '../schemas/casefile.schema';
import { CreateCasefileDto } from './dto/create-casefile.dto';
import { UpdateCasefileDto } from './dto/update-casefile.dto';


@Injectable()
export class CasefilesService {
    constructor(@InjectModel(Casefile.name) private casefileModel: Model<Casefile>) {}

    async getByCaseNumber(case_number: string): Promise<Casefile> {
        return this.casefileModel.findOne({case_number})
    }
   
    async getCasefiles(): Promise<Casefile[]> {
        return this.casefileModel.find().exec();
    }

    async getCasefile(id: string): Promise<Casefile> {
        const casefile = this.casefileModel.findById(id);

        if(!casefile) {
            throw new Error('Casefile not found.');
        }

        return casefile;
    }
  
    async createCasefile(createCasefileDto: CreateCasefileDto): Promise<Casefile> {
        const createdCasefile = new this.casefileModel(createCasefileDto);
       
        return createdCasefile.save();
    }

    async updateCasefile(id: string, updateCasefileDto: UpdateCasefileDto): Promise<Casefile> {
        const casefile = await this.casefileModel.findById(id);

        if (!casefile) {
            throw new Error('No casefile exists.');
        }
        casefile.set(updateCasefileDto).save()

        return casefile;
    }
    
    async removeCasefile(id: string): Promise<void> {
        const casefile = await this.getCasefile(id);
        
        return await this.casefileModel.findByIdAndDelete(id);
        //this.casefileModel = this.casefileModel.filter((casefile) => casefile.id !== id);
    }
}
