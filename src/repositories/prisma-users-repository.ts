import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'

export class PrismaUsersRepository {
  // UserCreateInput é uma tipagem gerada pelo próprio Prisma, no momento da tabela específica.
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
