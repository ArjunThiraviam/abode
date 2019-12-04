var item = (sessionStorage.getItem("products")).split(",");

var obj = { };
for (var i = 0, j = item.length; i < j; i++) {
   if (obj[item[i]]) {
      obj[item[i]]++;
   }
   else {
      obj[item[i]] = 1;
   } 
}

console.log(obj);

$('.inc').on('click', function(e){
    obj[item[i]];
});

var products = [];
fetch('https://api.myjson.com/bins/qhnfp')
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    myData = data;
    function productTemplate(prod) {
        return `
        <div class="products-container">
            <span class="item-name">${prod.name}</span>
            <span class="item-dis" style="display:none;">${prod.discount}</span>
            <span class="dec">-</span>
            <span class="item-qty">${obj[prod.id]}</span>
            <span class="inc">+</span>
            <span class="item-price">${prod.price * obj[prod.id]}</span>        
        </div>
        `; 
      
    }

    for(let x in obj) {

        for(let z =0; z < data.length; z++) {
            if(data[z].id == x) {
                var ht = productTemplate(data[z]);
                document.getElementById("product-row").innerHTML += productTemplate(data[z]);
            }
        }

    function calcTotal() {
        var sum = 0;
        $('.item-price').each(function(){
            sum += parseFloat($(this).text());  
        });
        var qtySum = 0;
        $('.item-dis').each(function(){
            qtySum += parseFloat($(this).text());  
        });
    
        var grantTotal = sum - qtySum;
        document.getElementById("total-price").innerHTML = sum;
        document.getElementById("total-qty").innerHTML = qtySum;
        document.getElementById("grant-total").innerHTML = grantTotal;
        }
    }
    calcTotal();
  
})
.catch(err => {

});