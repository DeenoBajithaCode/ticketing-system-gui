export class Configuration {
  constructor(
    public totalNumberOfTickets: number,
    public ticketReleaseRate: number,
    public customerRetrievalRate: number,
    public maximumTicketCapacity: number
  ) {}
}
