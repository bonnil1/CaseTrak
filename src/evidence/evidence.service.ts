import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Evidence } from '../schemas/casefile.schema';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';

@Injectable()
export class EvidenceService {
    constructor(@InjectModel(Evidence.name) private evidenceModel: Model<Evidence>) {}

    async getEvidence(): Promise<Evidence[]> {
        return this.evidenceModel.find().exec();
    }

    async getOneEvidence(id: string): Promise<Evidence> {
        const evidence = this.evidenceModel.findById(id);

        if(!evidence) {
            throw new Error('No evidence found.')
        }

        return evidence;
    }

    async createEvidence(createEvidenceDto: CreateEvidenceDto): Promise<Evidence> {
        const createdEvidence = new this.evidenceModel(createEvidenceDto);

        return createdEvidence.save()
    }


}
