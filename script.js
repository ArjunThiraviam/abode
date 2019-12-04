var myData;
var count = 0;
var products = [];
fetch('https://api.myjson.com/bins/qhnfp')
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    myData = data
    // Work with JSON data here
    console.log(data)
    function productTemplate(prod) {
        return `
          <div class="product">
          <span class="discount">${prod.discount}% off</span>
          <div class="product__img-container"><img class="product__photo" src="${prod.img_url}"></div>


            <div class="product__details">
                <h2 class="product__name">${prod.name}</h2>
                <div class="product__bottom-container">
                    <div class="product__pricing-container">
                        <span class="price">$${prod.price}</span><span class="discount-price">$${parseInt(prod.price) - parseInt(prod.price*prod.discount)/100}</span>
                    </div>               
                    <button class="add-cart" name="${prod.name}" id=${prod.id}>Add to cart</button>
                </div>                
            </div>          
          </div>
        `; 
        
      }
    
      document.getElementById("app").innerHTML = `
      ${myData.map(productTemplate).join("")}
    `;
    nfn();
    function nfn() {
        $('.add-cart').on("click",  function(event) {
            event.preventDefault();
            var pname = this.name;
            count++;
            console.log(count);
            $("#item-count").addClass("show");
            $("#item-count").html(count);
            $("#items-selected").show();
            $('#items-selected').html(pname + " is added to the cart");
            console.log(this.id);    
            products.push(this.id)
            sessionStorage.setItem("products" , products );
        });        
    }
})
  .catch(err => {
    // Do something for an error here
  })



