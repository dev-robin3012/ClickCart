import { Product } from "@framework/types";

const OrderItemCard = ({ product }: any) => {
  return (
    <tr
      className="border-b font-normal border-gray-300 last:border-b-0"
      key={product.id}
    >
      <td className="p-4">
        {product.name} * {product.quantity}
      </td>
      <td className="p-4">৳ {product.total}</td>
    </tr>
  );
};

const OrderDetails: React.FC<{ className?: string; order: any }> = ({
  className = "pt-10 lg:pt-12",
  order,
}) => {
  const subtotal = order.line_items.reduce(
    (acc: number, curr: any) => {
      return Number(curr.total) + Number(acc);
    },
    [0]
  );

  return (
    <div className={className}>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Order Details:
      </h2>
      <table className="w-full text-heading font-semibold text-sm lg:text-base">
        <thead>
          <tr>
            <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
              Product
            </th>
            <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {order?.line_items?.map((product: Product, index: number) => (
            <OrderItemCard key={index} product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">Sub Total:</td>
            <td className="p-4">
              {order.currency_symbol}
              {subtotal}
            </td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">Shipping:</td>
            <td className="p-4">
              {order.shipping.address_1}
              {/* <span className="text-[13px] font-normal ps-1.5 inline-block">
                via Flat rate
              </span> */}
            </td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">Payment method:</td>
            <td className="p-4">COD</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">Total:</td>
            <td className="p-4">
              {order.currency_symbol}
              {subtotal}
            </td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">Note:</td>
            <td className="p-4">new order</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderDetails;
