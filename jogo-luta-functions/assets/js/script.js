const char = createKnight("Daniel");
const monster = createLittleMonster();

stage.start(
  char,
  monster,
  document.querySelector("#char"),
  document.querySelector("#monster")
);
