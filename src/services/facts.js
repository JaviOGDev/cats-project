async function getRandomFact() {
  const res = await fetch("https://catfact.ninja/fact");
  const json = await res.json();
  const { fact } = json;

  return fact;
}

export default getRandomFact;
