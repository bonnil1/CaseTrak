import { Controller, Get, Post, Put, Delete, Param, NotFoundException, Body } from '@nestjs/common';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';
import { EvidenceService } from './evidence.service';

@Controller('casefiles/:id/evidence')
export class EvidenceController {
    constructor(private readonly evidenceService: EvidenceService){}

    @Get()
    getEvidence() {
        return this.evidenceService.getEvidence();
    }

    @Get(':evidenceId')
    getOneEvidence(@Param('evidenceId') evidenceId: string) {
        try {
            return this.evidenceService.getOneEvidence(evidenceId);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    @Post()
    createEvidence(@Body() createEvidenceDto: CreateEvidenceDto) {
        return this.evidenceService.createEvidence(createEvidenceDto)
    }
}

