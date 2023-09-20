function preload()
{
    song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if(results.length 0)
}
{
    score.RightWrist = results(0).pose.keypoints(10).score
    score.LeftWrist = results(0).pose.keypoints(9).score;
    console.log("Velocidad = " + scoreRightWrist + "Volumen = " + scoreLeftWrist);

    rightWristX = results(0).pose.rightWrist.x;
    rightWristY = results(0).pose.rightWrist.y;
    console.log("Coordenada X de muñeca derecha = " + rightWristX + "Coordenada
    de muñeca derecha = " + rightWristY)

    leftWristX = results(0).pose.leftWrist.x;
    leftWristY = results(0).pose.leftWrist.y;
    console.log("Coordenada X de muñeca izquirda = " + leftWristX + "Coordenada
    de muñeca izquierda = " + leftWristY)


}

function draw() {
    image(vide, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist 0.2)
{

}
}

function play()
{
    song.play();
    song.setVolume(1);
    //recurso variableName.setVolume(0.1) - Muy bajo
    //recurso variableName.setVolume(0.3) - Poco bajo
    //recurso variableName.setVolume(0.5) - Medio
    //recurso variableName.setVolume(0.7) - Poco Alto
    //recurso variableName.setVolume(0.9) - Alto
    //recurso variableName.setVolume(1) - Volumen completo
    song.rate(1);
    //variableName.rate(0.5) - Muy lento 
    //variableName.rate(1) - Normal 
    //variableName.rate(1.5) - Un poco rápido 
    //variableName.rate(2) - El doble de rápido 
    //variableName.rate(2.5) - Muy rápido
}
