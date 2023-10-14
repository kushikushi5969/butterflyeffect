import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const tickets = await prisma.ticket.create({
    data: {
      title: 'チケット枚数',
      count: 25,
    },
  })
  console.log(tickets)
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
