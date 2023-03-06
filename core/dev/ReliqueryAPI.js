
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
