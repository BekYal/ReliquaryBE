IDRegistry.genItemID("RendingGale");
Item.createItem("RendingGale", "Rending gale", { name: "rending_gale", data: 0 }, {stack: 1});
Item.setMaxUseDuration(ItemID.RendingGale, 6000);
let Wand = {
	isFly: false,
	chargeMode: false,
	feathers: 0,
	getFly: function() {
		return Wand.isFly;
	},
	getfeathers: function() {
		return Wand.feathers;
	},
	charging: function() {
		return Wand.chargeMode;
	}
};
let letychieCheloveki = [];
Item.registerNoTargetUseFunction(ItemID.airWand, function(item, player) {
	if (!~letychieCheloveki.indexOf(player))
		letychieCheloveki.push(player);
});

Item.registerUsingReleasedFunction(ItemID.airWand, function(item, ticks, player) {
	let index = letychieCheloveki.indexOf(player);
	if (!!~index)
		letychieCheloveki.splice(index, 1);
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
	if (item.id == ItemID.RendingGale) {
		if (Wand.chargeMode) {
			Wand.chargeMode = false;
		} else {
			Wand.chargeMode = true;
		}
	}
});

var ChargeContainer = new UI.Container();
var ChargeHUD = new UI.Window({
	location: {
		x: 1000,
		y: 1000,
		width: 30,
		height: 20
	},
	drawing: [{
		type: "background",
		color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"charge": {
			type: "text",
			x: 0,
			y: 0,
			text: "huy",
			font: {
				size: 300,
				color: android.graphics.Color.WHITE
			}
		}
	}
});

ChargeHUD.setAsGameOverlay(true);
ChargeHUD.setTouchable(false);

Callback.addCallback("NativeGuiChanged", function(screenName) {
	screenName == "in_game_play_screen" && ChargeContainer.openAs(ChargeHUD);
	screenName != "in_game_play_screen" && ChargeContainer.close();
});

Callback.addCallback("ServerPlayerTick", function() {
	for (let i in letychieCheloveki) {
		let player = letychieCheloveki[i];
	let actor = new PlayerActor(player);
	for (let i = 0, j = 0; i <= 36; i++, j++) {
		let item = actor.getInventorySlot(i), it = actor.getInventorySlot(j);
		if (item.id == ItemID.RendingGale && it.id == 288 &&
			World.getThreadTime() % 4 == 0 && Wand.chargeMode) {
			Wand.feathers++;
			actor.setInventorySlot(y, it.id, it.count =- 1, it.data, it.extra);
			break;
		}
	}
	
	if (World.getThreadTime() % 120 == 0 && Wand.isFly) {
		Wand.feathers--;
		ChargeContainer.setText("charge", Wand.feathers);
	}}
});

Callback.addCallback("ServerPlayerTick", function() {
	for (let i in letychieCheloveki) {
		let player = letychieCheloveki[i];
		if (Entity.getCarriedItem(player).id != ItemID.airWand) {
			letychieCheloveki.splice(i, 1);
			continue;
		}
		let vec = Entity.getLookVector(player);
		Entity.setVelocity(player, vec.x * 2, vec.y * 2, vec.z * 2);
	}
});