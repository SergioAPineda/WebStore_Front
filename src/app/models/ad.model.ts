export class Ad {

    constructor(
        public _id?: string,
        public name?: string,
        public category?: string,
        public description?: string,
        public isactive?: boolean,
        public owner?: Owner
    ){}

}

export class Owner {

    constructor(
        public type?: string,
        public ref?: string
    ){}
}

