import express, { Request, Response } from 'express';
import { Ticket } from '../models/tickets';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  console.log("request was made")
  const tickets = await Ticket.find({
    orderId: undefined,
  });
  console.log(tickets)
  res.send(tickets);
});

export { router as indexTicketRouter };
