import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateOfferRequestDto, CreateOfferResponseDto } from 'src/dto/offers.dto';
import { GetContractsResponseDto } from 'src/dto/contracts.dto';


@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) { }

  async saveOffer(offer: CreateOfferRequestDto, idUser: number) {
    const newOffer = await this.prisma.offers.create({
      data: {
        kwh_offer: offer.kwhOffer,
        kwh_price: offer.kwhPrice,
        initial_date: new Date(offer.initialDate),
        final_date: new Date(offer.finalDate),
        id_user: idUser
      }
    })
    return new CreateOfferResponseDto(newOffer);
  }

  async getSoldOffers(idUser: number) {
    const soldOffers = await this.prisma.users_contracts.findMany({
      where: {
        offers: {
          id_user: idUser
        }
      },
      orderBy: {
        contracts: {
          created_at: 'desc'
        }
      },
      select: {
        id_user_contract: true,
        offers: {
          select: {
            id_offer: true,
            kwh_offer: true,
            kwh_price: true,
            initial_date: true,
            final_date: true
          }
        },
        contracts: {
          select: {
            id_contract: true,
            kwh_offer: true,
            created_at: true
          }
        }
      }
    })
    return soldOffers.map(offer => new GetContractsResponseDto(offer));
  }
}
