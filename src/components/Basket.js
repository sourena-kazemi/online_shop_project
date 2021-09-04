import React from 'react';
import "./basket.css";
import BasketItem from "./BasketItem";


class Basket extends React.Component {
	basketClassName=()=>{
		if(this.props.isShow){
			return "basket_box show_basket"
		}else{
			return "basket_box";
		}
	}
	calculateTotal=()=>{
		let total = 0;
		this.props.itemsList.map(item =>{
			total += item.price*item.number;
		})
		return `Total : ${total}$`;
	}
	render(){
		return (
			<div className={this.basketClassName()}>
				<p className="total">{this.calculateTotal()}</p>
				<div className="basket_items">
					{this.props.itemsList.map(item => {
						return <BasketItem name={item.name} price={item.price} image={item.image} number={item.number} index={item.index} removeFunction={this.props.removeItemFunction} reduceNumberOfItem={this.props.reduceNumberFunction} increaseNumberOfItem={this.props.increaseNumberFunction}/>;
					})}
				</div>
			</div>
		);}
}
export default Basket;