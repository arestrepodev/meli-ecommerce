import { ItemProps } from "@/models/item";

interface ProductDetailProps {
  product: ItemProps;
}



const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h1>Page Detail</h1>
    </div>
  );
};





export default ProductDetail;
