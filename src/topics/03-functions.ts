function addNumbers(a: number , b: number): number {
 return a + b
}

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
}

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2 ) => {
  return firstNumber * base
}

// const result: number = addNumbers(1, 2)
// const result2: string  = addNumberArrow(1, 3)
// const multiplyResult: number = multiply(5) 
// console.log({result, result2, multiplyResult});

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}


const healCharacter = (character: Character , amount: number) => {
  character.hp += amount;
}

const CR7: Character = {
  name: 'CR7',
  hp:50,
  showHp(){
    console.log(`Life points ${this.hp}`);
  }
}
healCharacter(CR7, 10);
healCharacter(CR7, 40);

CR7.showHp()

export {};