export function getRandomLightColor() {
  const colors = [
    { r: 255, g: Math.random() * 255, b: 102 }, // Light yellow
    { r: 255, g: Math.random() * 102, b: 102 }, // Light red
    { r: Math.random() * 102, g: 255, b: 102 }, // Light green
    { r: 204, g: 153, b: Math.random() * 255 }, // Light purple
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `rgb(${Math.floor(randomColor.r)}, ${Math.floor(
    randomColor.g
  )}, ${Math.floor(randomColor.b)})`;
}

export function getRandomDarkColor() {
  const colorArray = [];
  for (let i = 0; i < numColors; i++) {
    colorArray.push(getRandomLightColor());
  }
  return colorArray;
}

export function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export function generateColorArray(numColors) {
  const colorArray = [];
  for (let i = 0; i < numColors; i++) {
    colorArray.push(getRandomLightColor());
  }
  return colorArray;
}
