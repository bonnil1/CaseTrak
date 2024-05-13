import { PartialType } from '@nestjs/mapped-types'
import { CreateCasefileDto } from './create-casefile.dto'

export class UpdateCasefileDto extends PartialType(CreateCasefileDto){}
