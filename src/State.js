
const products = {
    0: {name: "Хлеб ржаной на закваске", description: "Мука, вода, соль и никакой химии ", price: "150 руб."},
    1: {name: "Домашний синабон", description: "Добашний вариант знаменитого лакомства", price: "95 руб."},
    2: {name: "Плюшка с сахаром", description: "Ароматное дополнение к утреннему кофе ", price: "50 руб."},
    3: {name: "Медовый ржаной пряник", description: "Лакомство с медом, корицей, имбирем и теплотой рук", price: "100 руб."},
    4: {name: "Classic French Croissant", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$6.79"},
    5: {name: "Macarons & Tea", description: "Chocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$5.99"},
    6: {name: "Strawberry Sweet Cake", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$12.99"},
    7: {name: "Cupcake of Vanela", description: "Chocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$20.00"},
    8: {name: "Classic Chocolate Cake", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$20.00"},
    9: {name: "Blueberry Muffin", description: "CChocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$12.99"},
    10: {name: "Double Chocolate Pie", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$5.99"},
    11: {name: "Strawberry Sweet Cake", description: "Chocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$6.79"},
    12: {name: "Bialy Egg Sandwich with Cake", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$7.99"},
    13: {name: "Branch Special Cake", description: "Chocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$8.99"},
    14: {name: "Multigrain Hot Cake", description: "Chocolate puding, vanilla, fruite rasberry jam milk ", price: "$12.99"},
    15: {name: "Fried Egg Sandwich", description: "Chocolate puding, vanilla, fruite rasberry jam evporate milk", price: "$8.99"},

}

const discoverProducts = {
    0: {name: "Пшеничный багет на закваске", description: "Мука, вода, соль и никакой химии ", price: "150 руб."},
    1: {name: "Морковный кекс", description: "Нежнейшее лакомство из необычного ингридиента", price: "95 руб."},
    2: {name: "Печенье юбилейное", description: "Ароматное дополнение к утреннему кофе ", price: "50 руб."},
    3: {name: "Постный шоколадный манник", description: "Выпечка без муки", price: "100 руб."},
    4: {name: "Бискотти", description: "Популярное итальянское печенье", price: "$6.79"},
}

export function getProducts(){
    return products;
}

export function getDiscoverProducts(){
    return discoverProducts;
}