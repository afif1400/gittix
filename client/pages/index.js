import Link from 'next/link';
import fetch from 'node-fetch'

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href='/tickets/[ticketId]' as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2 style={{ margin: '10px' }}>Tickets</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

// LandingPage.getInitialProps = async (context, client, currentUser) => {
//   const { data } = await client.get('/api/tickets');
//   console.log(data)
//   return { tickets: [] };
// };

export const getServerSideProps = async (context, res) => {
  const response = await fetch('https://geticket.com/api/tickets')
  const data = await response.json()
  console.log(data)
}

export default LandingPage;
