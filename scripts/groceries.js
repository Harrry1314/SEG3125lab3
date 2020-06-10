	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 19.00
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	},
	{
		name: "egg",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 7.00
	},
	{
		name: "cucumber",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 5.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var veget, glutFree, organic, none;
	var num, num1;
	veget = glutFree = organic = none = false;
	num = 0;
	for ( var i = 0; i < restriction.options.length; i++ ){
		var o = restriction.options[i];
		if(o.selected == true){
			//alert(o.value); //comment
			if (o.value == "Vegetarian")
			{
				veget = true;
				num++;
			}
			if (o.value == "GlutenFree")
			{
				glutFree = true;
				num++;
			}
			if (o.value == "Organic")
			{
				organic = true;
				num++;
			}
			if (o.value == "None")
			{
				none = true;
			}
		}
	}
	
	

	for (let i=0 ; i<prods.length ; i+=1)
	{
		if ((none == true) &&
			(veget == false)&&
			(glutFree == false)&&
			(organic == false))
		{
			product_names.push(prods[i]);
		}
		else 
		{
			num1 = 0;
			if ((veget == true) && (prods[i].vegetarian == true))
			{
				num1++;
			}

			if ((glutFree == true) && (prods[i].glutenFree == true))
			{
				num1++;
			}

			if ((organic == true) && (prods[i].organic == true))
			{
				num1++;
			}

			if (num == num1)
			{
				//product_names.push(prods[i].name);
				product_names.push(prods[i]);
			}
		}
	}

	return product_names;
}

function isElemOf (prod, prodsList)
{
	for (let i=0; i<prodsList.length; i+=1) 
	{
		if (prod.name == prodsList[i].name)
		{
			return true;
		}
	}
	return false;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}