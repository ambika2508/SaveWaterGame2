

// function start(){
//   //background(bgImg)

//   title = createElement("h1")
//     title.html("Save Water Game")
//     title.position(350,20)

//   name1 = createInput("Enter Your Name")
//      name1.position(350,200)
//     var n = name1.value()

//   button = createButton("Play")


//   button2 = createButton("Next")
//     button2.position(400,250)
//     button2.show()

//   //intro = createElement("h2")
//   rules = createElement("h2")
    
//  button2.mousePressed(()=>{
//       button2.hide()
//       name1.hide()
//       title.hide()
//       textSize(24)
//       text("Hello!"+ n, 340, 50)
//      button.position(250,300)
//      intro.position(200,200)
//      intro.html("This is Splash! He is lost! Take him to his family of water bodies, by making correct decisions.Beware! A bad decision can cost you!")
//   })
//   button.mousePressed(()=>{
//       button.hide()
//       intro.hide()
//   })
    
// }
// function mousePressed(){
//     button.hide()
//       name1.hide()
//       title.hide()
//       textSize(24)
//       text("Hello!"+ n, 340, 50) 
// }
function info(){
  fill("red")
  textSize(20)
  text("This is Splash! He is lost! Take him to his family of water bodies, by making correct decisions.Beware! A bad decision can cost you!", 10,450)
  okay.visible = true;
  textSize(14)
  text("Okay",390,480)
  if(mousePressedOver(okay)){
   flag = 2;
   
  }


}

function play(){
  
  
  if (keyDown(LEFT_ARROW)){
    drop2.x -= 5;
  }
  if (keyDown(RIGHT_ARROW)){
    drop2.x += 5;
  }
  if (keyDown(UP_ARROW)){
    drop2.y -= 5;
  }
  if (keyDown(DOWN_ARROW)){
    drop2.y += 5;
  }
}
function end(){

}