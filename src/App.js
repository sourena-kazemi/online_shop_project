import React from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import './App.css';
import Images from "./assets/images/index";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            productsList:[
                {
                    id:1,
                    name:"White TShirt",
                    price:16,
                    image:Images.whiteTShirt,
                    category:["white","tshirt","clothes"]
                },
                {
                    id:2,
                    name:"Red TShirt",
                    price:20,
                    image:Images.redTShirt,
                    category:["red","tshirt","clothes"]

                },
                {
                    id:3,
                    name:"Gray TShirt",
                    price:10,
                    image:Images.grayTShirt,
                    category:["gray","tshirt","clothes"]

                },
                {
                    id:4,
                    name:"Blue TShirt",
                    price:15,
                    image:Images.blueTShirt,
                    category:["blue","tshirt","clothes"]

                },
                {
                    id:5,
                    name:"Badminton Racket",
                    price:18,
                    image:Images.badmintonRacket,
                    category:["badminton","racket","sport"]

                },
                {
                    id:6,
                    name:"1K Dumbbell",
                    price:5,
                    image:Images.Dumbbell1k,
                    category:["dumbbell","1k","sport"]

                },
                {
                    id:7,
                    name:"10K Dumbbell",
                    price:9,
                    image:Images.Dumbbell10k,
                    category:["dumbbell","10k","sport"]

                },
                {
                    id:8,
                    name:"Sport Shoes",
                    price:20,
                    image:Images.sportShoes,
                    category:["shoes","sport"]

                },
            ],
            basketItemsList:[

            ],
            searchResult:[
                {
                    id:1,
                    name:"White TShirt",
                    price:16,
                    image:Images.whiteTShirt,
                    category:["white","tshirt","clothes"]
                },
                {
                    id:2,
                    name:"Red TShirt",
                    price:20,
                    image:Images.redTShirt,
                    category:["red","tshirt","clothes"]

                },
                {
                    id:3,
                    name:"Gray TShirt",
                    price:10,
                    image:Images.grayTShirt,
                    category:["gray","tshirt","clothes"]

                },
                {
                    id:4,
                    name:"Blue TShirt",
                    price:15,
                    image:Images.blueTShirt,
                    category:["blue","tshirt","clothes"]

                },
                {
                    id:5,
                    name:"Badminton Racket",
                    price:18,
                    image:Images.badmintonRacket,
                    category:["badminton","racket","sport"]

                },
                {
                    id:6,
                    name:"1K Dumbbell",
                    price:5,
                    image:Images.Dumbbell1k,
                    category:["dumbbell","1k","sport"]

                },
                {
                    id:7,
                    name:"10K Dumbbell",
                    price:9,
                    image:Images.Dumbbell10k,
                    category:["dumbbell","10k","sport"]

                },
                {
                    id:8,
                    name:"Sport Shoes",
                    price:20,
                    image:Images.sportShoes,
                    category:["shoes","sport"]

                },
            ]
        }
    }
    addProductToBasket=(product)=>{
        let itemIndex = this.state.basketItemsList.indexOf({name:product.name})
        let sameItem = this.state.basketItemsList.filter(item => item.id===product.id);
        let copyOfBasketItems = this.state.basketItemsList.slice();
        if(sameItem.length>0){
            sameItem[0].number++;
            copyOfBasketItems[itemIndex]=sameItem[0];
            this.setState({
                basketItemsList:copyOfBasketItems
            })
        }else{
            let newItem = {
                name:product.name,
                price:product.price,
                image:product.image,
                id:product.id,
                index:this.state.basketItemsList.length,
                number:1,
            };
            let newBasketItems = this.state.basketItemsList.concat(newItem);
            this.setState({
                basketItemsList:newBasketItems
            })
        }
    }
    removeItemFromBasket=(item)=>{
        console.log(item);
        let copyOfBasketItems = this.state.basketItemsList;
        let remove = copyOfBasketItems.splice(item.index, 1);

        for(let i=0;i<copyOfBasketItems.length;i++){
            copyOfBasketItems[i].index=i;
        }
        this.setState({
            basketItemsList:copyOfBasketItems
        })
    }
    reduceNumberOfProduct=(product)=>{
        let copyOfBasketItems = this.state.basketItemsList;
        copyOfBasketItems[product.index].number--;
        if(product.number===1){
            this.removeItemFromBasket(product);
        }
        this.setState({
            basketItemsList:copyOfBasketItems
        })
    }
    increaseNumberOfProduct=(product)=>{
        let copyOfBasketItems = this.state.basketItemsList;
        copyOfBasketItems[product.index].number++;
        this.setState({
            basketItemsList:copyOfBasketItems
        })
    }
    searchFunction=(value)=>{
        let inputValue = String(value).trim().toLowerCase();
        let copyOfProductsList = this.state.productsList;
        let result = [];
        this.setState({
            searchResult:[]
        })
        for(let i=0;i < this.state.productsList.length;i++){
            for(let j=0;j < this.state.productsList[i].category.length;j++){
                if(copyOfProductsList[i].category[j].includes(value)){
                    if(!result.includes(copyOfProductsList[i])){
                        result.push(copyOfProductsList[i]);
                    }
                }
            }
            this.setState({
                searchResult:result
            })
        }
    }

  render(){
    return (
        <div className="App">
          <Header basketItemsList={this.state.basketItemsList}
                  removeItemFunction={this.removeItemFromBasket}
                  reduceNumberFunction={this.reduceNumberOfProduct}
                  increaseNumberFunction={this.increaseNumberOfProduct}
                  searchFunction={this.searchFunction}/>
          <Products productsList={this.state.searchResult}
                    addProduct={this.addProductToBasket}>

          </Products>
        </div>
    );
  }
}

export default App;
