/*
BUILD INFO:
  dir: core/dev
  target: core/main.js
  files: 2
*/





IMPORT("ReliquaryLIB");
IDRegistry.genItemID("WitherlessRose");
Item.createItem("WitherlessRose", "Witherless Rose", "withrose", {
    isTech: false,
    stack: 1,
});
ReliquaryLIB.inInv(ItemID.WitherlessRose, 0, function (player) {
    if (Entity.getEffect(Player.get(), EPotionEffect.WITHER).level > 0) {
        Entity.clearEffect(Player.get(), EPotionEffect.WITHER);
        Entity.addEffect(Player.get(), EPotionEffect.WITHER, 0, 0, false, false);
    }
    
});
/*
addEffect(ent: number, effectId: number, effectData: number, effectTime: number, ambience?: boolean, particles?: boolean*/
/*Callback.addCallback(
    "EntityHurt",
    function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        /*   if (damageType == 5) {
            Player.setFlyingEnabled(true);
            Game.prevent();
        }

        Game.message(
            damageType + " " + damageValue + " " + victim + "  " + attacker + 
            someBool2 + 
            someBool1
        );
    }
);*/

/*
    *rose
    *
Callback.addCallback("ServerPlayerTickFunction", function (player) {
actor = new PlayerActor(player);
for (let i = 0; i < 36; i++) {
var sl = actor.getInventorySlot(i);
if (sl.id == ItemID.WitherlessRose && Entity.hasEffect(player, Native.PotionEffect.wither).level >0) {
    Entity.clearEffect(player, Native.PotionEffect.wither);

}}
});



*/




// file: Items/alcagestiaBook.js

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




