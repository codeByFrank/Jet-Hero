var ArrowLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();
		var size = cc.director.getWinSize();
		
		var left = new cc.Sprite(res.Left_png);  
        left.setAnchorPoint(cc.p(0.5,0.5));
		left.setPosition(cc.p(120, 400));
		this.addChild(left, 0);
		
    }
});