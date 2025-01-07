import CrossIcon from "@/assets/crossIcon.svg";
import { getImageSrc } from "../utils";
import { toast } from "sonner";
import { useStore } from "../hooks/useStore";
const Cart = () => {
  const {
    state: { items },
    dispatch,
  } = useStore();
  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <div className="px-5">
      <h1>Cart</h1>
      <div className="flex flex-col bg-[#FFFFFF]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden flex flex-row">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-[#F1F2F2] font-medium text-[#5E5E5E]">
                  <tr>
                    <th scope="col" className=" px-6 py-4"></th>
                    <th scope="col" className=" px-6 py-4">
                      Product
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className=" px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={item?.id}
                    >
                      <td className="whitespace-nowrap  px-6 py-4 font-medium flex items-center justify-center">
                        <img
                          src={getImageSrc(item?.img)}
                          className="w-32 h-32"
                        />
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {item?.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {item?.price}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        <img
                          onClick={() => handleRemoveFromCart(item?.id)}
                          src={CrossIcon}
                          alt=""
                          className="w-4 h-4 border rounded-full cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={items.length == 0}
        className={`${
          items.length <= 0 && "cursor-not-allowed"
        } w-32 bg-black text-white py-2`}
        onClick={() => {
          toast.success("🛍️ Thank You for Shopping with Us! 🛒");
          handleClearCart();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
