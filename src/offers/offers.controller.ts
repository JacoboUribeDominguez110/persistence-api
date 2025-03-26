import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { OffersService } from './offers.service';

import { JwtAuthGuard } from 'src/auth/jwt.guard';

import { CreateOfferRequestDto } from 'src/dto/offers.dto';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  saveOffer(@Body() body: CreateOfferRequestDto, @Req() req) {
    const idUser = req.user.idUser;
    return this.offersService.saveOffer(body, idUser);
  }

  @Get('sells')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  getSoldOffers(@Req() req) {
    const idUser = req.user.idUser;
    return this.offersService.getSoldOffers(idUser);
  }
}
