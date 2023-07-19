export interface Passenger {
 name: string;
 children?:string[];
}

const passengerOne: Passenger = {
  name: 'Manuel'
}


const passengerTwo: Passenger = {
  name: 'Belkis',
  children: ['Valy', ' ']
}

const returnChildrenNumber = (passenger: Passenger ) =>{
  const howManyChildren = passenger.children?.length || 0
  // const howManyChildren = passenger.children!.length 

  console.log(passenger.name, howManyChildren);

  return howManyChildren
}

returnChildrenNumber(passengerOne)