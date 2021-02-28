export class Product {
    name: string | any;
    description: string | any;

    constructor (value:any) {
        this.name = value.name;
        this.description = value.description;
    }
}
