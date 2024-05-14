import { Controller, Get, Post, Put, Delete, Param, NotFoundException, Body } from '@nestjs/common';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateCasefileDto } from 'src/casefiles/dto/update-casefile.dto';
import { InvestigatorsService } from './investigators.service';

@Controller('casefiles/:id/investigators')
export class InvestigatorsController {
    constructor(private readonly investigatorsService: InvestigatorsService){}

    @Get()
    getInvestigators() {
        return this.investigatorsService.getInvestigators();
    }

    @Get(':investigatorId')
    getInvestigator(@Param('investigatorId') investigatorId: string) {
        try {
            return this.investigatorsService.getInvestigator(investigatorId);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    @Post()
    createInvestigator(@Body() createInvestigatorDto: CreateInvestigatorDto) {
        return this.investigatorsService.createInvestigator(createInvestigatorDto)
    }
}
