import React from 'react';
import "./products.css";
import Product from "./Product";


class Products extends React.Component {
	render(){
		return (
			<div className="products_box">
				{this.props.productsList.map(product => {
					return <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} addProductFunction={this.props.addProduct}/>;
				})}
			</div>
		);}
}
export default Products;