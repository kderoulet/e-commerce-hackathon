import React from 'react'

const ProductRow = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>${props.product.price} &nbsp;&nbsp;</td>
            <td>
                <div className="row">
                    <div className="col-8 mx-2">{props.product.description}</div>
                    <div className="col-1 mx-1"> <button>+</button> </div>
                    <div className="col-1 mx-1"><button>-</button> </div>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow