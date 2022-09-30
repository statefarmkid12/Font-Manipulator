function setup(){
    canvas = createCanvas(1000,925);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(1000,925);
}

function draw(){
    image(video, 0, 0, 1000, 925);
}