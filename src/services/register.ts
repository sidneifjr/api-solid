import { prisma } from '@/lib/prisma'
import type { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { hash } from 'bcryptjs'

interface RegisterServiceRequest {
  name: string
  email: string
  password: string
}

/**
 * Dependency Inversion Principle (DIP)
 *
 * 1) "Inverter a ordem de como a dependência chega a esse case de uso".
 *
 * 2) Ao invés do meu caso de uso instanciar as dependências que ele precisa (PrismaUsersRepository), ele recebe tais dependências como um parâmetro.
 *
 * 3) Cada classe no caso de uso terá sempre um único método.
 *
 * 4) Dentro da classe, podemos ter um constructor, onde passamos nossas dependências.
 */
export class RegisterService {
  constructor(private usersRepository: PrismaUsersRepository) {}

  async execute({ name, email, password }: RegisterServiceRequest) {
    const passwordHash = await hash(password, 6)

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new Error('E-mail already exists.')
    }

    // const prismaUsersRepository = new PrismaUsersRepository()

    await this.usersRepository.create({
      name,
      email,
      password_hash: passwordHash,
    })
  }
}
