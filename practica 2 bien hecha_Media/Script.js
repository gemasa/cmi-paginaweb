function Movie_OnStart(){
StackTrace="On Start";
var y = dado(0,600);
var x = dado(0,400);
var x1 = dado(0,400);
var y1 = dado(0,600);
var y2 = dado(0,600);
var x2= dado(0,400);
var x3 = dado(0,400);
var y3 = dado(0,600);

uno.X=x;
uno.Y=y;
area1.X=x;
area1.Y=y;
primero.X=x;
primero.Y=y;

dos.X=x1;
dos.Y=y1;
area2.X=x1;
area2.Y=y1;
segundo.X=x1;
segundo.Y=y1;

tres.X=x2;
tres.Y=y2;
area3.X=x2;
area3.Y=y2;
tercero.X=x2;
tercero.Y=y2;

cuatro.X=x3;
cuatro.Y=y3;
area4.X=x3;
area4.Y=y3;
cuarto.X=x3;
cuarto.Y=y3;
}

function Movie_OnMove(X,Y,MouseButton){
StackTrace="On Move";
if (raton_pulsado1){
raton_pulsado2 = false;
raton_pulsado3 = false;
raton_pulsado4 = false;
uno.X=X;
uno.Y=Y;
primero.X=X;
primero.Y=Y;
area1.X=X;
area1.Y=Y;
}

if (raton_pulsado2){
raton_pulsado1 = false;
raton_pulsado3 = false;
raton_pulsado4 = false;	
dos.X=X;
dos.Y=Y;
segundo.X=X;
segundo.Y=Y;
area2.X=X;
area2.Y=Y;
}

if (raton_pulsado3 ){
raton_pulsado2 = false;
raton_pulsado1 = false;
raton_pulsado4 = false;
tres.X=X;
tres.Y=Y;
tercero.X=X;
tercero.Y=Y;
area3.X=X;
area3.Y=Y;
}

if (raton_pulsado4 ){
raton_pulsado2 = false;
raton_pulsado3 = false;
raton_pulsado1 = false;	
cuatro.X=X;
cuatro.Y=Y;
cuarto.X=X;
cuarto.Y=Y;
area4.X=X;
area4.Y=Y;
}

}

function Movie_OnRelease(X,Y,MouseButton){
StackTrace="On Release";


}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.On Click";
raton_pulsado1 = true;
}

function HotSpot1_OnRelease(){
StackTrace="HotSpot1.On Release";
raton_pulsado1 = false;


if(collidePointBox(primero, forma1) == true){
alert("Colisionado");
}else 
{
alert("No colisionado");
}
if ((collidePointBox(area1, forma1)) == true && (collidePointBox(area2, forma2))==true && (collidePointBox(area3, forma3))==true && (collidePointBox(area4, forma4)==true)){
GotoSceneName("Scene2");

}
}

function HotSpot2_OnClick(){
StackTrace="HotSpot2.On Click";
raton_pulsado2 = true;
}

function HotSpot2_OnRelease(){
StackTrace="HotSpot2.On Release";
raton_pulsado2 = false;


if(collidePointBox(segundo, forma2)==true){
alert("Colisionado");
}else 
{
alert("No colisionado");
}

if ((collidePointBox(area1, forma1)) == true && (collidePointBox(area2, forma2))==true && (collidePointBox(area3, forma3))==true && (collidePointBox(area4, forma4)==true)){
GotoSceneName("Scene2");

}
}

function HotSpot3_OnClick(){
StackTrace="HotSpot3.On Click";
raton_pulsado3 = true;
}

function HotSpot3_OnRelease(){
StackTrace="HotSpot3.On Release";
raton_pulsado3 = false;


if(collidePointBox(tercero, forma3)==true){
alert("Colisionado");
}else 
{
alert("No colisionado");
}
if ((collidePointBox(area1, forma1)) == true && (collidePointBox(area2, forma2))==true && (collidePointBox(area3, forma3))==true && (collidePointBox(area4, forma4)==true)){
GotoSceneName("Scene2");

}
}

function HotSpot4_OnClick(){
StackTrace="HotSpot4.On Click";
raton_pulsado4 = true;
}

function HotSpot4_OnRelease(){
StackTrace="HotSpot4.On Release";
raton_pulsado4 = false;


if(collidePointBox(cuarto, forma4)==true){
alert("Colisionado");
}else 
{
alert("No colisionado");
}

if ((collidePointBox(area1, forma1)) == true && (collidePointBox(area2, forma2))==true && (collidePointBox(area3, forma3))==true && (collidePointBox(area4, forma4)==true)){
GotoSceneName("Scene2");

}
}

function HotSpot5_OnClick(){
StackTrace="HotSpot5.On Click";
GetTopUrl("Pagwebpartemultimedia.html");
}

function dado(min, max) {
StackTrace="General";

	return Math.round(Math.random() * (max - min)) + min;
}


function collidePointBox(punto, area) {
	// variables del primer objeto
	var X1 = punto.X;
	var Y1 = punto.Y;
	// variables del segundo objeto
	var X2 = area.X;
	var Y2 = area.Y;
	// ancho y alto del segundo objeto
	var X2Max = X2 + area.Width;
	var Y2Max = Y2 + area.Height;
	// comparación horizontal
	var condX = (X1 >= X2) && (X1 <= X2Max);
	// comparación vertical
	var condY = (Y1 >= Y2) && (Y1 <= Y2Max);
	
	// si se cumplen ambas condiciones, está dentro
	if (condX && condY)
		return true;
	return false;
}


var raton_pulsado1 = false;
var raton_pulsado2 = false;
var raton_pulsado3 = false;
var raton_pulsado4 = false;