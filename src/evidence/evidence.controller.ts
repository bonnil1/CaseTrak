import { Controller, Get, Post, Put, Delete, Param, NotFoundException, Body, Render } from '@nestjs/common';
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
/*
    @Get('new')
    @Render('evidence')
    NewEvidence() {
        return {
            title: 'Add Evidence',
        }
    }
*/
    @Get(':evidenceId')
    getOneEvidence(@Param('evidenceId') evidenceId: string) {
        try {
            return this.evidenceService.getOneEvidence(evidenceId);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    @Post()
    createEvidence(@Body() createEvidenceDto: CreateEvidenceDto, @Param('id') id: string ) {
        console.log("hitting post evidence route")
        return this.evidenceService.createEvidence(createEvidenceDto, id)
    }

}

