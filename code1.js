gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDLynetteObjects1= [];
gdjs.New_32scene2Code.GDLynetteObjects2= [];
gdjs.New_32scene2Code.GDLynetteObjects3= [];
gdjs.New_32scene2Code.GDInferisObjects1= [];
gdjs.New_32scene2Code.GDInferisObjects2= [];
gdjs.New_32scene2Code.GDInferisObjects3= [];
gdjs.New_32scene2Code.GDScoreObjects1= [];
gdjs.New_32scene2Code.GDScoreObjects2= [];
gdjs.New_32scene2Code.GDScoreObjects3= [];
gdjs.New_32scene2Code.GDRedFloorObjects1= [];
gdjs.New_32scene2Code.GDRedFloorObjects2= [];
gdjs.New_32scene2Code.GDRedFloorObjects3= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects3= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects3= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects3= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects3= [];
gdjs.New_32scene2Code.GDNewObject5Objects1= [];
gdjs.New_32scene2Code.GDNewObject5Objects2= [];
gdjs.New_32scene2Code.GDNewObject5Objects3= [];
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];
gdjs.New_32scene2Code.GDNewObject6Objects3= [];
gdjs.New_32scene2Code.GDWallForRedFloorObjects1= [];
gdjs.New_32scene2Code.GDWallForRedFloorObjects2= [];
gdjs.New_32scene2Code.GDWallForRedFloorObjects3= [];
gdjs.New_32scene2Code.GDposionObjects1= [];
gdjs.New_32scene2Code.GDposionObjects2= [];
gdjs.New_32scene2Code.GDposionObjects3= [];
gdjs.New_32scene2Code.GDDoorObjects1= [];
gdjs.New_32scene2Code.GDDoorObjects2= [];
gdjs.New_32scene2Code.GDDoorObjects3= [];
gdjs.New_32scene2Code.GDNewObject7Objects1= [];
gdjs.New_32scene2Code.GDNewObject7Objects2= [];
gdjs.New_32scene2Code.GDNewObject7Objects3= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.conditionTrue_1 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_1 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition0IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8433068);
}
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-454.mp3", false, 30, 1);
}}

}


};gdjs.New_32scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDLynetteObjects1, gdjs.New_32scene2Code.GDLynetteObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDLynetteObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDLynetteObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDLynetteObjects2[k] = gdjs.New_32scene2Code.GDLynetteObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDLynetteObjects2.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDLynetteObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects2[i].setAnimationName("correr");
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDLynetteObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDLynetteObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene2Code.GDLynetteObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDLynetteObjects1[k] = gdjs.New_32scene2Code.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDLynetteObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDLynetteObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects1[i].setAnimationName("quieta");
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32scene2Code.GDLynetteObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDposionObjects1Objects = Hashtable.newFrom({"posion": gdjs.New_32scene2Code.GDposionObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32scene2Code.GDLynetteObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDInferisObjects1Objects = Hashtable.newFrom({"Inferis": gdjs.New_32scene2Code.GDInferisObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects = Hashtable.newFrom({"Lynette": gdjs.New_32scene2Code.GDLynetteObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.New_32scene2Code.GDDoorObjects1});gdjs.New_32scene2Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene2Code.GDDoorObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDDoorObjects1[k] = gdjs.New_32scene2Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDDoorObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.New_32scene2Code.eventsList3 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-43.mp3", true, 30, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects1[i].setScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDLynetteObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDLynetteObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDLynetteObjects1[k] = gdjs.New_32scene2Code.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDLynetteObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDLynetteObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects1[i].setAnimationName("ataque");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDLynetteObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDLynetteObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDLynetteObjects1[k] = gdjs.New_32scene2Code.GDLynetteObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDLynetteObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects1[i].flipX(false);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDLynetteObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLynetteObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32scene2Code.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDLynetteObjects1[0].getPointX("Center")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inferis"), gdjs.New_32scene2Code.GDInferisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDInferisObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDInferisObjects1[i].isCollidingWithPoint((( gdjs.New_32scene2Code.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDLynetteObjects1[0].getPointX("espadita")), (( gdjs.New_32scene2Code.GDLynetteObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDLynetteObjects1[0].getPointY("espadita"))) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDInferisObjects1[k] = gdjs.New_32scene2Code.GDInferisObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDInferisObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDInferisObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDInferisObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDInferisObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);
gdjs.copyArray(runtimeScene.getObjects("posion"), gdjs.New_32scene2Code.GDposionObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDposionObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDposionObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDposionObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDposionObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-30.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inferis"), gdjs.New_32scene2Code.GDInferisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDInferisObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDInferisObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDInferisObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDInferisObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(15);
}{gdjs.evtTools.sound.playSound(runtimeScene, "voice-changer-2021-06-06-15-27.mp3", false, 15, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.New_32scene2Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lynette"), gdjs.New_32scene2Code.GDLynetteObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLynetteObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDDoorObjects1[i].setAnimationName("Open");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDLynetteObjects1.length = 0;
gdjs.New_32scene2Code.GDLynetteObjects2.length = 0;
gdjs.New_32scene2Code.GDLynetteObjects3.length = 0;
gdjs.New_32scene2Code.GDInferisObjects1.length = 0;
gdjs.New_32scene2Code.GDInferisObjects2.length = 0;
gdjs.New_32scene2Code.GDInferisObjects3.length = 0;
gdjs.New_32scene2Code.GDScoreObjects1.length = 0;
gdjs.New_32scene2Code.GDScoreObjects2.length = 0;
gdjs.New_32scene2Code.GDScoreObjects3.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects1.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects2.length = 0;
gdjs.New_32scene2Code.GDRedFloorObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects3.length = 0;
gdjs.New_32scene2Code.GDWallForRedFloorObjects1.length = 0;
gdjs.New_32scene2Code.GDWallForRedFloorObjects2.length = 0;
gdjs.New_32scene2Code.GDWallForRedFloorObjects3.length = 0;
gdjs.New_32scene2Code.GDposionObjects1.length = 0;
gdjs.New_32scene2Code.GDposionObjects2.length = 0;
gdjs.New_32scene2Code.GDposionObjects3.length = 0;
gdjs.New_32scene2Code.GDDoorObjects1.length = 0;
gdjs.New_32scene2Code.GDDoorObjects2.length = 0;
gdjs.New_32scene2Code.GDDoorObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects3.length = 0;

gdjs.New_32scene2Code.eventsList3(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
