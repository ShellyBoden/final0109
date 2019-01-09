
$(function () { 
//1 2門---------------------------------------------------------------------------
        			var mouseTopPerc=0;
        			function getMousePos(){
        				return (mouseTopPerc*400)+600;
        			}

        			$("body").on("mousemove",function(e){
        				mouseTopPerc=e.clientY$(this).innerHeight();
        			});

        			var controller_door=new ScrollMagic.Controller();

        			var tween_doorl=TweenMax.to("#door_l",0.5,{rotationY:0});
        			var tween_doorr=TweenMax.to("#door_r",0.5,{rotationY:0});

        			var scene_doorl=new ScrollMagic.Scene({triggerElement:"#trigger_door",duration:getMousePos})
        						.setTween(tween_doorl)
        						// .addIndicators()
        						.addTo(controller_door);
        			var scene_doorr=new ScrollMagic.Scene({triggerElement:"#trigger_door",duration:getMousePos})
        						.setTween(tween_doorr)
        						// .addIndicators()
								.addTo(controller_door);	

//3 4 5 6tit一起定住---------------------------------------------------------------------------

    				var controller_tit0=new ScrollMagic.Controller();
    				var tween_tit0=TweenMax.to("#tital",0.2,{opacity:1});
    				var scene_tit0=new ScrollMagic.Scene({triggerElement:"#trigger_tit",duration:300})
    							.setTween(tween_tit0)
    							// .addIndicators({name: "淡入"})
    							.addTo(controller_tit0);


    				var controller_tit = new ScrollMagic.Controller();
    				var scene_tit = new ScrollMagic.Scene({triggerElement: "#trigger_tit", duration: 400})
    								.setPin("#tital")
    								// .addIndicators() // add indicators (requires plugin)
    								.addTo(controller_tit);


    				var controller_tit_dl = new ScrollMagic.Controller();
    				var scene_tit_dl = new ScrollMagic.Scene({triggerElement: "#trigger_tit", duration: 400})
    								.setPin("#door_l")
    								// .addIndicators() // add indicators (requires plugin)
    								.addTo(controller_tit_dl);										


    				var controller_tit_dr = new ScrollMagic.Controller();
    				var scene_tit_dr = new ScrollMagic.Scene({triggerElement: "#trigger_tit", duration: 400})
    								.setPin("#door_r")
    								// .addIndicators() // add indicators (requires plugin)
    								.addTo(controller_tit_dr);


    				var controller_tit_wardrobe = new ScrollMagic.Controller();
    				var scene_tit_wardrobe = new ScrollMagic.Scene({triggerElement: "#trigger_tit", duration: 400})
    								.setPin("#wardrobe")
    								// .addIndicators() // add indicators (requires plugin)
    								.addTo(controller_tit_wardrobe);				

//6 剪刀路線------------------------------------------------

	                var flightpath = {
	                					entry : {
	                						curviness: 1.5,
	                						autoRotate: true,
	                						values: [
	                								{x: 1400,	y: 0}
	                							]
	                					}
	                				};
	                				// init controller
					var controller = new ScrollMagic.Controller();

					// create tween
					var tween = new TimelineMax()
						.add(TweenMax.to($("#scissors"),2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}));
					//.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene = new ScrollMagic.Scene({triggerElement: "#trigger_scissorandcloth", duration: 600, offset: 100})
									.setPin("#target")
									.setTween(tween)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller);

//7 布往下掉跑出字------------------------------------------------

					var flightpath_cloth_2 = {
										entry : {
										values: [
												{x: 0,	y: 500}
												]
												}
										};
					// init controller
					var controller_cloth_2 = new ScrollMagic.Controller();

					// create tween
					var tween_cloth_2 = new TimelineMax()
						.add(TweenMax.to($("#cloth_2"),2, {css:{bezier:flightpath_cloth_2.entry}, ease:Power1.easeInOut}));
//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_cloth_2 = new ScrollMagic.Scene({triggerElement: "#trigger_scissorandcloth", duration: 600, offset: 100})
									.setPin("#target")
									.setTween(tween_cloth_2)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_cloth_2);

//8 布剪刀一起定住---------------------------------------------------------------------------

					var controller_sc_pin = new ScrollMagic.Controller();

					var scene_sc_pin = new ScrollMagic.Scene({triggerElement: "#trigger_pin_sciandcloth", duration: 1000})
									.setPin("#pin2")
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_sc_pin);
					
//9 剪刀剪完------------------------------------------------

					var  scissorspath= {
						entry : {
							curviness: 1.5,
							autoRotate: true,
							values: [
									{x: 2000,	y: 0}
								]
						}
					};
					// init controller
					var controller_scissorspath = new ScrollMagic.Controller();

					// create tween
					var tween_scissorspath = new TimelineMax()
						.add(TweenMax.to($("#scissors"),5000000000, {css:{bezier:scissorspath.entry}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_scissorspath = new ScrollMagic.Scene({triggerElement: "#trigger_sciandcloth_out", duration: 500, offset: 100})
									.setPin("#target")
									.setTween(tween_scissorspath)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_scissorspath);

//10 布往下掉完------------------------------------------------

					var clothpath = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 1000}
								]
						}
					};
					// init controller
					var controller_clothpath = new ScrollMagic.Controller();

					// create tween
					var tween_clothpath = new TimelineMax()
						.add(TweenMax.to($("#cloth_2"),5000000000, {css:{bezier:clothpath.entry,opacity: 0}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_clothpath = new ScrollMagic.Scene({triggerElement: "#trigger_sciandcloth_out", duration: 500, offset: 100})
									.setPin("#target")
									.setTween(tween_clothpath)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothpath);
				
//11 12尺_1出現 定住---------------------------------------------------------------------------------------------------------------------------------
					var controller_ruler_1=new ScrollMagic.Controller();
    				var tween_ruler_1=TweenMax.to("#ruler_1",0.2,{opacity:1});
    				var scene_ruler_1=new ScrollMagic.Scene({triggerElement:"#trigger_ruler_1",duration:300})
    							.setTween(tween_ruler_1)
    							// .addIndicators({name: "淡入"})
								.addTo(controller_ruler_1);
								

					var controller_ruler_1_pin = new ScrollMagic.Controller();
					var scene_ruler_1_pin = new ScrollMagic.Scene({triggerElement: "#trigger_ruler_1_pin", duration: 2500})
										.setPin("#ruler_1")
										// .addIndicators({name: "R1"}) // add indicators (requires plugin)
										.addTo(controller_ruler_1_pin);

//13 14尺_2出現 定住---------------------------------------------------------------------------------------------------------------------------------

					var controller_ruler_2=new ScrollMagic.Controller();
					var tween_ruler_2=TweenMax.to("#ruler_2",0.2,{opacity:1});
					var scene_ruler_2=new ScrollMagic.Scene({triggerElement:"#trigger_ruler_2",duration:300})
								.setTween(tween_ruler_2)
								// .addIndicators()
								.addTo(controller_ruler_2);
								
							
					var controller_ruler_2_pin = new ScrollMagic.Controller();
					var scene_ruler_2_pin = new ScrollMagic.Scene({triggerElement: "#trigger_ruler_2", duration: 2000})
									.setPin("#ruler_2")
									// .addIndicators({name: "R2"}) // add indicators (requires plugin)
									.addTo(controller_ruler_2_pin);

//15 對話框_1出現 定住---------------------------------------------------------------------------------------------------------------------------------

    				var controller_balloon_1=new ScrollMagic.Controller();
    				var tween_balloon_1=TweenMax.to("#balloon_1",0.2,{opacity:1});
    				var scene_balloon_1=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1",duration:300})
    							.setTween(tween_balloon_1)
    							// .addIndicators()
    							.addTo(controller_balloon_1);


    				var controller_balloon_1_pin = new ScrollMagic.Controller();
    				var scene_balloon_1_pin = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_1", duration: 1800})
    								.setPin("#balloon_1")
    								// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_balloon_1_pin);							
											
//尺_1 尺_2 對話框 消失---------------------------------------------------------------------------------------------------------------------------------

					var controller_balloon_disappear=new ScrollMagic.Controller();
					var tween_balloon_disappear=TweenMax.to("#balloon_1",0.2,{opacity:0});
					var scene_balloon_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear",duration:300})
								.setTween(tween_balloon_disappear)
								// .addIndicators()
								.addTo(controller_balloon_disappear);

					var controller_ruler_2_disappear=new ScrollMagic.Controller();
					var tween_ruler_2_disappear=TweenMax.to("#ruler_2",0.2,{opacity:0});
					var scene_ruler_2_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear",duration:300})
								.setTween(tween_ruler_2_disappear)
								// .addIndicators()
								.addTo(controller_ruler_2_disappear);

					var controller_ruler_1_disappear=new ScrollMagic.Controller();
					var tween_ruler_1_disappear=TweenMax.to("#ruler_1",0.2,{opacity:0});
					var scene_ruler_1_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear",duration:300})
								.setTween(tween_ruler_1_disappear)
								// .addIndicators()
								.addTo(controller_ruler_1_disappear);

//娃定住(娃掉下)-------------------------------------------------------------------------------------------------------------------------------------------
        			var controller_doll_pin = new ScrollMagic.Controller();

        			var scene_doll_pin = new ScrollMagic.Scene({triggerElement: "#trigger_doll_pin", duration: 9000})
        							.setPin("#doll")
        							// .addIndicators({name: "doll_pin"}) // add indicators (requires plugin)
									.addTo(controller_doll_pin);
									
//花瓣落下---------------------------------------------------------------------------------------------------------------------------------
					var petal_path = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 4000}
								]
						}
					};
					// init controller
					var controller_petal_path = new ScrollMagic.Controller();

					// create tween
					var tween_petal_path = new TimelineMax()
						.add(TweenMax.to($("#petal_1,#petal_2,#petal_3,#petal_4,#petal_5,#petal_6,#petal_7,#petal_8,#petal_9,#petal_10,#petal_11,#petal_12,#petal_13,#petal_14,#petal_15"),0.01, {css:{bezier:petal_path.entry}, ease:Power1.easeInOut}));
					// build scene
					var scene_petal_path = new ScrollMagic.Scene({triggerElement: "#trigger_petal", duration: 2500, offset: 0})
									.setPin("#target")
									.setTween(tween_petal_path)
									// .addIndicators({name: "手動花瓣"}) // add indicators (requires plugin)
									.addTo(controller_petal_path);


//花瓣淡入--------------------------------------------------------------------------------------------------------------------------

					var controller_petal = new ScrollMagic.Controller();

					var scene_petal = new ScrollMagic.Scene({triggerElement: "#trigger_petal"})
									.setTween("#petal", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
									.addTo(controller_petal);

//娃衣服一起定住---------------------------------------------------------------------------

					var controller_clothes_pin = new ScrollMagic.Controller();

					var scene_clothes_pin = new ScrollMagic.Scene({triggerElement: "#trigger_clothes_pin", duration: 2300})
									.setPin("#clothes")
									// .addIndicators({name: "clothed_pin"}) // add indicators (requires plugin)
									.addTo(controller_clothes_pin);


					var controller_firework = new ScrollMagic.Controller();

					var scene_firework = new ScrollMagic.Scene({triggerElement: "#trigger_clothes_pin", duration: 2300})
									.setPin("#firework")
									// .addIndicators({name: "firework"}) // add indicators (requires plugin)
									.addTo(controller_firework);

//15 煙火---------------------------------------------------------------------------------------------------------------------------------

					var controller_firework_1_s = new ScrollMagic.Controller();
					var scene_firework_1_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_1_s"})
									.setTween("#firework_1", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_1_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_1_s);

					var controller_firework_5_s = new ScrollMagic.Controller();
					var scene_firework_5_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_1_s"})
									.setTween("#firework_5", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_5_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_5_s);
				
					var controller_firework_1_e = new ScrollMagic.Controller();
					var scene_firework_1_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_1_e"})
									.setTween("#firework_1", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_1_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_1_e);					

					var controller_firework_5_e = new ScrollMagic.Controller();
					var scene_firework_5_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_1_e"})
									.setTween("#firework_5", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_5_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_5_e);

				

					var controller_firework_2_s = new ScrollMagic.Controller();
					var scene_firework_2_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_2_s"})
									.setTween("#firework_2", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_2_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_2_s);

					var controller_firework_2_e = new ScrollMagic.Controller();
					var scene_firework_2_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_2_e"})
									.setTween("#firework_2", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_2_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_2_e);		
				
					var controller_firework_7_s = new ScrollMagic.Controller();
					var scene_firework_7_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_2_s"})
									.setTween("#firework_7", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_7_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_7_s);

					var controller_firework_7_e = new ScrollMagic.Controller();
					var scene_firework_7_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_2_e"})
									.setTween("#firework_7", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_7_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_7_e);
	
									
				
					var controller_firework_6_s = new ScrollMagic.Controller();
					var scene_firework_6_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_s"})
									.setTween("#firework_6", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_6_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_6_s);

					var controller_firework_6_e = new ScrollMagic.Controller();
					var scene_firework_6_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_e"})
									.setTween("#firework_6", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_6_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_6_e);		
				
					var controller_firework_8_s = new ScrollMagic.Controller();
					var scene_firework_8_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_s"})
									.setTween("#firework_8", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_8_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_8_s);

					var controller_firework_8_e = new ScrollMagic.Controller();
					var scene_firework_8_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_e"})
									.setTween("#firework_8", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_8_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_8_e);
				
					var controller_firework_9_s = new ScrollMagic.Controller();
					var scene_firework_9_s = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_s"})
									.setTween("#firework_9", 1, {opacity: 1}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_9_s"}) // add indicators (requires plugin)
									.addTo(controller_firework_9_s);

					var controller_firework_9_e = new ScrollMagic.Controller();
					var scene_firework_9_e = new ScrollMagic.Scene({	triggerElement: "#trigger_firework_3_e"})
									.setTween("#firework_9", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "firework_9_e"}) // add indicators (requires plugin)
									.addTo(controller_firework_9_e);	

//15 花瓣消失---------------------------------------------------------------------------------------------------------------------------------

					var controller_petal_disapper = new ScrollMagic.Controller();

					var scene_petal_disapper = new ScrollMagic.Scene({	triggerElement: "#trigger_petal_dis"})
									.setTween("#petal", 1, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
									.addTo(controller_petal_disapper);				

//15 娃消失 心定住---------------------------------------------------------------------------------------------------------------------------------

					var controller_doll_disappear = new ScrollMagic.Controller();
					var scene_doll_disappear = new ScrollMagic.Scene({	triggerElement: "#trigger_doll_disappear"})
									.setTween("#doll", 0.5, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_doll_disappear);

					var controller_clothes_disappear = new ScrollMagic.Controller();

					var scene_clothes_disappear = new ScrollMagic.Scene({	triggerElement: "#trigger_doll_disappear"})
									.setTween("#clothes", 0.5, {opacity: 0}) // trigger a TweenMax.to tween
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothes_disappear);	


					var controller_heart_pin = new ScrollMagic.Controller();
					var scene_heart_pin = new ScrollMagic.Scene({triggerElement: "#trigger_doll_disappear", duration: 2200})
									.setPin("#heart_and_text")
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_heart_pin);					
							
//心出現---------------------------------------------------------------------------------------------------------------------------------

var controller_heart = new ScrollMagic.Controller();

var scene_heart = new ScrollMagic.Scene({	triggerElement: "#trigger_heart"})
				.setTween("#heart", 5, {opacity: 1}) // trigger a TweenMax.to tween
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller_heart );	

//心動了嗎出現---------------------------------------------------------------------------------------------------------------------------------

var controller_touched = new ScrollMagic.Controller();

var scene_touched = new ScrollMagic.Scene({	triggerElement: "#trigger_touched"})
				.setTween("#touched", 3, {opacity: 1}) // trigger a TweenMax.to tween
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller_touched );	
				
//聯絡我們出現---------------------------------------------------------------------------------------------------------------------------------

var controller_contact = new ScrollMagic.Controller();

var scene_contact = new ScrollMagic.Scene({	triggerElement: "#trigger_contact"})
				.setTween("#contact", 3, {opacity: 1}) // trigger a TweenMax.to tween
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller_contact );		

//15 對話框_2出現 定住---------------------------------------------------------------------------------------------------------------------------------

					var controller_balloon_2=new ScrollMagic.Controller();
					var tween_balloon_2=TweenMax.to("#balloon_2",0.2,{opacity:1});
					var scene_balloon_2=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2",duration:300})
								.setTween(tween_balloon_2)
								// .addIndicators()
								.addTo(controller_balloon_2);


					var controller_balloon_2_pin = new ScrollMagic.Controller();
					var scene_balloon_2_pin = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_2", duration: 1800})
									.setPin("#balloon_2")
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_balloon_2_pin);	

//15 對話框_3出現 定住---------------------------------------------------------------------------------------------------------------------------------

				var controller_balloon_3=new ScrollMagic.Controller();
				var tween_balloon_3=TweenMax.to("#balloon_3",0.2,{opacity:1});
				var scene_balloon_3=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_3",duration:300})
							.setTween(tween_balloon_3)
							// .addIndicators()
							.addTo(controller_balloon_3);


				var controller_balloon_3_pin = new ScrollMagic.Controller();
				var scene_balloon_3_pin = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_3", duration: 1800})
								.setPin("#balloon_3")
								// .addIndicators() // add indicators (requires plugin)
								.addTo(controller_balloon_3_pin);					

//15 對話框_2 對話框_3 消失---------------------------------------------------------------------------------------------------------------------------------

				var controller_balloon_2_disappear=new ScrollMagic.Controller();
				var tween_balloon_2_disappear=TweenMax.to("#balloon_2",0.5,{opacity:0});
				var scene_balloon_2_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_3_disappear",duration:300})
								.setTween(tween_balloon_2_disappear)
								// .addIndicators()
								.addTo(controller_balloon_2_disappear);


				var controller_balloon_3_disappear=new ScrollMagic.Controller();
				var tween_balloon_3_disappear=TweenMax.to("#balloon_3",0.5,{opacity:0});
				var scene_balloon_3_disappear=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_3_disappear",duration:300})
								.setTween(tween_balloon_3_disappear)
								// .addIndicators()
								.addTo(controller_balloon_3_disappear);			

//信件跳出---------------------------------------------------------------------------
				var controller_letter = new ScrollMagic.Controller();

				var scene_letter = new ScrollMagic.Scene({
					triggerElement: "#trigger_letter"
				})
				.setTween("#letterpaper", 0.5, {top: 14085}) // trigger a TweenMax.to tween
				// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
				.addTo(controller_letter);
//-----------------------------信件表單淡入----------------------------------------------
				var controller_letter_text = new ScrollMagic.Controller();

				var sceneletter_text = new ScrollMagic.Scene({
					triggerElement: "#trigger_letter"
				})
				.setTween("#text", 1, {opacity: 1}) // trigger a TweenMax.to tween
				// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
				.addTo(controller_letter_text);	
	
	
//---------------------------RWD程式碼------------------------------------------------
var tital_rwd = new ScrollMagic.Controller();

var scene_tital_rwd = new ScrollMagic.Scene({
	triggerElement: "#trigger_door_rwd"
})
.setTween("#tital_rwd", 1, {opacity: 1}) // trigger a TweenMax.to tween
//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(tital_rwd);

//6 剪刀路線------------------------------------------------

	                var flightpath_RWD = {
	                					entry : {
	                						curviness: 1.5,
	                						autoRotate: true,
	                						values: [
	                								{x: 450,	y: 0}
	                							]
	                					}
	                				};
	                				// init controller
					var controller_RWD = new ScrollMagic.Controller();

					// create tween
					var tween_RWD = new TimelineMax()
						.add(TweenMax.to($("#clothes_rwd_middle"),2, {css:{bezier:flightpath_RWD.entry}, ease:Power1.easeInOut}));
					//.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_RWD = new ScrollMagic.Scene({triggerElement: "#trigger_scissorandcloth_RWD", duration: 100, offset:100})
									.setPin("#target")
									.setTween(tween_RWD)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_RWD);

////7 布往下掉跑出字------------------------------------------------
//
					var flightpath_cloth_2_RWD = {
										entry : {
										values: [
												{x: 0,	y:150}
												]
												}
										};
					// init controller
					var controller_cloth_2_RWD = new ScrollMagic.Controller();

					// create tween
					var tween_cloth_2_RWD = new TimelineMax()
						.add(TweenMax.to($("#clothes_rwd_bottom"),2, {css:{bezier:flightpath_cloth_2_RWD.entry}, ease:Power1.easeInOut}));
//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_cloth_2_RWD = new ScrollMagic.Scene({triggerElement: "#trigger_scissorandcloth_RWD", duration: 100, offset: 100})
									.setPin("#target")
									.setTween(tween_cloth_2_RWD)
									// // .addIndicators() // add indicators (requires plugin)
									.addTo(controller_cloth_2_RWD);	
//----------------------------------------------------
	//9 剪刀剪完------------------------------------------------

					var  scissorspath_rwd2= {
						entry : {
							curviness: 1.5,
							autoRotate: true,
							values: [
									{x: 2000,	y: 0}
								]
						}
					};
					// init controller
					var controller_scissorspath_rwd2 = new ScrollMagic.Controller();

					// create tween
					var tween_scissorspath_rwd2 = new TimelineMax()
						.add(TweenMax.to($("#clothes_rwd_middle"),5000000000, {css:{bezier:scissorspath_rwd2.entry}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_scissorspath_rwd2 = new ScrollMagic.Scene({triggerElement: "#trigger_petal_RWD", duration: 500, offset: 100})
									.setPin("#target")
									.setTween(tween_scissorspath_rwd2)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_scissorspath_rwd2);

//10 布往下掉完------------------------------------------------

					var clothpath_rwd_2 = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 1000}
								]
						}
					};
					// init controller
					var controller_clothpath_rwd_2 = new ScrollMagic.Controller();

					// create tween
					var tween_clothpath_rwd_2 = new TimelineMax()
						.add(TweenMax.to($("#clothes_rwd_bottom"),5000000000, {css:{bezier:clothpath_rwd_2.entry,opacity: 0}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_clothpath_rwd_2 = new ScrollMagic.Scene({triggerElement: "#trigger_petal_RWD", duration: 300, offset: 100})
									.setPin("#target")
									.setTween(tween_clothpath_rwd_2)
//									.addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothpath_rwd_2);
	
//----------------------------------------------------
	//11 12尺_1出現 定住---------------------------------------------------------------------------------------------------------------------------------
					var controller_ruler_1_rwd=new ScrollMagic.Controller();
    				var tween_ruler_1_rwd=TweenMax.to("#ruler_rwd_1",0.2,{opacity:1});
    				var scene_ruler_1_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_ruler_1_rwd",duration:100})
    							.setTween(tween_ruler_1_rwd)
//    							.addIndicators({name: "淡入"})
								.addTo(controller_ruler_1_rwd);

//13 14尺_2出現 定住---------------------------------------------------------------------------------------------------------------------------------

					var controller_ruler_2_rwd=new ScrollMagic.Controller();
					var tween_ruler_2_rwd=TweenMax.to("#ruler_rwd_2",0.2,{opacity:1});
					var scene_ruler_2_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_ruler_1_rwd",duration:100})
					.setTween(tween_ruler_2_rwd)
					.addTo(controller_ruler_2_rwd);
						
	
					var controller_doll_rwd=new ScrollMagic.Controller();
					var tween_doll_rwd=TweenMax.to("#doll_rwd",0.1,{opacity:1});
					var scene_doll_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_sciandcloth_RWD",duration:280})
					.setTween(tween_doll_rwd)
					.addTo(controller_doll_rwd);
								
						

//15 對話框_1出現 定住---------------------------------------------------------------------------------------------------------------------------------

    				var controller_balloon_1_rwd=new ScrollMagic.Controller();
    				var tween_balloon_1_rwd=TweenMax.to("#balloon_rwd_1",0.2,{opacity:1});
    				var scene_balloon_1_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_ruler_1_rwd",duration:100})
    							.setTween(tween_balloon_1_rwd)
    							.addTo(controller_balloon_1_rwd);		
	//15 對話框_1出現 定住---------------------------------------------------------------------------------------------------------------------------------

    				var controller_balloon_2_rwd=new ScrollMagic.Controller();
    				var tween_balloon_2_rwd=TweenMax.to("#balloon_rwd_2",0.2,{opacity:1});
    				var scene_balloon_2_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_rwd",duration:200})
    							.setTween(tween_balloon_2_rwd)
    							.addTo(controller_balloon_2_rwd);	
	
					var controller_balloon_disappear_2_rwd=new ScrollMagic.Controller();
					var tween_balloon_disappear_2_rwd=TweenMax.to("#balloon_rwd_2",0.2,{opacity:0});
					var scene_balloon_disappear_2_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_2_disappear_rwd",duration:200})
								.setTween(tween_balloon_disappear_2_rwd)
								.addTo(controller_balloon_disappear_2_rwd);
	//15 對話框_1出現 定住---------------------------------------------------------------------------------------------------------------------------------

    				var controller_balloon_3_rwd=new ScrollMagic.Controller();
    				var tween_balloon_3_rwd=TweenMax.to("#balloon_rwd_3",0.2,{opacity:1});
    				var scene_balloon_3_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_3_rwd",duration:200})
    							.setTween(tween_balloon_3_rwd)
    							.addTo(controller_balloon_3_rwd);	
	
					var controller_balloon_disappear_3_rwd=new ScrollMagic.Controller();
					var tween_balloon_disappear_3_rwd=TweenMax.to("#balloon_rwd_3",0.2,{opacity:0});
					var scene_balloon_disappear_3_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_3_disappear_rwd",duration:200})
								.setTween(tween_balloon_disappear_3_rwd)
								.addTo(controller_balloon_disappear_3_rwd);
											
//尺_1 尺_2 對話框 消失---------------------------------------------------------------------------------------------------------------------------------

					var controller_balloon_disappear_rwd=new ScrollMagic.Controller();
					var tween_balloon_disappear_rwd=TweenMax.to("#balloon_rwd_1",0.2,{opacity:0});
					var scene_balloon_disappear_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear_rwd",duration:100})
								.setTween(tween_balloon_disappear_rwd)
								.addTo(controller_balloon_disappear_rwd);

					var controller_ruler_2_disappear_rwd=new ScrollMagic.Controller();
					var tween_ruler_2_disappear_rwd=TweenMax.to("#ruler_rwd_2",0.2,{opacity:0});
					var scene_ruler_2_disappear_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear_rwd",duration:100})
								.setTween(tween_ruler_2_disappear_rwd)
								.addTo(controller_ruler_2_disappear_rwd);

					var controller_ruler_1_disappear_rwd=new ScrollMagic.Controller();
					var tween_ruler_1_disappear_rwd=TweenMax.to("#ruler_rwd_1",0.2,{opacity:0});
					var scene_ruler_1_disappear_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_1_disappear_rwd",duration:100})
								.setTween(tween_ruler_1_disappear_rwd)
								.addTo(controller_ruler_1_disappear_rwd);
//娃定住(娃掉下)-------------------------------------------------------------------------------------------------------------------------------------------
        			var controller_doll_pin_rwd = new ScrollMagic.Controller();

        			var scene_doll_pin_rwd = new ScrollMagic.Scene({triggerElement: "#trigger_balloon_1_disappear_rwd", duration: 1515})
        							.setPin("#doll_rwd")
									.addTo(controller_doll_pin_rwd);

//花瓣淡入--------------------------------------------------------------------------------------------------------------------------

					var controller_petal_3_rwd=new ScrollMagic.Controller();
    				var tween_petal_3_rwd=TweenMax.to("#petal_rwd_1,#petal_rwd_2,#petal_rwd_3,#petal_rwd_4,#petal_rwd_5,#petal_rwd_6,#petal_rwd_7,#petal_rwd_8,#petal_rwd_9,#petal_rwd_10,#petal_rwd_11,#petal_rwd_12,#petal_rwd_13,#petal_rwd_14,#petal_rwd_15",0.2,{opacity:1});
    				var scene_petal_3_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_balloon_3_disappear_rwd",duration:300})
    							.setTween(tween_petal_3_rwd)
    							.addTo(controller_petal_3_rwd);

//----------------------------------------------------
	//11 12尺_1出現 定住---------------------------------------------------------------------------------------------------------------------------------
					var controller_text_rwd=new ScrollMagic.Controller();
    				var tween_text_rwd=TweenMax.to("#textsol",0.2,{opacity:1});
    				var scene_text_rwd=new ScrollMagic.Scene({triggerElement:"#trigger_textsol_rwd",duration:300})
    							.setTween(tween_text_rwd)
								.addTo(controller_text_rwd);
//信件跳出---------------------------------------------------------------------------
var controller_letter_rwd = new ScrollMagic.Controller();

var scene_letter_rwd = new ScrollMagic.Scene({
	triggerElement: "#trigger_letter_rwd"
})
.setTween("#letterpaper_rwd", 0.5, {top: -100}) // trigger a TweenMax.to tween
.addTo(controller_letter_rwd);
//-----------------------------信件表單淡入----------------------------------------------
var controller_letter_text_rwd = new ScrollMagic.Controller();

var sceneletter_text_rwd = new ScrollMagic.Scene({
	triggerElement: "#letterpaper_rwd"
})
.setTween("#text_rwd", 1, {opacity: 1}) // trigger a TweenMax.to tween
.addTo(controller_letter_text_rwd);	


})		
