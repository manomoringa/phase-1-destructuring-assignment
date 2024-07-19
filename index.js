const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling super left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


// Strings

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

console.log(moo, neigh, baa, oink, cluck); // Output: moo neigh baa oink cluck

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, dolly, babe, little] = 'cow sheep pig chicken'.split(' ');

console.log(bessie, dolly, babe, little); // Output: cow sheep pig chicken

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

console.log(blackAndWhite, black, pink); // Output: cow sheep pig

// Arrays

// Original colors array
const Colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red, orange, yellow, green, blue, indigo, violet); // Output: red orange yellow green blue violet

// 5. Use destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, i, v] = colors;

console.log(r, o, y, g, b, i, v); // Output: red orange yellow green blue indigo violet


// 6. Use destructuring to declare Indigo using indg
const [, , , , , indg] = colors;

console.log(indg); // Output: indigo

// Objects

// Muppet Character
const Muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName, color, song, job, partner); // Output: Miss Piggy pink Never Before, Never Again Cast member of The Muppet Show Kermit

// Nested Muppet Character
const NestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner); // Output: Moving Right Along I Hope That Something Better Comes Along Host of The Muppet Show Miss Piggy