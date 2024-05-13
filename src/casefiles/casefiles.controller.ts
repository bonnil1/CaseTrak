import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException} from '@nestjs/common';
import { CreateCasefileDto } from './dto/create-casefile.dto';
import { UpdateCasefileDto } from './dto/update-casefile.dto';
import { CasefilesService } from './casefiles.service';

@Controller('casefiles')
export class CasefilesController {
    constructor(private readonly casefilesService: CasefilesService){}

    //GET /casefiles --> []
    @Get()
    getCasefiles() {
        return this.casefilesService.getCasefiles();
    }

    //GET /casefiles/:id ==> { ... }
    @Get(':id')
    getOneCasefile(@Param('id') id: string) {
        try {
            return this.casefilesService.getCasefile(id);
        } catch (err) {
            throw new NotFoundException();
        }
    }

    //POST /casefiles
    @Post()
    createCasefile(@Body() createCasefileDto: CreateCasefileDto) {
        return this.casefilesService.createCasefile(createCasefileDto)
    }

    //PUT /casefiles/:id --> { ... }
    @Put(':id')
    updateCasefile(@Param('id') id: string, @Body() updateCasefileDto: UpdateCasefileDto) {
        return this.casefilesService.updateCasefile(id, updateCasefileDto)
    }

    //DELETE /casefiles/:id
    @Delete(':id')
    removeCasefile(@Param('id') id: string) {
        return this.casefilesService.removeCasefile(id)
    }
}


