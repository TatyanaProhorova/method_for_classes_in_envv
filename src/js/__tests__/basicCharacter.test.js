import Character from '../character';

// level = 1
test('testing of "level" parameter', () => {
  const result = new Character('Python', 'Daemon').level;
  expect(result).toBe(1);
});

// testing of "health" parameter
test('testing of "health" parameter', () => {
  const result = new Character('Python', 'Daemon').health;
  expect(result).toBe(100);
});

// 11 > name.length > 1
test('name', () => {
  const result = new Character('Python', 'Daemon').name;
  expect(result).toBe('Python');
});

// testing of "type" parameter
test('name', () => {
  const result = new Character('Python', 'Daemon').type;
  expect(result).toBe('Daemon');
});

// testing of "attack" parameter
test('attacke', () => {
  const result = new Character('Python', 'Daemon').attack;
  expect(result).toBe(10);
});

// testing of "defence" parameter
test('defence', () => {
  const result = new Character('Python', 'Daemon').defence;
  expect(result).toBe(40);
});

// testing damaged-a-little health to 94
test('not total damage', () => {
  const ch = new Character('Python', 'Daemon');
  ch.damage(10);
  expect(ch.health).toBe(94);
});

// testing levelUp
test('not total damage', () => {
  const ch = new Character('Python', 'Daemon').levelUp();
  expect(ch.level).toBe(2);
});
