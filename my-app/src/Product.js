import React, {Component} from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
    '1': {id: 1, category: 'Sports', price: '$67', name: 'Volleyball'},
    '2': {id: 2, category: 'Clothing', price: '$30', name: 'Shirt'},
    '3': {id: 3, category: 'Music', price: '$300', name: 'Tabla'},
    '4': {id: 4, category: 'Decor', price: '$150', name: 'Fairy Lights'},
    '5': {id: 5, category: 'Kitchen', price: '$400', name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$500', name: 'Study Table'}
}

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            products: PRODUCTS
        }
        this.handleFilter= this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput){
        this.setState(filterInput)
    }

    handleSave(product) {
        if(!product.id) {
                product.id = new Date().getTime()
        }
        this.setState((prevState) => {
                let products = prevState.products
                products[product.id] = product
                return {products}
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
                let products = prevState.products
                delete products[productId]
                return {products}
        })
    }

    render() {
        return (
            <div class="container-fluid">
                <h1 class="col-md-4">My Inventory</h1><br/>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave}/>
            </div>
        )
    }
}

export default Product