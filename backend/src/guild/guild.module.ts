import { Module } from '@nestjs/common';
import { GuildService } from './guild.service';
import { GuildController } from './guild.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GuildRoleGuard } from './guards/guild-role.guard';
import { Reflector } from '@nestjs/core';
import { MailerModule } from '../mailer/mailer.module';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [PrismaModule, MailerModule, StorageModule],
  providers: [GuildService, GuildRoleGuard, Reflector],
  controllers: [GuildController],
  exports: [GuildService],
})
export class GuildModule {}
