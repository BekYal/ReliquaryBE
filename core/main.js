/*
BUILD INFO:
  dir: core/dev
  target: core/main.js
  files: 4
*/



// file: ReliqueryAPI.js


var Reliquary = {

	setChargeOnItem : function(chargedItem, chargeItem, repair){ 
		Callback.addCallback("ServerPlayerTick", function (player) {
			let actor = new PlayerActor(player);
		for (let i = 0; i <= 36; i++) {
			for(let y = 0; y <= 36; y++){
	let item = actor.getInventorySlot(i);
	let it = actor.getInventorySlot(y);
			if ( item.id == chargedItem && it.id == chargeItem
			&& World.getThreadTime() % 4 == 0
			&& item.data < Item.getMaxDamage(chargedItem) ){
				actor.setInventorySlot(i, item.id, item.count, item.data - repair, item.extra);
				actor.setInventorySlot(y, it.id, it.count-1, it.data, it.extra);
			break;
			}
		}
	}
	});	
	},

 
	Threadtime : function (ticks){
		return World.getThreadTime() % ticks == 0;
	},

	inInv: function(item, data, func) {
		for(let y = 0; y <= 40; y++){
			let actor = new PlayerActor(Player.get());
			let item = actor.getInventorySlot(y);
			if ( item.id == item && item.data == data) {
				func(player, item);
			}
		}
	
		},

	getItemSlot : function(item, data){ 
		for(let y = 0; y <= 40; y++){
	let actor = new PlayerActor(Player.get());
	let item = actor.getInventorySlot(y);
	if ( item.id == item && item.data == data) return y;
		}
		
	},

	SetFly : function (bool) {
		Player.setFlyingEnabled(bool);
	Callback.addCallback("EntityHurt",
	function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
		if (damageType == 5 && bool == true) Game.prevent();  /*else if (bool == false){
			return;
		}*/
	});
	},

	createDamageItem: function (nameID, damage, name) {
		IDRegistry.genItemID(nameID);
		Item.createItem(nameID, name,
{ name: name },
{ isTech: false, stack: 1 });
		Item.setMaxDamage(ItemID[nameID], damage);
		  Item.addToCreative(nameID, 1, damage);
		  
	},

	setTimeout: function (func, ticks, obj) {
			obj = obj || {};
		var upd = { ticks: 0, update: function () {
	this.ticks++;
	if (this.ticks >= ticks) {
		func(obj);
		this.remove = true;
		
	}
	
	}}; 
	Updatable.addUpdatable(upd);
	}
};




// file: Items/WTHRose.js

/*
IDRegistry.genItemID("WitherlessRose");
Item.createItem("WitherlessRose", "Witherless Rose", {data: 0, name: "withrose"}, {
    isTech: false,
    stack: 1,
});
Reliquary.inInv(ItemID.WitherlessRose, 0, function (player) {
    if (Entity.getEffect(player, EPotionEffect.WITHER).level > 0) {
        Entity.clearEffect(Player.get(), EPotionEffect.WITHER);
        Entity.addEffect(Player.get(), EPotionEffect.WITHER, 0, 0, false, false);
    }
    
});
*/




// file: Items/alcagestiaBook.js

let click = 0;
Saver.addSavesScope("click", 
	function read(scope){
		click = scope? scope.click: 0;
	},
	function save(){
		return {"click": click};
	}
);
 Reliquary.createDamageItem("alkahestryTome", 1000, "alkahestryTome");
 Reliquary.createDamageItem("alkahestry2", 1000, "alkahestryTome");
 Item.setGlint("alkahestry2", true);
var maxd2 = Item.getMaxDamage(ItemID.alkahestry2);
var maxd = Item.getMaxDamage(ItemID.alkahestryTome);
var AlkahestryTome = {};
var alkCharges = [];

AlkahestryTome.addCharge = function (id, data, repair){
Recipes.addShapeless({id: ItemID.alkahestryTome, count: 1},
   [{ id: id, data: data },
   { id: ItemID.alkahestryTome, data: -1 }],
    function (api, field, result) {
     api.prevent();
     for (let i  in field) {
      if (field[i].id == ItemID.alkahestryTome && field[i].data != 0) {
       field[i].data -= repair;
      } else {
	field[i].count--;
      }
         }
          });

/*Callback.addCallback("ServerPlayerTick", function (player) {
let actor = new PlayerActor(player);
	for( let i = 0; i <= 36; i++ ) {
		let item = actor.getInventorySlot(i), it = actor.getInventorySlot(i)
	if ( item.id == ItemID.alkahestry2) {
		if()
	}
	}
});
*/
Callback.addCallback("ServerPlayerTick", function (player) {
let actor = new PlayerActor(player);
	for( let i = 0; i <= 36; i++ ) {
	for( let y = 0; y <= 36; y++ ) {
		let item = actor.getInventorySlot(i);
		let it = actor.getInventorySlot(y);
	if ( item.id == ItemID.alkahestry2  && it.id == id  && World.getThreadTime() % 2 == 0 
		&& item.data <= 1000 && item.data >= 0){
	actor.setInventorySlot(i, item.id, item.count, item.data - repair, item.extra);
	actor.setInventorySlot(y, it.id, it.count-1, it.data, it.extra);
		break;
		}
	}
	}
});

/*Callback.addCallback("ServerPlayerTick", function (player) {
let actor = new PlayerActor(player);
	for( let i = 0, y = 0; i <= 37, y <= 36; i++, y++ ){
		let item = actor.getInventorySlot(i), it  = actor.getInventorySlot(y);
		if ( item.id == ItemID.alkahestry2 && it.id == id && item.data != 1000 || item.data != 0 ) {
			actor.setInventorySlot(i, item.id, item.count, item.data - repair, item.extra);
			actor.setInventorySlot(y, it.id, it.count - 1, it.data, it.extra);
			break;
		}
	}
});*/
/*Callback.addCallback("ServerPlayerTick", function (player) {
alk: for( let i = 0; i <= 36; i++ ) {
	for( let y = 0; y <= 36; y++ ) {
		let actor = new PlayerActor(player), 
		item = actor.getInventorySlot(i), 
		it = actor.getInventorySlot(y);
		if ( item.id == ItemID.alkahestry2 && World.getThreadTime() % 1.5 == 0) {
		if( item.data != 1000 && item.data != 0 && it.id == id ){
		actor.setInventorySlot(i, item.id, item.count, item.data - repair, item.extra);
		actor.setInventorySlot(y, it.id, it.count - 1, it.data, it.extra);
			}
		break;
		}
	}
}
});*/
};
AlkahestryTome.addAlkahestry = function (id, data, count, cost){
	Recipes.addShapeless({id: id, count: count , data: data},
		[{ id: id, data: data }, { id: ItemID.alkahestryTome, data: -1 }],
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


Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
	if (item.id == ItemID.alkahestryTome && Entity.getSneaking(player)) Entity.setCarriedItem(player, ItemID.alkahestry2, item.count, item.data, item.extra);
	if (item.id == ItemID.alkahestry2 && Entity.getSneaking(player)) Entity.setCarriedItem(player, ItemID.alkahestryTome, item.count, item.data, item.extra);
});


AlkahestryTome.addAlkahestry(265, 0, 2, 4);
AlkahestryTome.addAlkahestry(4, 0, 33, 4);
AlkahestryTome.addAlkahestry(12, 0, 2, 4);
AlkahestryTome.addCharge(152, 0, 9);
AlkahestryTome.addCharge(89, 0, 4);
AlkahestryTome.addCharge(348, 0, 1);
AlkahestryTome.addCharge(331, 0, 1);





// file: Items/debug.js





