var AnimationLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
		var size = cc.director.getWinSize();

		
		var car = new cc.Sprite(res.Car_temp_png);
		car.setAnchorPoint(cc. p(0.5,1));
		car.setPosition(cc.p(size.width/2, 150));
		this.addChild(car, 0);
		
		//car.runAction(new cc.MoveBy(2, cc.p(30,(0-size.height))));	
        
    }
});