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
