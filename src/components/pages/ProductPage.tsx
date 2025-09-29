import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Page of a specific product with id: {id}</p>
    </div>
  );
}

export default ProductPage;
