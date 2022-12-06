let microphone
function setup() {
  createCanvas(windowWidth,windowHeight);
  microphone = new p5.AudioIn()
  microphone.start()//เริ่มใช้
}

function draw() {
  
  micLevel = microphone.getLevel()*1000//ขอเดซิเบลว่าดังแค่ไหน
  
  background(0);
  noFill()
  stroke(255,0,100)
  circle(random(0,windowWidth),micLevel,micLevel)
}