import CrossIcon from "@/assets/crossIcon.svg";
const Cart = () => {
  return (
    <div className="px-5">
      <h1>Cart</h1>
      <div class="flex flex-col bg-[#FFFFFF]">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden flex flex-row">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-[#F1F2F2] font-medium text-[#5E5E5E] dark:border-neutral-500 dark:bg-neutral-900">
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
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap  px-6 py-4">Mark</td>
                    <td class="whitespace-nowrap  px-6 py-4">Otto</td>
                    <td class="whitespace-nowrap  px-6 py-4">
                      <img
                        src={CrossIcon}
                        alt=""
                        className="w-4 h-4 border rounded-full cursor-pointer"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button className="w-32 bg-black text-white py-2">Checkout</button>
    </div>
  );
};

export default Cart;
