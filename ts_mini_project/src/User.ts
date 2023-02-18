

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = 'Chernomorsk';
    this.location = {
      lat: parseFloat('223'),
      lng: parseFloat('124'),
    };
  }
}
