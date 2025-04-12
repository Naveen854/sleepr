import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationRepository } from './reservations.repository';
import { DatabaseModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './model/reservation.schema';
import { LoggerModule } from '@app/common';

@Module({
  imports:[
    LoggerModule,
    DatabaseModule,DatabaseModule.forFeature([{name:ReservationDocument.name,schema:ReservationSchema}])],
  controllers: [ReservationsController],
  providers: [ReservationsService,ReservationRepository],
})
export class ReservationsModule {}
