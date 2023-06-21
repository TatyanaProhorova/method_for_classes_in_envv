import * as data from '../data';

// console.log("mmmmmmmmmmm", data);

test('dataKeys', () => {
  expect(() => {
    // types = Object.keys(data).toBe(
    Object.keys(data).toBe(
      ['Bowman',
        'Swordsman',
        'Magician',
        'Undead',
        'Zombie',
        'Daemon'],
    );
  });
});

//   test ('rightType', () => {
//     expect(() => {
//         types = Object.keys(data);
//         (types.includes(type)).toBe('true');
//     })
//   });
