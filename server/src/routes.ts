import { FastifyInstance } from 'fastify'
import { prisma } from "./lib/prisma

export function appRoutes(app: FastifyInstance) {
    
    // COLETA O HABITO DA TABELA DE HABITOS 
    app.get('/hello', async () => {
        const habits = await prisma.habit.findMany()
    
        return habits
    })
    


}


