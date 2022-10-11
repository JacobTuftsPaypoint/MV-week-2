/*
  We are going to build a self-scan system (with limited functionality)
  A list of items has been provided for you as an object.  
  Each property is a food item (Also an object)
  Declare a new 'checkout' variable and assign an object.
  The object needs the following:
    Properties - 
      items - an empty array
      weight - 0
      cost - 0
    Methods - 
      scanItems(items)   parameter expecting an array,even if it's only 1 item.
                         (Remember, each item is actually an object with weight and cost)
                        needs to do the following:
                            1. push item object to checkout.items array
                            2. add item weight to checkout.weight total
                            3. add item cost to checkout.cost total
      removeItem(item)  parameter expecting an item object
                        needs to do the following:
                            1. remove item object from checkout.items array
                            2. subtract item weight to checkout.weight total
                            3. subtract item cost to checkout.cost total
      reset()           can reset values back to initial state.
                            finalise()  no parameters
            returns final cost
  */
const checkout = {
  items:[],
  weight:0,
  cost:0,
  scanItems(ItemArray){
    ItemArray.forEach(element => {
      console.log(element)
      this.items.push(element)
      this.weight += element.weight
      this.cost += element.cost
    });
  },
  removeItem(Item){
    this.items.splice(this.items.indexOf(Item),1)
    this.weight-=Item.weight
    this.cost-=Item.cost
  },
  reset(){
    this.items = []
    this.weight = 0
    this.cost = 0
  },
  finalise(){
    return(this.cost)
  }
}


let itemsList = {};

// Test command (in terminal) "npm run test:d3:hard"
module.exports = { checkout, itemsList };
