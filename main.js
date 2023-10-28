function preload()
{
    
}

function setup()
{
    canvas = createCanvas(700, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    circle(56, 46, 70);

    circle(650, 46, 70);

    circle(56, 460, 70);

    circle(650, 460, 70);

    rect(43, 80, 25, 345);

    rect(90, 449, 527, 25);

    rect(89, 33, 527, 25);

    rect(638, 80, 25, 345);

}

function draw()
{
    image(video, 216, 140, 300, 230);
}

function take_snapshot()
{
    save('vihaan1.png');
}