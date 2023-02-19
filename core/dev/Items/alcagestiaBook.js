IMPORT("ReliquaryLIB");
ReliquaryLIB.createDamageItem("alkahestryTome", 1000);
Item.addToCreative("alkahestryTome", 1, 1000);

 let AlkahestryTome = {};
  AlkahestryTome.addCharge = function (id, data, repair){
   Recipes.addShapeless({id: ItemID.alkahestryTome, count: 1},
   [{ id: id, data: data },
   { id: ItemID.alkahestryTome, data: -1 }],
    function (api, field, result) {
     api.prevent();
     for (let i  in field) {
      if (field[i].id == ItemID.alkahestryTome) {
       field[i].data -= repair;
      } else {
	field[i].count--;
      }
         }
          });
};
  AlkahestryTome.addAlkahestry = function (id, data, count, cost){
  Recipes.addShapeless({id: id, count: count , data: data},
   [{ id: id, data: data },
   { id: ItemID.alkahestryTome, data: -1 }],
    function (api, field, result) {
     for (let i  in field) {
      if ( field[i].id == ItemID.alkahestryTome && field[i].data >=0 ) {
       field[i].data += cost;
      } else {
	field[i].count--;
      }
        }
          });
};
 





AlkahestryTome.addAlkahestry(265, 0, 2, 4);
AlkahestryTome.addAlkahestry(4, 0, 33, 4);
AlkahestryTome.addAlkahestry(12, 0, 2, 4);


AlkahestryTome.addCharge(152, 0, 9);
AlkahestryTome.addCharge(348, 0, 1);
AlkahestryTome.addCharge(89, 0, 4);
AlkahestryTome.addCharge(331, 0, 1);
