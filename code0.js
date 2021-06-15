gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDLynetteObjects1= [];
gdjs.New_32sceneCode.GDLynetteObjects2= [];
gdjs.New_32sceneCode.GDLynetteObjects3= [];
gdjs.New_32sceneCode.GDInferisObjects1= [];
gdjs.New_32sceneCode.GDInferisObjects2= [];
gdjs.New_32sceneCode.GDInferisObjects3= [];
gdjs.New_32sceneCode.GDScoreObjects1= [];
gdjs.New_32sceneCode.GDScoreObjects2= [];
gdjs.New_32sceneCode.GDScoreObjects3= [];
gdjs.New_32sceneCode.GDRedFloorObjects1= [];
gdjs.New_32sceneCode.GDRedFloorObjects2= [];
gdjs.New_32sceneCode.GDRedFloorObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects3= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects3= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects3= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects3= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects1= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects2= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects3= [];
gdjs.New_32sceneCode.GDposionObjects1= [];
gdjs.New_32sceneCode.GDposionObjects2= [];
gdjs.New_32sceneCode.GDposionObjects3= [];
gdjs.New_32sceneCode.GDDoorObjects1= [];
gdjs.New_32sceneCode.GDDoorObjects2= [];
gdjs.New_32sceneCode.GDDoorObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8395676);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-454.mp3", false, 30, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDLynetteObjects1, gdjs.New_32sceneCode.GDLynetteObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDLynetteObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDLynetteObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDLynetteObjects2[k] = gdjs.New_32sceneCode.GDLynetteObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDLynetteObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDLynetteObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects2[i].setAnimationName("correr");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDLynetteObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDLynetteObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDLynetteObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDLynetteObjects1[k] = gdjs.New_32sceneCode.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDLynetteObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDLynetteObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects1[i].setAnimationName("quieta");
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32sceneCode.GDLynetteObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDposionObjects1Objects = Hashtable.newFrom({"posion": gdjs.New_32sceneCode.GDposionObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32sceneCode.GDLynetteObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDInferisObjects1Objects = Hashtable.newFrom({"Inferis": gdjs.New_32sceneCode.GDInferisObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32sceneCode.GDLynetteObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.New_32sceneCode.GDDoorObjects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDDoorObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDDoorObjects1[k] = gdjs.New_32sceneCode.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDDoorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-43.mp3", true, 30, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDLynetteObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDLynetteObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDLynetteObjects1[k] = gdjs.New_32sceneCode.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDLynetteObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDLynetteObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects1[i].setAnimationName("ataque");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDLynetteObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDLynetteObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDLynetteObjects1[k] = gdjs.New_32sceneCode.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDLynetteObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects1[i].flipX(false);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLynetteObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDLynetteObjects1[0].getPointX("Center")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inferis"), gdjs.New_32sceneCode.GDInferisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDInferisObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDInferisObjects1[i].isCollidingWithPoint((( gdjs.New_32sceneCode.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDLynetteObjects1[0].getPointX("espadita")), (( gdjs.New_32sceneCode.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDLynetteObjects1[0].getPointY("espadita"))) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDInferisObjects1[k] = gdjs.New_32sceneCode.GDInferisObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDInferisObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDInferisObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDInferisObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDInferisObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);
gdjs.copyArray(runtimeScene.getObjects("posion"), gdjs.New_32sceneCode.GDposionObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDposionObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDposionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDposionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDposionObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-30.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inferis"), gdjs.New_32sceneCode.GDInferisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDInferisObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDInferisObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDInferisObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDInferisObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(15);
}{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-27.mp3", false, 15, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.New_32sceneCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32sceneCode.GDLynetteObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLynetteObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDDoorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDDoorObjects1[i].setAnimationName("Open");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDLynetteObjects1.length = 0;
gdjs.New_32sceneCode.GDLynetteObjects2.length = 0;
gdjs.New_32sceneCode.GDLynetteObjects3.length = 0;
gdjs.New_32sceneCode.GDInferisObjects1.length = 0;
gdjs.New_32sceneCode.GDInferisObjects2.length = 0;
gdjs.New_32sceneCode.GDInferisObjects3.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects3.length = 0;
gdjs.New_32sceneCode.GDRedFloorObjects1.length = 0;
gdjs.New_32sceneCode.GDRedFloorObjects2.length = 0;
gdjs.New_32sceneCode.GDRedFloorObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects3.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects1.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects2.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects3.length = 0;
gdjs.New_32sceneCode.GDposionObjects1.length = 0;
gdjs.New_32sceneCode.GDposionObjects2.length = 0;
gdjs.New_32sceneCode.GDposionObjects3.length = 0;
gdjs.New_32sceneCode.GDDoorObjects1.length = 0;
gdjs.New_32sceneCode.GDDoorObjects2.length = 0;
gdjs.New_32sceneCode.GDDoorObjects3.length = 0;

gdjs.New_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
