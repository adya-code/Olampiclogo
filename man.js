canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function draw() {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.arc(200, 200, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.arc(380, 200, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.arc(560, 200, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 5;
  ctx.arc(310, 300, 80, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.arc(450, 300, 80, 0, 2 * Math.PI);
  ctx.stroke();
}

function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
