const AllProdects = [
  {
    prodectName: "CAR",
    description: "This Is My Car I Am Sell This Car",
    price: 100000,
    discountprice: 98000,
    category: "CARS",
    prodectImage:
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fENhcnN8ZW58MHx8MHx8fDA%3D",
    id: Math.random(),
  },
];
const Prodectes = () => {
  return AllProdects;
};
const newProdect = (ProdectDetals) => {
  const oldProdect = {
    ...ProdectDetals,
    id: Math.random(),
  };
  AllProdects.unshift(oldProdect);
  return oldProdect;
};
const prodectDelete =(id)=>{
  const index = AllProdects.findIndex((prodct)=> prodct.id == id)
  console.log(index,"index")
    if (index !== -1) {
        AllProdects.splice(index ,1)
        return true
       } else {
         return false
    }
}
const EditProdect = (prodct) => {
  const index = AllProdects.findIndex((b) => b.id == prodct.id);

  if (index !== -1) {
    AllProdects.splice(index, 1, prodct);
    return true;
  } else {
    return false;
  }
};
module.exports = {
  Prodectes,
  newProdect,
  prodectDelete,
  EditProdect
};
