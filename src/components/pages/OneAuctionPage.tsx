import { useParams } from 'react-router-dom';

function OneAuctionPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Auction {id}</h1>
      <p>Page of a specific auction with id: {id}</p>
    </div>
  );
}

export default OneAuctionPage;
