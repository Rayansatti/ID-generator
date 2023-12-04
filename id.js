function* idGenerator() {
  let id = 45;
  let id2 = 78;

  while (true) {
    yield `${id} + ${id2}`;
    id++;
    id2++;
  }
}

const genId = documrnt.createElement('button');
genId.textContent = 'Generate ID';
document.body.appendChild(genId);
genId.addEventLitstener('click', () => {
  const generator = idGenerator();
  const newId = generator.next().value;
  console.log(newId)
}
