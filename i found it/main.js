objects=[];
status = "";
video = "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas =  createCanvas(480, 380);
	canvas.center();

}
function draw() {
    image(video, 0, 0, 480, 380);
    if(status !="") {
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++ ) {
            document.getElementById("status").innerHTML = "object dect";
            document.getElementById("number_of_objects").innerHTML = objects.length;

            Fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects[i].label = "item") {
                document.getElementById("status").innerHTML = "object fond";

            }
        }
    }
}
function start() {

    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status : obdj dect";
}
function modelLoaded() {
    console.log("mole");
    status = "true";
    video.loop();
    video.speed(1);
    video.volume(100);

}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}