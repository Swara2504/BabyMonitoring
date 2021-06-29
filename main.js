alarm="";
status="";
person=[];
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload()
{
    alarm= loadSound('chicken_wing.mp3');
}
function draw()
{
    alarm.play();
    image(video,0,0,380,380);
    if(status!="")
    {
        objectDetector.detect(video,gotResult); 

        for(i=0; i<peron.lable; i++)
        {
            document.getElementById("status").innerHTML= "status: Baby Detected ";
            alarm.stop();
        }
    }
    else
    {
        document.getElementById("status").innerHTML= "status: Baby not Detected ";
            alarm.play();
    }
}
function modelLoaded()
{
    console.log("Model Loaded");
    status= true;
}
function gotResult(error,results)
{
    if(error)
    {
        console.log("error");
    }
    console.log("results");
    objects=results;
}