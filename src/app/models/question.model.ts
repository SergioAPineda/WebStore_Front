import { Product } from "./product.model";

export class Question {

    constructor(
            public _id?: string,
            public product?: Product,
            public questionText?: string,
            public created?: Date, 
            public userName?: string,
            public answer?: string,
            public isAnswered?: boolean  
    ){}
}