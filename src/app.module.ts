import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallerModule } from './installer/installer.module';

@Module({
  imports: [InstallerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
