$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(1, 5, 255)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 500, 20, 290);
createPlatform(300, 620, 70, 20, "red");
createBadPlatform(650, 570, 40, 600, "gray");
createPlatform(000, 720, 1400, 100);
createPlatform(850, 460, 60, 20);
createPlatform(680, 340, 60, 20);
createPlatform(950, 250, 60, 20);
createPlatform(1200, 000, 0, 250);
createPlatform(1200, 400, 60, 400);
createPlatform(1300, 300, 0, 20);
createPlatform(520, 210, 60, 0);
createPlatform(1100, 620, 60, 20,"red");
createPlatform(980, 550, 60, 20);
createPlatform(720, 590, 60, 0);
createBadPlatform(250, 400, 60, 20,"gray");
createBadPlatform(150, 300, 60, 20,"gray");
createBadPlatform(300, 200, 60, 20,"gray");
createBadPlatform(200, 700, 60, 0,"gray");
createPlatform(980, 550, 60, 20);
createPlatform(400, 400, 60, 0);
    // TODO 3 - Create Collectables
createCollectable("poo", 600, 400);
createCollectable("poo", 315, 170, 0.5, 0.3);
createCollectable("poo", 420, 100);
createCollectable("poo", 200, 650, 0, 1, 900, 1100, 2)
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 540);
createCannon("right", 300, 1800);
createCannon("left", 550, 1100);
createCannon("bottom", 550, 1100);
createCannon("bottom", 1250, 1500);
createCannon("left", 580, 3500);
createCannon("left", 590, 3500);
createCannon("left", 600, 3500);
createCannon("left", 610, 3500);
createCannon("left", 620, 3500);
createCannon("top", 580, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
