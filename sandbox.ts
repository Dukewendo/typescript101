const character = 'potato-face';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

const circ = (diamater: number) => {
  return diamater * Math.PI;
}

console.log(circ(8));