import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException, UseGuards} from '@nestjs/common';
import { CreateCasefileDto } from './dto/create-casefile.dto';
import { UpdateCasefileDto } from './dto/update-casefile.dto';
import { CasefilesService } from './casefiles.service';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('casefiles')
export class CasefilesController {
    //injecting casefile provider as a dependency
    constructor(private readonly casefilesService: CasefilesService){}

    //GET casefile with Query
    @Get()
    getByCaseNumber(@Query('case_number') case_number: string) {
        console.log("Receiving case number in backend for query!")
        return this.casefilesService.getByCaseNumber(case_number);
    }

    //GET /casefiles --> []
    @Get('all')
    getCasefiles() {
        return this.casefilesService.getCasefiles();
    }
/*
    //GET /casefiles/new
    @Get('new')
    @Render('casefile')
    NewCasefile() {
        return {
            title: 'Add Casefile',
        }
    }
*/
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


