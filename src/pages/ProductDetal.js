import { Link, useParams } from "react-router-dom";
export const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail!</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
