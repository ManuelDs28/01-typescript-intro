function classDecorator(
  constructor: any
) {
  return  class extends constructor{
    newProperty = 'New property';
    hello = 'override';

  }
}


@classDecorator
export class SuperClass {
  public myProperty: string = 'abC123';

  print(){
    console.log('HI WORLD');
  }
}


console.log(SuperClass);


const myClass = new SuperClass();

console.log(myClass);