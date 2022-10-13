import { Body, Controller, Get, Header, Post, Res } from '@nestjs/common';
import { readFileSync } from 'fs';
import { FastifyReply } from 'fastify';

@Controller('installer')
export class InstallerController {
  @Get()
  @Header('Content-type', 'text/html')
  async get(@Res() response: FastifyReply): Promise<void> {
    try {
      readFileSync('.env', 'utf8');
      response.status(404);
      return;
      
    } catch (error) {
      console.log(error);
    }

    const content: string = readFileSync('templates/installer.html', 'utf8');

    response.send(content);
    
  }

  @Post()
  async post(@Res() response: FastifyReply, @Body() body): Promise<void> {
    console.log(body);
    response.send('ok');
  }
} 
