text_input_value = "";
Status = "";
Objects = [];
sound = "";
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function gotResults(error,Result){
    if(error){
        console.error(error);
    }
    else{
        console.log(Result);
        Objects = Result; 
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    text_input_value = document.getElementById("object").value;
    console.log(text_input_value);
}

function draw(){
    image(video, 0, 0, 400, 300);
    if(Status != ""){
        objectDetector.detect(video, gotResults);
        for(i=0; i<Objects.length; i++){
            if(text_input_value == Objects[i].label){
                document.getElementById("Object_status").innerHTML = "Object Found";
            }
        }
    }
    
}



function modelloaded(){
    console.log("Model Loaded!");
    Status = true;
}

