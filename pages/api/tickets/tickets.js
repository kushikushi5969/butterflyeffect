import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  try {
    const tickets = await prisma.ticket.findUnique({
      where: {
        id: 1,
      },
    });

    if (!tickets) {
      return res.status(404).json({ error: 'tickets not found' });
    }

    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
