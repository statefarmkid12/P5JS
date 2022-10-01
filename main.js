function preload(){
    face = loadImages("https://www.mrporter.com/cms/ycm/resource/blob/1252204/68e7f03297f41cb3ce41f15ec478f70f/image-data.jpg")
}

function setup(){
   canvas = createCanvas(600, 600);
   canvas.center();
}

function draw(){
    image(face, 20, 40, 100, 115);

    circle(30, 30, 20);
    fill("green");

    circle(120, 30, 20);
    fill("green");

    circle(30, 120, 20);
    fill("green");

    circle(120, 120, 20);
    fill("green");
}