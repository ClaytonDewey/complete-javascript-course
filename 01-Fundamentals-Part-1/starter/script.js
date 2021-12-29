////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
let marksMass,
  marksHeight,
  marksBMI,
  johnsMass,
  johnsHeight,
  johnsBMI,
  markHigherBMI;

const calculateBMI = (mass, height) => {
  bmi = mass / (height * height);
  return bmi;
}

marksMass = 78;
marksHeight = 1.69;
johnsMass = 92;
johnsHeight = 1.95;

marksBMI = calculateBMI(marksMass, marksHeight);
johnsBMI = calculateBMI(johnsMass, johnsHeight);
console.log(marksBMI + " " + johnsBMI)

markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;

marksBMI = calculateBMI(marksMass, marksHeight);
johnsBMI = calculateBMI(johnsMass, johnsHeight);
console.log(marksBMI + " " + johnsBMI)

markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);
