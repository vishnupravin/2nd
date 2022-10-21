import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import React from 'react'

function Card({ cardItems, removeFromcart }) {
    return (
        <>{
            cardItems.length === 0 ? <h3>No Cart Items</h3> :
                <>
                    <h3>Cart</h3>
                    <ol className="list-group list-group-numbered">
                        {
                            cardItems.map((item) => {
                                return <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item.name}</div>
                                        <h3>Rs : {item.price}</h3>
                                    </div>
                                    <button onClick={() => {
                                        removeFromcart(item)
                                    }} className="badge bg-primary rounded-pill">X</button>
                                </li>
                            })
                        }



                    </ol>
                    <h3>Total : Rs {
                        cardItems.reduce((prev, curr) => {
                            return prev = prev + curr.price
                        }, 0)
                    }</h3>
                </>
        }

        </>
    )
}

export default Card