function preload(){

}
function setup(){
    console.log("check");
    video = createCapture(VIDEO);
    video.size(550, 500);
    //video.size(height, width);
    video.center()

    canvas = createCanvas(550, 550);
    canvas.position(700, 150);

    //createCanvas(height, width);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose' ,  gotPoses);
    // posenet.on('pose' ,  gotPoses()); Why was this giving an error just because of the barakcet after the function?;
}
function draw(){

}
function modelLoaded(){
    console.log('Posenet is initialized' );
    // why can't we just give the poses here  console.log('pose(s)' )
}
    function gotPoses(results){
        console.log("got Poses function is initialized/started");
        if(results.length > 0){
            //if(results[0].length > 0){
            // if(result.length > 0){
            console.log(results);
        }
    }

    //Quiz > why do we put results[0].length > we do so because an array's length always starts with 0 and results is an array so the first answer in 0 variable is the most accurate!!