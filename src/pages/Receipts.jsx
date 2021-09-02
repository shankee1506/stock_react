import React from 'react'
import Table from '../components/table/Table'

const ReceiptsItems= {
    header: [
        "DATE",
        "NAME",
        "ITEMS",
        "TYPE",
        "TOTAL"
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

const renderReceiptsHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderReceiptsBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>
        
    </tr>
)

const Receipts = () => {
    return (
        <div>
        <div className="col-10">
        <div className="card">
            <div className="card__header">
                <h3>You are seeing what currently happening in Sales</h3>
            </div>
            <div className="card__body">
                <Table
                headData={ReceiptsItems.header}
                renderHead={(item, index) => renderReceiptsHead(item, index)}
                bodyData={ReceiptsItems.body}
                renderBody={(item, index) => renderReceiptsBody(item, index)}
                />
            </div>
            
        </div>
    </div>
        </div>
    )
}

export default Receipts
