import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RepairRequestsModule } from './repair-requests/repair-requests.module';
import { CategoriesModule } from './categories/categories.module';
import { TutorialsModule } from './tutorials/tutorials.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    RepairRequestsModule,
    CategoriesModule,
    TutorialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
