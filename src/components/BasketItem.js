import React from 'react';
import "./basket_item.css";

class BasketItem extends React.Component {
	constructor(props){
		super(props);
	}
	removeFromBasket=()=>{
		this.props.removeFunction(this.props);
	}
	reduceNumberOfProduct=()=>{
		this.props.reduceNumberOfItem(this.props);
	}
	increaseNumberOfProduct=()=>{
		this.props.increaseNumberOfItem(this.props);
	}

	render(){
		return (
			<div className="basket_item">
				<img src={this.props.image} alt="Product Image" className="item_image"/>
				<div className="item_details">
					<p className="item_name">{this.props.name}</p>
					<p className="item_price">{`${this.props.price}$`}</p>
				</div>
				<div className="products_number_box">
					<div className="line reduce_button" onClick={this.reduceNumberOfProduct}>
					</div>
					<div className="circle products_numbers">
						{this.props.number}
					</div>
					<div className="increase_button" onClick={this.increaseNumberOfProduct}>
						<div className="line line_one">
						</div>
						<div className="line line_two">
						</div>
					</div>
				</div>

				<div className="circle close_button" onClick={this.removeFromBasket}>

				</div>
			</div>
		);}
}
export default BasketItem;