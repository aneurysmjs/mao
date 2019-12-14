// make a random number between 1 and selected bound
export default function genRandom(bound = 2): number {
  return Math.floor(Math.random() * bound);
};
