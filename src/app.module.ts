import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { AddressModule } from './address/address.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { OrderModule } from './order/order.module';
import { Subscription } from './subscription/subscription.entity';
import { Order } from './order/order.entity';
import { Address } from './address/address.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [UserModule,
            AddressModule,
            SubscriptionModule,
            OrderModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: '127.0.0.1',
              port: 3000,
              username: 'root',
              password: 'root',
              database: 'test',
              entities: [Address, Order, Subscription, User],
              synchronize: true,
              autoLoadEntities: true,
      }),
            ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor( dataSource: DataSource) {}
}

export const dataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3000,
  username: "test",
  password: "test",
  database: "test",
  entities: [User, Subscription, Order, Address],
})

dataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })
