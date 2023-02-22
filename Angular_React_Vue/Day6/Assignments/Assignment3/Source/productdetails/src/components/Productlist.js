export default function ProductList(props){
    return(
        <>
        <table className="border border-black border-collapse mx-auto">
            <thead className="bg-gray-200">
                <th className="border border-black">ProductName</th>
                <th className="border border-black">Price</th>
                <th className="border border-black">Qty</th>
                <th className="border border-black">Gross Amount</th>
                <th className="border border-black">Discount</th>
                <th className="border border-black">PayableAmount</th>
            </thead>
        {props.products.map(item=>
            <tr className="odd:bg-gray-200" key={item.ProductName}>
                <td className="border border-black p-1">{item.ProductName}</td>
                <td className="border border-black p-1">{item.Price}</td>
                <td className="border border-black p-1">{item.Qty}</td>
                <td className="border border-black p-1">{item.Gross}</td>
                <td className="border border-black p-1">{item.Discount}</td>
                <td className="border border-black p-1">{item.PayableAmount}</td>
            </tr>
            )}
        </table>
        </>
    )
}