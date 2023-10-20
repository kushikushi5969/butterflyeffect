import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { count, operation } = req.body;

    // Validate input
    if (!Number.isInteger(count)) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // Here you might need more details about which item you want to update.
    // I'm assuming there's only one item for simplicity.
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: 1,
      },
    });

    if (!ticket) {
      return res.status(404).json({ error: 'tickets not found' });
    }

    let newCount;

    if (operation === 'increase') {
      newCount = ticket.count + count;
    } else if (operation === 'decrease') {
      if (ticket.count < count) {
        return res.status(400).json({ error: 'Not enough tickets in stock' });
      }
      newCount = ticket.count - count;
    } else {
      return res.status(400).json({ error: 'Invalid operation' });
    }

    // Update ticket in DB
    const updatedTicket = await prisma.ticket.update({
      where: { id: 1 },
      data: { count: newCount },
    });

    // Send updated tickets back to client
    res.json(updatedTicket);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
