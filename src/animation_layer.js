var AnimationLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
		var size = cc.director.getWinSize();

		
		var car = new cc.Sprite(res.Car_temp_png);
        car.setAnchorPoint(cc.p(0.5,0.5));
		car.setPosition(cc.p(size.width/2 - 3, 150));
		this.addChild(car, 0);
		
		//car.runAction(new cc.MoveBy(2, cc.p(30,(0-size.height))));	
        
        
        // if the ability exists
        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            //add a keyboard event listener to statusLabel
            cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed:  function(keyCode, event){
            
                if(keyCode == 37)
                {
                   var sprite_action = cc.MoveBy.create(0.35, cc.p(-70, 0));
                   car.runAction(sprite_action);
                }
                
                if(keyCode == 39)
                {
                   var sprite_action = cc.MoveBy.create(0.35, cc.p(70, 0));
                   car.runAction(sprite_action);
                }
        
                cc.log("key was pressed:  " + keyCode.toString());
            },
            onKeyReleased: function(keyCode, event){
                cc.log("key was released:  " + keyCode.toString());
            }
            
        }, this);
       }
        
        
        cc.eventManager.addListener({
        event: cc.EventListener.MOUSE,
        onMouseMove: function(event){
        var str = "MousePosition X: " + event.getLocationX() + "  Y:" + event.getLocationY();
            cc.log(str );
            
            // do something...
        },
        onMouseUp: function(event){
            var str = "Mouse Up detected, Key: " + event.getButton();
              cc.log(str );
            // do something...
        },
        onMouseDown: function(event){
            var str = "Mouse Down detected, Key: " + event.getButton();
            // do something...
        },
        onMouseScroll: function(event){
            var str = "Mouse Scroll detected, X: " + event.getLocationX() + 
                      "  Y:" +            event.getLocationY();
              cc.log(str );
            // do something...
        }
    },this);
        
        
    }
});