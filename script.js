/* -------------------WORLD SIZE----------------------- */
const gameSize = 20;

/* -------------------LAYOUTS----------------------- */
const container = document.querySelector(".container");
const world = document.querySelector(".world");
const toolbar = document.querySelector(".toolbar");
const tools = document.querySelector(".tools");
const materials = document.querySelector(".materials");

function matrix() {
  for (let row = 0; row < gameSize; row++) {
    gameArea[row] = [];
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col] = document.createElement("div");
      gameArea[row][col].setAttribute("data-row", row);
      gameArea[row][col].setAttribute("data-col", col);
      gameArea[row][col].classList.add("tile");
      world.appendChild(gameArea[row][col]);
    }
  }
}

function resetting() {

  /* -------------------SKY----------------------- */
  for (let row = 0; row < gameSize; row++) {
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "sky");
    }
  }

  /* -------------------GRASS----------------------- */
  for (let row = 13; row < 14; row++) {
    for (let col = 5; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "grass");
    }
  }

  /* -------------------SOIL----------------------- */
  for (let row = 14; row < 15; row++) {
    for (let col = 3; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "soil");
    }
  }
  for (let row = 15; row < 16; row++) {
    for (let col = 2; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "soil");
    }
  }
  for (let row = 16; row < 17; row++) {
    for (let col = 1; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "soil");
    }
  }

  /* -------------------WATER----------------------- */
  for (let row = 13; row < 14; row++) {
    for (let col = 1; col < 5; col++) {
      gameArea[row][col].setAttribute("id", "water");
    }
  }
  for (let row = 14; row < 15; row++) {
    for (let col = 1; col < 3; col++) {
      gameArea[row][col].setAttribute("id", "water");
    }
  }
  for (let row = 15; row < 16; row++) {
    for (let col = 1; col < 2; col++) {
      gameArea[row][col].setAttribute("id", "water");
    }
  }
  for (let row = 13; row < gameSize; row++) {
    for (let col = 0; col < 1; col++) {
      gameArea[row][col].setAttribute("id", "water");
    }
  }
  for (let row = 19; row < 20; row++) {
    for (let col = 1; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "water");
    }
  }

  /* -------------------STONE----------------------- */
  for (let col = 7; col < 10; col++) {
    for (let row = 11; row < 12; row++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let col = 9; col < 13; col++) {
    for (let row = 12; row < 13; row++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let col = 5; col < 8; col++) {
    for (let row = 12; row < 13; row++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }

  /* -------------------TREE TRUNK----------------------- */
  for (let col = 17; col < 18; col++) {
    for (let row = 9; row < 13; row++) {
      gameArea[row][col].setAttribute("id", "treeTrunk");
    }
  }

  /* -------------------TREE BRANCH----------------------- */
  for (let col = 16; col < 19; col++) {
    for (let row = 6; row < 9; row++) {
      gameArea[row][col].setAttribute("id", "treeBranch");
    }
  }

  /* -------------------SUN----------------------- */
  for (let col = 0; col < 3; col++) {
    for (let row = 0; row < 3; row++) {
      gameArea[row][col].setAttribute("id", "sun");
    }
  }

  /* -------------------CLOUD----------------------- */
  for (let col = 9; col < 12; col++) {
    for (let row = 1; row < 2; row++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  for (let col = 10; col < 13; col++) {
    for (let row = 6; row < 7; row++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  for (let col = 5; col < 6; col++) {
    for (let row = 2; row < 6; row++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  for (let col = 4; col < 7; col++) {
    for (let row = 1; row < 2; row++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  for (let col = 3; col < 6; col++) {
    for (let row = 6; row < 7; row++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  gameArea[2][9].setAttribute("id", "cloud");
  gameArea[3][10].setAttribute("id", "cloud");
  gameArea[4][11].setAttribute("id", "cloud");
  gameArea[2][12].setAttribute("id", "cloud");
  gameArea[5][12].setAttribute("id", "cloud");
  gameArea[5][9].setAttribute("id", "cloud");
  gameArea[5][3].setAttribute("id", "cloud");
  gameArea[6][7].setAttribute("id", "cloud");

  /* -------------------LAVA----------------------- */
  for (let row = 17; row < 18; row++) {
    for (let col = 1; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "lava");
    }
  }

  /* -------------------GOLD----------------------- */
  for (let row = 18; row < 19; row++) {
    for (let col = 1; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "gold");
    }
    gameArea[6][7].setAttribute("id", "gold");
    gameArea[12][8].setAttribute("id", "gold");

  }
}

function createNewGame() {
  matrix();
  resetting();
}

let gameArea = [];
createNewGame();
/* -------------------TOOLBAR----------------------- */

const toolbarUp = document.createElement("h1");
toolbarUp.classList.add("up");
toolbarUp.textContent = "Inventory";
toolbar.insertAdjacentElement("afterbegin", toolbarUp);

const toolbarHead = document.createElement("h3");
toolbarHead.textContent = "Tools Of Trade";
toolbarHead.classList.add("up");
tools.insertAdjacentElement("afterbegin", toolbarHead);

const toolbarList = document.createElement("ul");
toolbarList.classList.add("toolbarList");
tools.insertAdjacentElement("beforeend", toolbarList);

function createTool(name) {
  const element = document.createElement("li");
  element.setAttribute("id", name);
  element.textContent = name;
  element.classList.add("toolbarBox");
  toolbarList.appendChild(element);
}
createTool("axe");
createTool("pickaxe");
createTool("shovel");
createTool("full-bucket");
createTool("drill");
createTool("empty-bucket");

/* -------------------MATERIALS----------------------- */

const materialsHead = document.createElement("h2");
materialsHead.textContent = "building Materials";
materialsHead.classList.add("up");
materials.insertAdjacentElement("afterbegin", materialsHead);


const materialsList = document.createElement("ul");
materialsList.classList.add("materialsList");
materials.insertAdjacentElement("beforeend", materialsList);

function createMaterial(name) {
  let mat = document.createElement("li");
  mat.setAttribute("id", name);
  mat.textContent = 0;
  mat.classList.add("materialBox");
  materialsList.appendChild(mat);
}
createMaterial("grass");
createMaterial("soil");
createMaterial("water");
createMaterial("stone");
createMaterial("treeTrunk");
createMaterial("treeBranch");
createMaterial("gold");
createMaterial("lava");


/* -------------------RESET----------------------- */

const nukeWorld = document.createElement("button");
nukeWorld.classList.add("nukeButton");
toolbar.insertAdjacentElement("beforeend", nukeWorld);



/* -------------------GAME----------------------- */
/* ------------------RULES----------------------- */



// reset game button
nukeWorld.addEventListener("click", resetting);

function handleTileClick(event) {
  let pressedTileType = event.currentTarget.getAttribute("id");
  if (document.querySelector(".selected")) {
    let selectedTool = document.querySelector(".selected");
    if (
      selectedTool.classList.contains("toolbarBox") 
    ) {
      mineTheTile(pressedTileType, selectedTool.getAttribute("id"));
    } else if (
      selectedTool.classList.contains("materialBox") &&
      checkInventory(selectedTool.getAttribute("id"))
    ) {
      placeTheTile(pressedTileType, selectedTool.getAttribute("id"));
    }
  }
}

function checkInventory(tileToPlaceType) {
  if (
    parseInt(
      document.querySelector(`[id=${tileToPlaceType}].materialBox`)
        .textContent,
    ) > 0
  )
    return true;
  else return false;
}

function mineTheTile(tileToMine, toolToUse) {
  if (
    (tileToMine === "stone" && toolToUse === "pickaxe")||
    ((tileToMine === "treeTrunk" || tileToMine === "treeBranch") && toolToUse === "axe")||
    ((tileToMine === "soil" || tileToMine === "grass") && toolToUse === "shovel")||
    (tileToMine === "water" && toolToUse === "empty-bucket")||
    (tileToMine === "lava" && toolToUse === "full-bucket")||
    (tileToMine === "gold" && toolToUse === "drill")
  ) {
    event.currentTarget.setAttribute("id", "sky");
    addToInventory(tileToMine);
  }
}

function placeTheTile(tileOut, tileIn) {
  if (tileOut === ("sky" || "cloud")) {
    removeFromInventory(tileIn);
    event.currentTarget.setAttribute("id", tileIn);
  }
}

function addToInventory(tileToMine) {
  document.querySelector(`[id=${tileToMine}].materialBox`).textContent =
    parseInt(
      document.querySelector(`[id=${tileToMine}].materialBox`)
        .textContent,
    ) + 1;
}

function removeFromInventory(tileToPlace) {
  document.querySelector(
    `[id=${tileToPlace}].materialBox`,
  ).textContent =
    parseInt(
      document.querySelector(`[id=${tileToPlace}].materialBox`)
        .textContent,
    ) - 1;
}

function handleInventoryClick(event) {
  if (event.currentTarget.classList.contains("selected")) {
    event.currentTarget.classList.remove("selected");
  } else {
    fullInventoryNodeList.forEach((el) => el.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
  }
}

const fullInventoryNodeList = document.querySelectorAll(".toolbar li");

fullInventoryNodeList.forEach((el) => {
  el.addEventListener("click", handleInventoryClick);
});

for (let row = 0; row < gameSize; row++) {
  for (let col = 0; col < gameSize; col++) {
    gameArea[row][col].addEventListener("click", handleTileClick);
  }
}