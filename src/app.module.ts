import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { AddressModule } from './address/address.module';


@Module({
  imports: [UserModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: '127.0.0.1',
              port: 3000,
              username: 'root',
              password: 'root',
              database: 'test',
              entities: [User],
              synchronize: true,
              autoLoadEntities: true,
      }),
            AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
