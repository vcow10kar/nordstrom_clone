const array = [{
    name: "Amsterdam Framed Wall Art",
    brand: "Deny Designs",
    price: 3129.17,
    image1: ["https://n.nordstrommedia.com/id/sr3/84ca9eeb-9d9e-4af3-9197-071580fa7da6.jpeg?h=365&w=240&dpr=2"],
    color: 'Brown',
    type: "Framed Art",
    about: "A cool pop art mouth by artist Nick Nelson takes center stage on ready-to-hang wall art featuring a satin finish and a rustic bamboo frame.",
    details: "<ul><li>11\" x 13\"</li><li>2 lb.</li><li>Art by Nick Nelson</li><li>Hanging hardware included</li><li>Fiberboard/bamboo</li><li>Made in the USA</li><li>Item #5636409</li></ul>"
},

{
    name: "Animals in the Wild Framed Wall Art",
    brand: "Deny Designs",
    price: 3209.41,
    image1: ["https://n.nordstrommedia.com/id/sr3/3d031716-b6b0-4cb6-85ca-9a66c1976471.jpeg?h=365&w=240&dpr=2"],
    rating: 4,
    type: "Framed Art",
    color: 'Yellow',
    about: "A cool pop art mouth by artist Nick Nelson takes center stage on ready-to-hang wall art featuring a satin finish and a rustic bamboo frame.",
    details: "<ul><li>11\" x 13\"</li><li>2 lb.</li><li>Art by Nick Nelson</li><li>Hanging hardware included</li><li>Fiberboard/bamboo</li><li>Made in the USA</li><li>Item #5636409</li></ul>"
},

{
    name: "You Are My Sun Moon & Stars Framed Wall Art",
    brand: "Deny Designs",
    price: 3129.17,
    image1: ["https://n.nordstrommedia.com/id/sr3/aefb1479-0493-44e9-99e6-feb2afca0227.jpeg?h=365&w=240&dpr=2"],
    rating: 2,
    color: 'Teal',
    type: "Framed Art",
    about: "A cool pop art mouth by artist Nick Nelson takes center stage on ready-to-hang wall art featuring a satin finish and a rustic bamboo frame.",
    details: "<ul><li>11\" x 13\"</li><li>2 lb.</li><li>Art by Nick Nelson</li><li>Hanging hardware included</li><li>Fiberboard/bamboo</li><li>Made in the USA</li><li>Item #5636409</li></ul>"
}];


var produc1 = array[1];
//console.log(array);

const index = array.indexOf(produc1);

  array.splice(index, 1);


// array = [2, 9]
console.log(array.length); 
console.log(array); 