function Movie_OnStart(){
StackTrace="On Start";
VideoSetVolume("videopaint",0);
SoundPlay("musica de fondo",true);
}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function Frame__2_0(ID){
StackTrace="Scene 3 Frame 0";
GotoSceneNameAndPlay("3",0);


}

function Frame__3_0(ID){
StackTrace="Scene 4 Frame 0";
Pause();

}

function Frame__4_0(ID){
StackTrace="Scene 5 Frame 0";
VideoPlay("video");


}

function Frame__4_1(ID){
StackTrace="Scene 5 Frame 1";
Pause();


}

function Frame__5_0(ID){
StackTrace="Scene 6 Frame 0";
VideoPlay("videopaint");
VideoSetVolume("videopaint",0);

}

function Frame__6_0(ID){
StackTrace="Scene 7 Frame 0";
Pause();

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.On Click";
TimelineGotoAndPlay("menu",0);
TimelineSetSpeed("menu",2);
}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.On Release";
TimelineGotoAndPlay("menu",30);
TimelineSetSpeed("menu",-2);

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function boton4_OnClick(){
StackTrace="boton 4.On Click";
GotoSceneNameAndPlay("4",0);
ToggleButtonToggle("conejo");
}

function Buton3_OnClick(){
StackTrace="Buton3.On Click";
GotoSceneNameAndPlay("3",0);

}

function Buton2_OnClick(){
StackTrace="Buton2.On Click";
GotoSceneNameAndPlay("2",0);
ToggleButtonToggle("conejo");
}

function HotSpot2_OnClick(){
StackTrace="HotSpot2.On Click";
GotoSceneName("5");

}

function boton1_OnClick(){
StackTrace="boton 1.On Click";
GotoSceneName("6 Práctica 3");

}

function HotSpot10_OnClick(){
StackTrace="HotSpot10.On Click";
GotoSceneName("11");

}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene1",0);
VideoPause("video");

}

function botonimposible_OnOver(){
StackTrace="boton imposible.On Over";
TimelinePlay("topo");

}

function botonimposible_OnOut(){
StackTrace="boton imposible.On Out";
TimelinePause("topo");

}

function HotSpot6_OnClick(){
StackTrace="HotSpot6.On Click";
GotoSceneName("8 madriguera");

}

function HotSpot11_OnClick(){
StackTrace="HotSpot11.On Click";
GetTopUrl("practica2bienhecha.html");

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.On Click";


}

function HotSpot1_OnOver(){
StackTrace="HotSpot1.On Over";
TimelinePlay("golondrina");
SoundPlay("golondrina",true);
}

function HotSpot1_OnOut(){
StackTrace="HotSpot1.On Out";
TimelinePause("golondrina");
SoundPause("golondrina");
}

function HotSpot12_OnClick(){
StackTrace="HotSpot12.On Click";
GetTopUrl("https://www.youtube.com/user/CyPmascota");
}

function HotSpot14_OnClick(){
StackTrace="HotSpot14.On Click";
GetTopUrl("https://www.youtube.com/viviendoconunconejo?sub_confirmation=1");
}

function HotSpot13_OnClick(){
StackTrace="HotSpot13.On Click";
GetTopUrl("https://www.youtube.com/user/pequenosorejones");
}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene1",0);
VideoPause("video");

}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene1",0);
VideoPause("video");

}

function visor_OnClick(Index,Image){
StackTrace="visor.On Click";


}

function botonderecha_OnClick(){
StackTrace="boton derecha.On Click";
ImageViewerNext("visor");

}

function botonizquierda_OnClick(){
StackTrace="boton izquierda.On Click";
ImageViewerPrevious("visor");

}

function botonpincelparajuegodepintar_OnClick(){
StackTrace="boton pincel para juego de pintar.On Click";

GetTopUrl("juego.html");
}

function HotSpot8_OnClick(){
StackTrace="HotSpot8.On Click";
GotoSceneName("10");

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function iralsonido_OnClick(){
StackTrace="ir al sonido.On Click";
GotoSceneNameAndPlay("7 comandos",0);
SoundPlay("click",false);
}

function sonidodelvideo_OnClick(){
StackTrace="sonido del video .On Click";
VideoSetVolume("videopaint",100);
SoundPlay("click",false);

}

function sonidodelvideo_OnRelease(){
StackTrace="sonido del video .On Release";
SoundPlay("click",false);
VideoSetVolume("videopaint",0);
}

function pausarvideo_OnClick(){
StackTrace="pausar video .On Click";
VideoPause("videopaint");
SoundPlay("click",false);
}

function pausarvideo_OnRelease(){
StackTrace="pausar video .On Release";
SoundPlay("click",false);
VideoResume("videopaint");
}

function iralvideo_OnClick(){
StackTrace="ir al video.On Click";
GotoSceneName("6 Práctica 3");
SoundPlay("click",false);
}

function músicareproduciendo_OnClick(){
StackTrace="música reproduciendo.On Click";
SoundPause("musica de fondo");
SoundPlay("click",false);

}

function músicareproduciendo_OnRelease(){
StackTrace="música reproduciendo.On Release";
SoundResume("musica de fondo");
SoundPlay("click",false);
}

function HotSpot7_OnClick(){
StackTrace="HotSpot7.On Click";
GotoSceneName("9 cocina");

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

function Button1_OnClick(){
StackTrace="Button1.On Click";
SceneFirst();

}

