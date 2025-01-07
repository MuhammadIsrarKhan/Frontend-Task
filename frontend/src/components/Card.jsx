import cart from "@/assets/cart.svg";
import { getImageSrc } from "../utils";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useStore } from "../hooks/useStore";

const Card = ({ item }) => {
  const img = getImageSrc(item?.img);
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div
      className="w-80 h-96 m-8  max-w-sm bg-[#F1F3F2] flex flex-col items-center relative overflow-hidden"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/store/${item?.id}`);
      }}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart(item);
          toast.success("Item Added Successfully");
        }}
        src={cart}
        alt="cart"
        className="w-[30px] h-[30px] bg-white p-1 rounded-xl absolute top-5 right-5 cursor-pointer"
      />
      <div className="h-72 flex items-center justify-center px-8">
        <img src={img} alt="img" className=" w-full" />
      </div>
      <h4 className="mt-4">{item?.name}</h4>
      <h6>${item?.price}</h6>
    </div>
  );
};
Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
