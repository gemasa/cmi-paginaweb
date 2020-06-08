function Movie_OnMove(X,Y,MouseButton){
StackTrace="On Move";
//No he añadido el hotspot para que el objeto al soltar el ratón vuelva a su sitio inicial( zona de pinceles). 

if (raton_pulsado1){
raton_pulsado2 = false;
raton_pulsado3 = false;
raton_pulsado4 = false;
raton_pulsado5 = false;
estrella.X=X;
estrella.Y=Y;
estrella.Visible=true;
}

if (raton_pulsado2){
raton_pulsado1 = false;
raton_pulsado3 = false;
raton_pulsado4 = false;
raton_pulsado5 = false;
goma.X=X;
goma.Y=Y;
goma.Visible=true;
}

if (raton_pulsado3){
raton_pulsado2 = false;
raton_pulsado1 = false;
raton_pulsado4 = false;
raton_pulsado5 = false;
corazon.X=X;
corazon.Y=Y;
corazon.Visible=true;
}

if (raton_pulsado4){
raton_pulsado2 = false;
raton_pulsado3 = false;
raton_pulsado1 = false;
raton_pulsado5 = false;
hoja.X=X;
hoja.Y=Y;
hoja.Visible=true;
}

if (raton_pulsado5){
raton_pulsado2 = false;
raton_pulsado3 = false;
raton_pulsado4 = false;
raton_pulsado1 = false;
tarta.X=X;
tarta.Y=Y;
tarta.Visible=true;
}


ItemDuplicate("estrella","estrella2" + numero);
numero++;

estrella.Visible=false;

ItemDuplicate("goma","goma2" + numero1);
numero1++;

goma.Visible=false;

ItemDuplicate("corazon","corazon2" + numero2);
numero2++;

goma.Visible=false;

ItemDuplicate("hoja","hoja2" + numero3);
numero3++;

hoja.Visible=false;

ItemDuplicate("tarta","tarta2" + numero4);
numero4++;

tarta.Visible=false;
}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.On Click";
raton_pulsado1=true;
}

function HotSpot1_OnRelease(){
StackTrace="HotSpot1.On Release";
raton_pulsado1 = false;
}

function HotSpot2_OnClick(){
StackTrace="HotSpot2.On Click";
raton_pulsado2=true;
}

function HotSpot2_OnRelease(){
StackTrace="HotSpot2.On Release";
raton_pulsado2=false;
}

function HotSpot3_OnClick(){
StackTrace="HotSpot3.On Click";
raton_pulsado3=true;
}

function HotSpot3_OnRelease(){
StackTrace="HotSpot3.On Release";
raton_pulsado3=false;
}

function HotSpot4_OnClick(){
StackTrace="HotSpot4.On Click";
raton_pulsado4=true;
}

function HotSpot4_OnRelease(){
StackTrace="HotSpot4.On Release";
raton_pulsado4=false;
}

function HotSpot5_OnClick(){
StackTrace="HotSpot5.On Click";
raton_pulsado5=true;
}

function HotSpot5_OnRelease(){
StackTrace="HotSpot5.On Release";
raton_pulsado5=false;
}

function HotSpot6_OnClick(){
StackTrace="HotSpot6.On Click";
GetTopUrl("Pagwebpartemultimedia.html");
}


StackTrace="General";
var variable=0;
var numero =1;
var numero1 =1;
var numero2 =1;
var numero3 =1;
var numero4 = 1;
var raton_pulsado1 = false;
var raton_pulsado2 = false;
var raton_pulsado3 = false;
var raton_pulsado4 = false;
var raton_pulsado5 = false;