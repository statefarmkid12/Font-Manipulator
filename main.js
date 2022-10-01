function setup(){
    canvas = createCanvas(800,620);
    canvas.position(1000,300);
    video = createCapture(VIDEO);
    video.size(1000,925);

    poseNet = ml5.poseNet(video, modelActivated);
    poseNet.on("pose", gotPoses);
};

function modelActivated(){
    console.log("PoseNet has been launched")
}

rWrist = 0
lWrist = 0
Nose_x = 0
Nose_y = 0

function gotPoses(results){
    if(results > 0){
        console.log(result);
        lWrist = results[0].pose.leftWrist.x;
        rWrist = results[0].pose.rightWrist.x;
        Nose_x = results[0].pose.nose.x;
        Nose_y = results[0].pose.nose.y;
    }
}

function draw(){
    
};