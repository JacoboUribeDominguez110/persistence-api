import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt.guard';

import { ContractsService } from './contracts.service';
import { CreateContractRequestDto } from 'src/dto/contracts.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly offersService: ContractsService) {
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  getContractsByUser(@Req() req) {
    const idUser = req.user.idUser;
    return this.offersService.getContractsByUser(idUser);
  }

  @Post('')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createContract(@Body() body: CreateContractRequestDto, @Req() req) {
    const idUser = req.user.idUser;
    return this.offersService.createContract(body, idUser);
  }
}
