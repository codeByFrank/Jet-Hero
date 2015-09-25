var background;
var gameLayer;
var scrollSpeed = 1;
var left;

var gameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		gameLayer = new game();
		gameLayer.init();
		this.addChild(gameLayer);
		this.addChild(new StatusLayer());
		this.addChild(new AnimationLayer());
	}
});

var game = cc.Layer.extend({
	init:function() {
		this._super();
		background = new ScrollingBG();
        left  = new LeftBG();
        right = new RightBG();
		this.addChild(background);
        this.addChild(left);
        this.addChild(right);
		this.scheduleUpdate();
        
	},
	update:function(dt) {
		background.scroll();

	}
});

var LeftBG = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("res/left.png");
	},
	onEnter:function() {
		this.setPosition(85, 40);
	}
})


var RightBG = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("res/right.png");
	},
	onEnter:function() {
		this.setPosition(228, 40);
	}
})


var ScrollingBG = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("res/menu_bg.png");
	},
	onEnter:function() {
		this.setPosition(160, 480);
	},
	scroll:function() {
        
		this.setPosition(this.getPosition().x, this.getPosition().y-1);
		if(this.getPosition().y<0) {
			this.setPosition(this.getPosition().x, this.getPosition().y+520);
		}
	},

});