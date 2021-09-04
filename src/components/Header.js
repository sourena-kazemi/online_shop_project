import React from 'react';
import Basket from "./Basket";
import logo from "../assets/icons/icons8-shopping-basket-64.png";
import basketLogo from "../assets/icons/icons8-buying-48.png";
import emptyBasketLogo from "../assets/icons/icons8-shopping-cart-48.png";
import "./header.css";


class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			basketShowed:false,
			inputValue:""
		}
	}
	changeBasketDisplay=()=>{
		this.setState({
			basketShowed:!this.state.basketShowed
		})
	}
	basketButtonImage=()=>{
		if(this.props.basketItemsList.length === 0){
			return emptyBasketLogo;
		}else if(this.props.basketItemsList.length >= 1){
			return basketLogo;
		}
	}
	getInputValue=(element)=>{
		let searchInputValue = element.target.value;
		this.setState({
			inputValue: searchInputValue
		})
	}
	checkKeyCode=(event)=>{
		let keyCode = event.which;
		if(keyCode===13){
			this.props.searchFunction(this.state.inputValue);
		}
	}

	render(){
		return (
			<div className="header">
				<div className="basket_button" onClick={this.changeBasketDisplay}>
					<img src={this.basketButtonImage()} alt="basket button"/>
					<div className="numbers_box">
						{/*I show numbers of products in basket here!*/}
						{this.props.basketItemsList.length}
					</div>
				</div>					

				<Basket isShow={this.state.basketShowed} itemsList={this.props.basketItemsList} removeItemFunction={this.props.removeItemFunction} reduceNumberFunction={this.props.reduceNumberFunction} increaseNumberFunction={this.props.increaseNumberFunction}/>

				<input type="text" placeholder="Search" className="search_input"
					onChange={this.getInputValue}
					onKeyPress={this.checkKeyCode}/>

				<div className="logo_box">
					<img src={logo} alt="logo" className="logo"/>
					<p className="logo_text">Online Shop</p>
				</div>
			</div>
		);}
}
export default Header;