export class Address{
    street:String;
    suite:String;
    city:String;
    zipcode:String;
}

export class User{
    id:String;
    name:String;
    email:String;
    phone:String;
    address= new Address()
}