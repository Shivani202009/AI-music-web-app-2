song1=""
song2=""
function preload() {
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}
function setup() {

    canvas= createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function draw() {
    image(video,0,0,300,300)
}
function modelloaded() {
    console.log("modelloaded")
}
