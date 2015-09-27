//var ArrowLayer = cc.Layer.extend({
//    ctor:function () {
//        this._super();
//        this.init();
//    },
//    init:function () 
//    {
//        this._super();
//		var size = cc.director.getWinSize();
//		
//		var left = new cc.Sprite(res.Left_png);  
//        left.setAnchorPoint(cc.p(0.5,0.5));
//		left.setPosition(cc.p(120, 400));
//		this.addChild(left, 0);
//		
//    }
//});


 
     
  

  
        
        
        
        
        
        
        
        
        
        
//          local textButton = ccui.Button:create()
//    textButton:setTouchEnabled(true)
//    textButton:loadTextures("cocosui/backtotopnormal.png", "cocosui/backtotoppressed.png", "")
//    textButton:setTitleText("Text Button")
//    textButton:setPosition(cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0))
//    textButton:addTouchEventListener(touchEvent)        
//    self._uiLayer:addChild(textButton)   
//        
//        
//           var textButton = cc.Button.create(); //Button::create();
//           textButton.setEnabled(true);    // textButton->setTouchEnabled(true);
//           textButton.loadTexture(res.Left_png,res.Left_png, "");
//           textButton.setTileText("left button");
//           textButton.setPosition(86, 200);
//           textButton.addTouchEventListener(this, toucheventselector(UITextButtonTest.touchEvent))
//           this.addChild(textButton);
//        
//    textButton->loadTextures("cocosgui/backtotopnormal.png", "cocosgui/backtotoppressed.png", "");
//    textButton->setTitleText("Text Button");
//    textButton->setPosition(Point(widgetSize.width / 2.0f, widgetSize.height / 2.0f));
//    textButton->addTouchEventListener(this, toucheventselector(UITextButtonTest::touchEvent));        
//    this->addChild(textButton);
        
        
        
        
        
        
//        var right =  RightBG();
//        this.addChild(right);
        
        
//      var left = new cc.Sprite(res.Car_temp_png);
//      car.setAnchorPoint(cc.p(0.5,0.5));
//		car.setPosition(cc.p(size.width/2 - 3, 150));
//		this.addChild(car, 0);
        
         


        
//                        // if the ability exists
//        if(cc.sys.capabilities.hasOwnProperty('mouse'))
//        {
//        
//            cc.eventManager.addListener({
//            event: cc.EventListener.TOUCH_ONE_BY_ONE,
//            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
//            swallowTouches: true,
//            //onTouchBegan event callback function                      
//            onTouchBegan: function (touch, event) { 
//                // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.   
//                var target = event.getCurrentTarget();  
//
//                //Get the position of the current point relative to the button
//                var locationInNode = target.convertToNodeSpace(touch.getLocation());    
//                var s = target.getContentSize();
//                var rect = cc.rect(0, 0, s.width, s.height);
//
//                //Check the click area
//                if (cc.rectContainsPoint(rect, locationInNode)) {       
//                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
//                    target.opacity = 180;
//                    return true;
//                }
//                
//            }
//
//            },this);
//        }
//  
        
//   // if the ability exists
//        if(cc.sys.capabilities.hasOwnProperty('mouse'))
//        {
//        
//            cc.eventManager.addListener({
//            event: cc.EventListener.TOUCH_ONE_BY_ONE,
//            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
//            swallowTouches: true,
//            //onTouchBegan event callback function                      
//            onTouchEnd:function (touch, event) {
//            if (touch) {
//cc.log("in");
//                    touched = this.getItemForTouch(touch);
//
////                    if (touched == null) return;
////                    switch(touched.tag)
////                    {
////                       case START_BUTTON:
////                         // do stuff here
////                       break;
////                    }
//                }
//            }
//
//            },this);
//        }
  
        
//        cc.eventManager.addListener({
//            event: cc.EventListener.TOUCH_ONE_BY_ONE,
//            swallowTouches: true,
//            onTouchBegan:function (touch, event) 
//            {
//                cc.log("say somthing");
//                if (touch) 
//                {
//                    touched = this.getItemForTouch(touches[0]);
//
////                    if (touched == null) return;
////                    switch(touched.tag)
////                    {
////                       case START_BUTTON:
////                         // do stuff here
////                       break;
////                    }
//                }
//            }
//        });
        ,
   getItemForTouch:function (touch) {
       cc.log("in2");
        var touchLocation = touch.getLocation();

            if (this._children && this._children.length > 0) {
                for (var i = 1; i < this._children.length; i++) {
                        var local = this._children[i].convertToNodeSpace(touchLocation);
                        var r = cc.RectMake(local.x, local.y, this._children[i].getBoundingBox().size.width,
                                                              this._children[i].getBoundingBox().size.height);
                        r.origin = cc.p(0,0);
                        if (cc.Rect.CCRectContainsPoint(r, local)) {
                                  cc.log("in3");
                            return this._children[i];
                        }
                   // }
                }
            }

            return null;
        },
    
            
            
            
            var AnimationLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
  
   
        
    },
    init:function() {
        this._super();
		var size = cc.director.getWinSize();

		
		var car = this.car = new cc.Sprite.create(res.Car_temp_png);
        car.setAnchorPoint(cc.p(0.5,0.5));
		car.setPosition(cc.p(size.width/2 - 3, 150));
		this.addChild(car,1);
        
        // this is left button 
        var left = this.left = new cc.Sprite.create(res.Left_png);
        this.addChild(left,100);
        this.left.y = 200;
        this.left.x = 86;
        
            
        
         var itemStartGame = cc.MenuItemImage.create(
                res.Left_png,
                res.Rigth_png,
                this.menuCallBack,
                this
            );
            itemStartGame.setPosition(86, 300);

            var menu = cc.Menu.create(itemStartGame);
            menu.setPosition(0,0);
            this.addChild(menu);
        
        
        
//        left.setPosition(86, 200);
        
       
        cc.log("do something n");
        
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
    },
    addTouch: function(){
        // creating an event listener to add on our button sprite 
        var listener1 = cc.EventListener.create(
        {
              event: cc.EventListener.TOUCH_ONE_BY_ONE,
              swallowTouches: true,
              onTouchBegan: function (touch, event) 
              {
                   cc.log("do something");
                var target = event.getCurrentTarget();
                // gets your touch location from world space to node space
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                // get Size of target on which event are set i.e is our button sprite
                var s = target.getContentSize();
                // getting the rectangle in which our sprite lies 
                var rect = cc.rect(0, 0, s.width, s.height);
                // checking touchlocation inside the the bounding box of button sprite
                if (cc.rectContainsPoint(rect, locationInNode)) 
                {
                  // checking which button has pressed
                  target.parent.checkButton(target);
                  // decreasing opacity of button to change little view of button sprite
                  target.opacity = 180;
                  return true;
                }
                return false;
             },

            onTouchEnded: function (touch, event) 
            {
                cc.log("awesome");
            }
        });

        cc.eventManager.addListener(listener1, this.left);

  },
  checkButton: function(target){
       cc.log("do something");
    if(target === this.left)
    {
        cc.log("do something");
    }
  },
    menuCallBack:function(sender){
        var sprite_action = cc.MoveBy.create(0.35, cc.p(-70, 0));
        this.car.runAction(sprite_action);
        
        cc.log("do something");
//        gSharedEngine.playEffect(EFFECT_BUTTON_CHICK);
//        //gGameMode = eGameMode.Challenge;
//        gGameMode = eGameMode.Timer;
//        var nextScene = cc.Scene.create();
//        var nextLayer = new PatternMatrix;
//        nextScene.addChild(nextLayer);
//        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(0.4, nextScene));
    }
});