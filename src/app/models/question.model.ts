import { Product } from "./product.model";

export class QuestionModel {

    constructor(
            public _id?: string,
            public product_id?: string,
            public questionText?: string,
            public created?: Date, 
            public userName?: string,
            public answer?: string,
            public isAnswered?: boolean  
    ){}
}