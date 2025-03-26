import { Expose } from "class-transformer";
import { CreateOfferResponseDto } from "./offers.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateContractRequestDto {

  @IsNumber()
  @IsNotEmpty()
  idOffer: number;

  @IsNumber()
  @IsNotEmpty()
  kwhOffer: number

}

export class GetContractsResponseDto {
  @Expose()
  idContract: number;

  @Expose()
  offer: CreateOfferResponseDto;

  @Expose()
  kwhOffer: number;

  @Expose()
  createdAt: number;

  constructor(contract: any) {
    this.idContract = contract.contracts.id_contract
    this.kwhOffer = contract.contracts.kwh_offer
    this.createdAt = contract.contracts.created_at
    this.offer = new CreateOfferResponseDto(contract.offers);
  }
}