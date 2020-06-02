	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		Vegetarian: true,
		GlutenFree: true,
		Organic: true,
		// Level 1 requirement: add a characteristic for this purpose in the list of products
		price: 1.99
	},
	{
		name: "Bread",
		Vegetarian: true,
		GlutenFree: false,
		Organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		Vegetarian: false,
		GlutenFree: true,
		Organic: true,		
		price: 10.55
	},
	{
		name: "Chicken",
		Vegetarian: false,
		GlutenFree: true,
		Organic: false,		
		price: 12.99
	},
	{
		name: "Beef",
		Vegetarian: false,
		GlutenFree: true,
		Organic: true,		
		price: 13.99
	},
	{
		name: "Carrot",
		Vegetarian: true,
		GlutenFree: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "French fries",
		Vegetarian: true,
		GlutenFree: false,
		Organic: false,		
		price: 5.99
	},
	{
		name: "Ice cream",
		Vegetarian: true,
		GlutenFree: false,
		Organic: false,		
		price: 4.99
	},
	{
		name: "Cake",
		Vegetarian: true,
		GlutenFree: false,
		Organic: false,		
		price: 8.99
	},
	{
		name: "Cauliflower",
		Vegetarian: true,
		GlutenFree: true,
		Organic: false,		
		price: 1.99
	}
	// Level 1 requirement: At least 10 possible products in the product list


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let prods1 = [];
	for (let i=0; i<prods.length; i+=1) {
		prods1.push(prods[i]);
	}

	for (restriction of restrictions) {	
		i=0;
		while(i<10){
			var p= prods1.shift();
			if(p[restriction] != false){
				prods1.push(p);
			}
			i++;
		}
	}
	// Level 1 requirement: Each user can be vegetarian and/or allergic to gluten. (The code provided only considers the OR ... modify it).
	prods1.sort(function(a, b){return a.price - b.price});
		// Level 1 requirement: Items should be in price order.

	let product_names = [];
	for (let i=0; i<prods1.length; i+=1) {
		product_names.push(prods1[i].name+ "    "+ prods1[i].price);
		// Level 1 requirement: Items should have their price indicated
	}
	return product_names;
	
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
