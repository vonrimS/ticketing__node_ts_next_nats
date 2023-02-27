import {Publisher, Subjects, TicketUpdatedEvent} from '@von_ticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
