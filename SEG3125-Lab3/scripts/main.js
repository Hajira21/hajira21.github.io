
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
//Level 1 requirement: The use of JavaScript (separate files) 
function unselectChoices(x){
	if(x==1){
		document.getElementById("dietSelect4").checked = false;
	}
	else{
		document.getElementById("dietSelect1").checked = false;
		document.getElementById("dietSelect2").checked = false;
		document.getElementById("dietSelect3").checked = false;	
	}
	var x = document.getElementById("dietSelect1");
	var y = document.getElementById("dietSelect2");
	var z = document.getElementById("dietSelect3");
	var checkboxesChecked = [];
		
	if(x.checked==true){
		checkboxesChecked.push(x.value);
	}
	if(y.checked==true){
		checkboxesChecked.push(y.value);
	}
	if(z.checked==true){
		checkboxesChecked.push(z.value);
	}

	populateListProductChoices(checkboxesChecked, 'displayProduct');
}
function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	
	// Level 1 requirement: Navigation between two or three areas depending on your grouping of information.
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
	var newText=[];
	if (slct1.length> 1){
		newText.push( 'We preselected products based on your ', slct1[0]);
		for(let i=1; i< slct1.length; i++){
			newText.push(' and ' ,slct1[i]);
		}
	}else{
		if(slct1== ''){
			newText.push('This is all the products in our store, go to the client tab to select your');
		}else{
		newText.push( 'We preselected products based on your ', slct1[0])
		}
	}
	newText.push(' restrictions');
	var text= newText.join("");

	
	document.getElementById("yourRestrictions").innerHTML = text;

    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
	
		var optionArray = restrictListProducts(products, slct1);
	
	//s1 will be the array of restrictions product will be all available choices


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	
		
		
	//Create cards and colums
	var row= document.createElement('div');
			s2.appendChild(row);
			row.className= "row";

			var c1= document.createElement('div');
			row.appendChild(c1);
			c1.className= "column";
			var c2= document.createElement('div');
			row.appendChild(c2);
			c2.className= "column";
			var c3= document.createElement('div');
			row.appendChild(c3);
			c3.className= "column";
			var c4= document.createElement('div');
			row.appendChild(c4);
			c4.className= "column";
		


	for(let i=0; i<optionArray.length; i++){

		var product = optionArray[i];
		var res = product.split(" ");
		var productName= res[0];
		var productPrice= res[1];

		


		//div row class: every i mod 4
		if(i!=0 && i%4==0){
			var row= document.createElement('div');
			s2.appendChild(row);
			row.className= "row";

			var c1= document.createElement('div');
			row.appendChild(c1);
			c1.className= "column";
			var c2= document.createElement('div');
			row.appendChild(c2);
			c2.className= "column";
			var c3= document.createElement('div');
			row.appendChild(c3);
			c3.className= "column";
			var c4= document.createElement('div');
			row.appendChild(c4);
			c4.className= "column";
			
		}
		var x = document.getElementsByClassName("column") //returns a list of elements
		var a= x[i];
		//div card class
		var el= document.createElement('div');
		a.appendChild(el);
		el.className="card";

		var x = document.createElement("IMG");
		var s= "images/"+productName+".png"
		x.setAttribute("src", s);
		x.setAttribute("width", "100%");
		x.setAttribute("height", "10%");
		x.setAttribute("alt", productName);
		el.appendChild(x);

		

		
		var h = document.createElement('H1');
		el.appendChild(h);
		var ht = document.createTextNode(productName); 
		h.appendChild(ht); 
		
				
		var p = document. createElement("P");
		el.appendChild(p);
		p.className = "price";
		var pt = document.createTextNode(productPrice);
		p.appendChild(pt); 
		
		
		var paraB = document.createElement("P");
		el.appendChild(paraB);
		var btn = document.createElement("BUTTON");
		var node = document.createTextNode("Add to Cart");
		btn.appendChild(node);
		paraB.appendChild(btn);

	}
	var row= document.createElement('div');
			s2.appendChild(row);
			row.className= "row";

			var c1= document.createElement('div');
			row.appendChild(c1);
			c1.className= "column";
			var c2= document.createElement('div');
			row.appendChild(c2);
			c2.className= "column";
			var c3= document.createElement('div');
			row.appendChild(c3);
			c3.className= "column";
			var c4= document.createElement('div');
			row.appendChild(c4);
			c4.className= "column";
		



}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var price = document.getElementsByName("price");
	var chosenProducts = [];

	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			var str = ele[i].value;
			var res = str.split(" ");
			chosenProducts.push(res[0]);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	// Level 1 requirement: the contents of the basket and its total
		
}
/*
   <div class="card">
    <img src="jeans3.jpg" alt="Denim Jeans" style="width:100%">
    <h1>Tailored Jeans</h1>
    <p class="price">$19.99</p>
    <p><button>Add to Cart</button></p>
  </div> 
  Code for product cards inspired from
  https://www.w3schools.com/howto/howto_css_product_card.asp
  https://www.w3schools.com/howto/howto_css_column_cards.asp

*/