import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema'

//export type CasefileDocument = HydratedDocument<Casefile>;

@Schema()
export class Investigator {
    @Prop()
    name: string;

    @Prop()
    unit: string;

    @Prop()
    number: string;

    @Prop()
    email: string;
}

@Schema()
export class Evidence {
    @Prop()
    number: number;

    @Prop()
    type: string;

    @Prop()
    description: string;

    @Prop()
    location: string;
}

@Schema({timestamps: true})
export class Casefile {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({unique: true})
    case_number: string;

    @Prop()
    offense: string;

    @Prop()
    offense_date: string;

    @Prop()
    request: string;

    @Prop()
    status: string;

    @Prop({type: [Investigator]})
    investigator: Investigator[];

    @Prop({type: [Evidence]})
    evidence: Evidence[];
}

export const CasefileSchema = SchemaFactory.createForClass(Casefile);
export const InvestigatorSchema = SchemaFactory.createForClass(Investigator);
export const EvidenceSchema = SchemaFactory.createForClass(Evidence);