import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    await prisma.habit.deleteMany()         //Deleta os hábitos eventualmente que criados para que por padrão seja mostrado apenas o conteudo do seed.ts

    await prisma.habit.create({             // Cria o habito que aparecera para teste no banco de dados
        data: {
            title:'Beber 2L de água',
            created_at: new Date('2026-01-10T00:00:00.000z')
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })

    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })