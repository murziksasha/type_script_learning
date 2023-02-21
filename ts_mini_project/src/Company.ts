

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor(){
    this.companyName = 'Remont Servis Chernomorsk';
    this.catchPhrase = 'All for our clients';
    this.location = {
      lat: 46.296458,
      lng: 30.6383374,
    }
  }
}