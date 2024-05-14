import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { CasefilesModule } from './casefiles/casefiles.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestigatorsModule } from './investigators/investigators.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGO_URI), 
    CasefilesModule, 
    InvestigatorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
