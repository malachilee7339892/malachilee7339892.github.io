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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (100, 700, 50, 10);
    createPlatform (300, 600, 50, 10);
    createPlatform (500, 500, 50, 10);
    createPlatform (300, 400, 50, 10);
    createPlatform (500, 300, 50, 10);
    createPlatform (700, 300, 50, 10);
    createPlatform(1000, 300, 50, 10);
    createPlatform(1100, 400, 50, 10);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 700, 290)
    createCollectable("grace", 500, 490)
    createCollectable("steve", 300, 590)
    createCollectable("max", 300, 390)
    // TODO 4 - Create Cannons
    
    createCannon("bottom", 800, 2000)
    createCannon("bottom", 400, 2000)
    createCannon("bottom",600, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
