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