let x;   //criando variável X
let y;   //criando variável Y

function setup() {
  createCanvas(400, 400);
  x = random(400);   //sorteando número até 400
  x = int(x);    //transformando p/ número inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background('rgb(0,0,0)');    //fundo da tela azul
  //circle(x,y,10); //circulo com coordenadas aletorias
  //e diametro 10
    x = x + random(-2,2);
    y = y + random(-2,2);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
    let distanciaX;    //cateto
    let distanciaY; //cateto
    let distancia;  //hipotenusa
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  circle(mouseX,mouseY,distancia);  //circulo com coordenadas
  //e diametro 10
   
   if (distancia < 3) {
    text("Encontrei!", 200, 200);
    fill("black")
    noLoop();
   }    
     if(distancia > 150){
     fill("blue")
     circle(mouseX, mouseY, distancia);
   }else if (distancia > 100){
     fill("purple");
     circle(mouseX, mouseY, distancia);
   }else if (distancia > 75){
     fill("orange");
     circle(mouseX, mouseY, distancia);
   }else if(distancia > 15){
     fill("red");
     circle(mouseX, mouseY, distancia);
   }
}