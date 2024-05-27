import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Evidence } from '../schemas/casefile.schema';
import { Casefile } from '../schemas/casefile.schema';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';

@Injectable()
export class EvidenceService {
    constructor(
        @InjectModel(Evidence.name) private evidenceModel: Model<Evidence>,
        @InjectModel(Casefile.name) private casefileModel: Model<Casefile>,
        ) {}

    async getEvidence(): Promise<Evidence[]> {
        return this.evidenceModel.find().exec();
    }

    async getOneEvidence(evidenceId: string): Promise<Evidence> {
        const evidence = this.evidenceModel.findById(evidenceId);

        if(!evidence) {
            throw new Error('No evidence found.')
        }

        return evidence;
    }

    async createEvidence(createEvidenceDto: CreateEvidenceDto, id: string): Promise<Evidence> {
        const createdEvidence = new this.evidenceModel(createEvidenceDto);
        console.log(createdEvidence)
        const casefile = await this.casefileModel.findById(id)
        console.log(casefile)
        casefile.evidence.push(createdEvidence)
        await casefile.save()

        return createdEvidence.save()
    }

}
