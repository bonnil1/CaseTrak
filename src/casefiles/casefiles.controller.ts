import { Controller, Get, Post, Put, Delete, Param, Query, Body, NotFoundException} from '@nestjs/common';
import { CreateCasefileDto } from './dto/create-casefile.dto';
import { UpdateCasefileDto } from './dto/update-casefile.dto';
import { CasefilesService } from './casefiles.service';

@Controller('casefiles')
export class CasefilesController {
    constructor(private readonly casefilesService: CasefilesService){}

    //GET /casefiles --> []
    @Get()
    getCasefiles(@Query('type') type: String) {
        return this.casefilesService.getCasefiles();
    }

    //GET /casefiles/:id ==> { ... }
    @Get(':id')
    getOneCasefile(@Param('id') id: string) {
        try {
            return this.casefilesService.getCasefile(id)
        } catch (err) {
            throw new NotFoundException()
        }
    }

    //POST /casefiles
    @Post()
    createCasefile(@Body() createCasefileDto: CreateCasefileDto) {
        return {};
    }

    //PUT /casefiles/:id --> { ... }
    @Put(':id')
    updateCasefile(@Param('id') id: string) {
        return {
            id,
        };
    }

    //DELETE /casefiles/:id
    @Delete(':id')
    removeCasefile(@Param('id') id: string) {
        return {
            id,
        };
    }
}


