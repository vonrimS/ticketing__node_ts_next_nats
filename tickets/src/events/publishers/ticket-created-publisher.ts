import {Publisher, Subjects, TicketCreatedEvent} from '@von_ticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
