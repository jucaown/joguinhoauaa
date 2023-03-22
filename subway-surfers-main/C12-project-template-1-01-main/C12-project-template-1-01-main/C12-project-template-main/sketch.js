var path,boy, leftBoundary,rightBoundary,thrash;
var pathImg,boyImg;
var i;
//var thrash, thrashGroup;


function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png")
}

function setup(){
  createCanvas(1250,600);



  //crie um sprite de menino
  boy = createSprite(200,325);
  //adicione uma animação de corrida para ele
  boy.addAnimation("boyX", boyImg);
  boy.scale=0.8;
    
  //crie um limite à esquerda
  leftBoundary=createSprite(5,0,100,800);
  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false
  //crie um limite à direita
  rightBoundary=createSprite(1245,0,100,800);
  //defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  drawSprites();
}

//function Thrash()
//{
  //if(World.frameCount%100===0){
    //thrash=createSprite(400,200,20,20);
    //thrash.addAnimation("moving", thrashImage);
    //thrash.x=Math.round(random(100,550));
    //atualize o código abaixo para aumentar a velocidade do monsterGroup (grupo de monstros) em 10
  //  thrash.velocityX = -(10+ score);
//    trash.setLifetime=70;
    //
    //thrashGroup.add(monster);
  //}
//}
