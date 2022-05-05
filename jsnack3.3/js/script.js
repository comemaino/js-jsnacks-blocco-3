// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
  {
    name: "Milan",
    goal: 0,
    falli: 0,
  },
  {
    name: "Inter",
    goal: 0,
    falli: 0,
  },
  {
    name: "Atalanta",
    goal: 0,
    falli: 0,
  },
];

for (let i = 0; i < teams.length; i++) {
  const thisElement = teams[i];
  if (thisElement.goal === 0) {
    const rndNumber = Math.floor(Math.random() * 100);
    thisElement.goal = rndNumber;
  }
  if (thisElement.falli === 0) {
    const rndNumber = Math.floor(Math.random() * 100);
    thisElement.falli = rndNumber;
    console.log(thisElement);
  }
}

teams.forEach((team) => {
  const rndGoal = getRndInteger(0, 100);
  const rndFalli = getRndInteger(0, 100);

  team.goal = rndGoal;
  team.falli = rndFalli;
});

console.log(teams);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
