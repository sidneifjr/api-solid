import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { RegisterService } from '@/services/register'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

/**
 * Controller -> é a função que lida com a saída de dados de uma requisição HTTP e devolve uma resposta, de alguma forma.
 *
 * Ou seja: gerencia requests provenientes do client e retorna responses para o mesmo.
 */
export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(usersRepository)

    await registerService.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
