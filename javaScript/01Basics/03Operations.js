var sellingPrice = 100;

console.log(typeof sellingPrice);

var listingPrice = 700;

console.log(typeof listingPrice);



var discountPercentage = ((listingPrice - sellingPrice ) /listingPrice) * 100;

console.log(discountPercentage);

displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage + " % OFF");




var result = listingPrice > sellingPrice;

console.log(result);
console.log(typeof result);



