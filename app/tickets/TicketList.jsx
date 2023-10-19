async function getTickets() {
  const res = await fetch("https://api.adviceslip.com/advice");
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  const { slip } = tickets;
  return <p>{slip.advice}</p>;
}
