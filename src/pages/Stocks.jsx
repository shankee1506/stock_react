import React from 'react'
import Table from '../components/table/Table'

const SrocksItems = {
    header: [
        "ITEMS",
        "CAT",
        "QUANTITY",
        "LDP",
        "SET"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const renderStocksHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderStocksBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        
    </tr>
)

const Stocks = () => {
    return (
        <div>
        <div className="col-10">
        <div className="card">
            <div className="card__header">
                <h3>Stock Details</h3>
            </div>
            <div className="card__body">
                <Table
                headData={SrocksItems.header}
                renderHead={(item, index) => renderStocksHead(item, index)}
                bodyData={SrocksItems.body}
                renderBody={(item, index) => renderStocksBody(item, index)}
                />
            </div>
            
        </div>
    </div>
        </div>
    )
}

export default Stocks
