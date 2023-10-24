function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }
  
  function drawFace(ctx, radius) {
    var gradout = ctx.createRadialGradient(0, 0, radius+20, 0, 0, 2 * Math.PI);
    gradout.addColorStop(0, 'blue');
    gradout.addColorStop(1, 'red');
    var gradin = ctx.createRadialGradient(0, 0, radius+20, 0, 0, 2 * Math.PI);
    gradin.addColorStop(0, 'black');
    gradin.addColorStop(1, 'white');
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = gradin;
    ctx.fill();
  
    // Listo
    // Draw the edge circle with gradient
    // TODO: (Optional) add a gradient circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = gradout;
    ctx.stroke();
    // Listo
    // Center circle
    // TODO: make the central black circle
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  }
  
  function drawNumbers(ctx, radius) {
    // Listo
    // TODO: Make sure you show all the numbers
    var ang;
    var num = 1;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    while(num != 13){
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
      num++;
    }
  
  }
  
  function drawTime(ctx, radius) {
    // TODO: Calculate the angles of every hand depending on the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour % 12;
    var hourangle = ((hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)));
    var minangle = (minute*Math.PI/30) + (second*Math.PI/(30*60));
    var secangle = second*Math.PI/30;
    var objetivo = document.getElementById('texto_nav1');
    objetivo.innerHTML = "Hour: " + hourangle*(180/Math.PI) + "- Minutes: " + minangle*(180/Math.PI) + "- Seconds: " + secangle*(180/Math.PI);
    //hour
    drawHand(ctx, hourangle, radius * 0.5, radius * 0.07);
    //minute
    drawHand(ctx, minangle, radius * 0.8, radius * 0.05);
    // second
    drawHand(ctx, secangle, radius * 0.9, radius * 0.02);
    
  }
  
  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }