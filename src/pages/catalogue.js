import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../components/Search'
import ProductTable from '../components/ProductTable'

const Catalogue = (props) => {
    return (
        <div>
            <Search
            updateSearch={props.updateSearch}
            search={props.search}
            />
            <ProductTable
            search={props.search}
            products={props.products}
            order={props.order}
            />
        </div>
    )

}
export default Catalogue