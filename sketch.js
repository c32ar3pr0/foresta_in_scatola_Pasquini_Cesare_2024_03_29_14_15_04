function buildbox(x,y,z,raggio){
  let lista_a=[0.5,0.5,-0.5,-0.5]
  let lista_b=[0.5,-0.5,0.5,-0.5]
  diffuse(183,225,239)
  align(CENTER)
  for (let i=0;i!=4;i++){
    capsule(x*lista_a[i], y/2, z*lista_b[i], raggio,y)
  }
  for (let i=0;i!=4;i++){
    capsule(0, y/2+y*lista_a[i], z*lista_b[i], raggio,x).setRotationZ(90)
  }
  for (let i=0;i!=4;i++){
    capsule(x*lista_a[i], y/2+y*lista_b[i], 0, raggio,z).setRotationX(90)
  }
  
  align(CENTER)
  diffuse(42,161,24)
  box(0,0,0,x,0.1,z)
  diffuse(178,225,233)
  opacity(0.1)
  box(x/2,y/2,0,  0.1,y,z)
  box(0,y/2,z/2  ,x,y,0.1)
  box(-x/2,y/2,0,  0.1,y,z)
  box(0,y/2,-z/2  ,x,y,0.1)
  
  box(0,y,0,  x,0.1,z)
  opacity(1)
}

function albero(tree_height,leaves_size){
  let albero=beginGroup()
  let trunk_height=tree_height-leaves_size
  align(TOP)
  diffuse(159,56,18)
  cylinder(0,0,0,tree_height/8,trunk_height)
  align(CENTER)
    diffuse(random(30,40),random(180,190),11)
  sphere(0,tree_height-leaves_size,0,leaves_size)
  
  for (let i=random(1,4);i>0;i--){
  let x;let y;let z
    do{
      x=random(-leaves_size,leaves_size)
      y=random(-leaves_size,leaves_size)
      z=random(-leaves_size,leaves_size)
    }while(sqrt((x*x)+(y*y)+(z*z))>leaves_size)
    y=y+trunk_height
    diffuse(random(30,40),random(180,190),11)
    sphere(x,y,z,random(leaves_size*0.2,leaves_size*0.5))
  }
  
  endGroup()
  return albero
}

function nuvola(num_parti,dimens_parti,dimens_nuvola) {
  let size=0.4*dimens_nuvola
  let nuvola=beginGroup()
  for (let i=0;i<num_parti;i++){
    let colore=random(175,250)
    diffuse(colore,colore,colore)
    sphere(size*random(-1,1),size*random(-0.6,0),size*random(-1,1),dimens_parti*random(0.8,1.2))
  }
  endGroup()
  return nuvola
}


function setup() {
  createCanvas3D(windowWidth, windowHeight);
  getOrbit().autoRotate=true
  background3D("lightblue");
  
  let x=10;let y=10;let z=10

  setCamera(0,13,15,  0,3,0)
  
  buildbox(x,y,z,0.2)
  align(TOP)
  for (let i=50;i>0;i--){
    let unalbero=albero(random(2.8,3.8),random(1,1.2))
    unalbero.setPosition(random(-x/2+1.3,x/2-1.3),0,random(-z/2+1.3,z/2-1.3))
  }
  
  for (let i=40;i>0;i--) {
    let nuvola1=nuvola(8,0.4,2)
    nuvola1.setPosition(random(-x/2+1,x/2-1), y-1, random(-z/2+1,z/2-1))
  }
  
}


function draw() {}

function windowResized (){
  resizeCanvas3D(windowWidth,windowHeight)
}