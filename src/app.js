var background;
var gameLayer;
var scrollSpeed = 1;

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
		this.addChild(background);
		this.scheduleUpdate();
	},
	update:function(dt) {
		background.scroll();
	}
});

var ScrollingBG = cc.Sprite.extend({
	ctor:function() {
		this._super();
		this.initWithFile("res/menu_bg.png");
	},
	onEnter:function() {
		this.setPosition(160, 480);
	},
	scroll:function() {
		this.setPosition(this.getPosition().x, this.getPosition().y-30);
		if(this.getPosition().y<0) {
			this.setPosition(this.getPosition().x, this.getPosition().y+520);
		}
	}

});