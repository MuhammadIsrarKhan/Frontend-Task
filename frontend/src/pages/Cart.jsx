import CrossIcon from "@/assets/crossIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getImageSrc } from "../utils";
import { removeFromCart } from "../store/storeSlice";
import { toast } from "sonner";
const Cart = () => {
  const items = useSelector((state) => state.store.items);
  const dispatch = useDispatch();
  return (
    <div className="px-5">
      <h1>Cart</h1>
      <div class="flex flex-col bg-[#FFFFFF]">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden flex flex-row">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-[#F1F2F2] font-medium text-[#5E5E5E]">
                  <tr>
                    <th scope="col" class=" px-6 py-4"></th>
                    <th scope="col" class=" px-6 py-4">
                      Product
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Price
                    </th>
                    <th scope="col" class=" px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr class="border-b dark:border-neutral-500" key={item?.id}>
                      <td class="whitespace-nowrap  px-6 py-4 font-medium flex items-center justify-center">
                        <img
                          src={getImageSrc(item?.img)}
                          className="w-32 h-32"
                        />
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">{item?.name}</td>
                      <td class="whitespace-nowrap  px-6 py-4">
                        {item?.price}
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">
                        <img
                          onClick={() => dispatch(removeFromCart(item?.id))}
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
        items.length <= 0 && 'cursor-not-allowed'
      } w-32 bg-black text-white py-2`}
        onClick={() => toast.success("🛍️ Thank You for Shopping with Us! 🛒")}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
