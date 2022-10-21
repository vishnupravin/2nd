import React from 'react'

function Cart({ pet,addTocart,cardItems}) {
    return (

        <div className="col-lg-4">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-fluid" src={pet.img} />
                    <h3>{pet.name}</h3>
                    <h4>{pet.price}</h4>
                    <button disabled={cardItems.some(obj=> obj.id === pet.id)} onClick={()=>{
                        addTocart(pet)
                    }} className='btn btn-sm btn-primary'>Add To Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Cart