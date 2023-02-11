let shoppingList = [
  {
    name: "name1",
    quantity: 1,
    existence: true,
  },
  {
    name: "name2",
    quantity: 2,
    existence: false,
  },
  {
    name: "name3",
    quantity: 1,
    existence: false,
  },
  {
    name: "name4",
    quantity: 5,
    existence: false,
  },
  {
    name: "name5",
    quantity: 4,
    existence: false,
  },
];
console.log();
ProductsSortExistenceFalse();
console.log(shoppingList);

AddProductToArray({
  name: "name1",
  quantity: 5,
  existence: false,
});
console.log(shoppingList);
PurchaseProduct("name2")
console.log(shoppingList);
ProductsSortExistenceFalse();
/*================================================================================*/
function ProductsSortExistenceFalse() {
  shoppingList.sort((e1, e2) => e1.existence - e2.existence);
}
function AddProductToArray(product) {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name == product.name) {
      shoppingList[i].quantity += product.quantity;
      return;
    }
  }
  shoppingList.push(product);
}
function PurchaseProduct(productName) {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name == productName) {
      shoppingList[i].existence = true;
      return;
    }
  }
  AddProductToArray({
    name: String(productName),
    quantity: 1,
    existence: true,
  });
}
