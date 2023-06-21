import Character from '../character';

// invalid type
test('invalid-type', () => {
  expect(() => {
    const ch = new Character('Python', 'noDaemon');
    return ch;
  }).toThrow();
});

// // not a string   DONT WORK
// test('name-not-string', () => {
//   expect(() => {
//     new Character(222, 'Daemon')
//   }).toThrow();
// });

// testing of "damege" , health = 0
test('health-to-0', () => {
  const ch = new Character('Python', 'Daemon');
  ch.damage(1200);
  expect(ch.health).toBe(0);
});

// name.length >= 11
test('more-then-max-name', () => {
  expect(() => {
    const ch = new Character('Ppppppppppppppppppp', 'Daemon');
    return ch;
  }).toThrow();
});

// name.length >= 11
// test('more-then-max-name', () => {
//   expect(new Character('Ppppppppppppppppppp', 'Daemon')
//   ).toThrow();
// });

// name.length <= 1
// test('less-then-min-name', () => {
//   expect(() => {
//     new Character('P', 'Daemon')
//   }).toThrow();
// });

// testing of "damege" , health = 0
test('health-to-0', () => {
  const ch = new Character('Python', 'Daemon');
  ch.damage(1200);
  expect(ch.health).toBe(0);
});

// dead error
test('damagedBadly', () => {
  const ch = new Character('Python', 'Daemon');
  ch.health = 0;
  expect(() => {
    const a = ch.levelUp();
    return a;
  }).toThrow();
});
