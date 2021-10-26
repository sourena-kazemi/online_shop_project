import React from 'react';
import "./product.css";

class Product extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}
	addProductFunction=()=>{
		this.props.addProductFunction(this.props);
	}
	checkProductPrice=()=>{
		if(this.props.price==="Not Available"){
			return "Not Available";
		}else{
			return `${this.props.price}$`;
		}
	}
	productButtonClassName=()=>{
		if(this.props.price!=="Not Available"){
			return "buy_button";
		}else{
			return "buy_button none_display";
		}
	}
	render(){
		return (
			<div className="product">
				<div className="image_box">
					<img src={this.props.image} alt="product picture" className="product_image"/>
				</div>
				<div className="product_details">
					<p className="product_name">{this.props.name}</p>
					<p className="product_price">{this.checkProductPrice()}</p>
				</div>
				<button className={this.productButtonClassName()} onClick={this.addProductFunction}>Add To Basket</button>

			</div>
		);}
}
export default Product;