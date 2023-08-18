export class Product {
    questionId: null;
    answer: null;

    constructor(
        public _id?: string,
        public name?: string,
        public category?: string,
        public description?: string,
        public isactive?: boolean,
        public owner?: Owner,
        public qaPairs?: QAPair[] // Add this new property for question-answer pairs
    ){}

}

export class Owner {

    constructor(
        public type?: string,
        public ref?: string
    ){}
}

export class QAPair {

    constructor(
        public question?: string,
        public answer?: string
    ){}
}