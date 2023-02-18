interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name} and ${this.year} and ${this.broken}`;
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `Cola has ${this.sugar} grams of sugar and color ${this.color}`;
  }
}

const printThings = (vehicle: Vehicle ): void => {
  console.log(vehicle.summary())
}


printThings(oldCivic);
printThings(drink);
