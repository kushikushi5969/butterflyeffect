import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { count } = req.body;

    // Validate input
    if (!Number.isInteger(count) || count > 3) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // Here you might need more details about which item you want to update.
    // I'm assuming there's only one item for simplicity.
    const ticket = await prisma.ticket.findFirst();

    if (!ticket || ticket.count < count) {
      return res.status(400).json({ error: 'Not enough tickets in stock' });
    }

    // Update ticket in DB
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticket.id },
      data: { count: ticket.count - count },
    });

    // Send updated tickets back to client
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
