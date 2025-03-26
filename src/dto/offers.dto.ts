import { Expose } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOfferRequestDto {

  @IsNumber()
  @IsNotEmpty()
  kwhOffer: number;

  @IsNumber()
  @IsNotEmpty()
  kwhPrice: number

  @IsDateString()
  @IsNotEmpty()
  initialDate: string;

  @IsDateString()
  @IsNotEmpty()
  finalDate: string
}

export class CreateOfferResponseDto {

  @Expose()
  idOffer: number;

  @Expose()
  kwhOffer: number;

  @Expose()
  kwhPrice: number;

  @Expose()
  initialDate: string;

  @Expose()
  finalDate: string;

  constructor(offer: any) {
    this.idOffer = offer.id_offer
    this.kwhOffer = offer.kwh_offer
    this.kwhPrice = offer.kwh_price
    this.initialDate = new Date(offer.initial_date).toISOString()
    this.finalDate = new Date(offer.final_date).toISOString()
  }
}