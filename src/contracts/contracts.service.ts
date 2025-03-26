import { Injectable } from '@nestjs/common';
import { GetContractsResponseDto, CreateContractRequestDto } from 'src/dto/contracts.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) { }

  async getContractsByUser(idUser: number) {
    const contracts = await this.prisma.users_contracts.findMany({
      where: {
        id_user: idUser
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
      },
      orderBy: {
        contracts: {
          created_at: 'desc'
        }
      }
    });

    return contracts.map(currentContract => new GetContractsResponseDto(currentContract));
  }

  async createContract(contract: CreateContractRequestDto, idUser: number) {

    const newContract = await this.prisma.contracts.create({
      data: {
        kwh_offer: contract.kwhOffer
      }
    })
    const newUserContract = await this.prisma.users_contracts.create({
      data: {
        id_offer: contract.idOffer,
        id_contract: newContract.id_contract,
        id_user: idUser,
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
    });

    return new GetContractsResponseDto(newUserContract);
  }
}
