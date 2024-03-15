// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 40, color1 = "#84C1FF";
let x2 = canvas.width, y2 = 0, dx2 = -5, dy2 = 5, r2 = 20, color2 = "#96FED1";
let x3 = 0 ,y3 = canvas.height, dx3 = -5, dy3 = 5, r3 = 10, color3 = "#B9B9FF";

// 畫圓形
function drawBall(x1, y1, r1, color1)
{
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}
function drawBall(x2, y2, r2, color2)
{
    ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}
function drawBall(x3, y3, r3, color3)
{
    ctx.beginPath();
    ctx.arc(x3, y3, r3, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color3;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x1 = x1 + dx1;
    y1 = y1 + dy1; 
    x2 = x2 + dx2;
    y2 = y2 + dy2;
    x3 = x3 + dx3;
    y3 = y3 + dy3;
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
    if(x1<0||x1>canvas.width)
      dx1=-dx1;
    if(y1<0||y1>canvas.height)
      dy1=-dy1;
    if(x2<0||x2>canvas.width)
      dx2=-dx2;
    if(y2<0||y2>canvas.height)
      dy2=-dy2;
    if(x3<0||x3>canvas.width)
      dx3=-dx3;
    if(y3<0||y3>canvas.height)
      dy3=-dy3;
    if((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) < (r1+r2)*(r1+r2))
      {
        [dx1,dy1,dx2,dy2]=[dx2*0.25,dy2*0.25,dx1*4,dy1*4]
      }
    if((x3-x2)*(x3-x2) + (y3-y2)*(y3-y2) < (r3+r2)*(r3+r2))
    {
      [dx3,dy3,dx2,dy2]=[dx2*4,dy2*4,dx3*0.25,dy3*0.25]
    }
    if((x1-x3)*(x1-x3) + (y1-y3)*(y1-y3) < (r1+r3)*(r1+r3))
    {
      [dx1,dy1,dx3,dy3]=[dx3*0.0625,dy3*0.0625,dx1*16,dy1*16]
    }
    drawBall(x1, y1, r1, color1);
    drawBall(x2, y2, r2, color2);
    drawBall(x3, y3, r3, color3);
    requestAnimationFrame(draw);
}
draw();