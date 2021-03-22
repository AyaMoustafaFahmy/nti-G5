export interface Doctor {
    name:string;
    spicialize:string;
    address:{
        city:string,
        streetName:string,
        bNo: number|null
    }
}
