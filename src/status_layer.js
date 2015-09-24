var StatusLayer = cc.Layer.extend({
    labelCoin:null,
    labelMeter:null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winsize = cc.director.getWinSize();

        this.labelMeter = new cc.LabelTTF("0M", "Helvetica", 20);
        this.labelMeter.setPosition(cc.p(winsize.width - 30, winsize.height - 20));
        this.addChild(this.labelMeter);
    }
});