export class Inventory {

    constructor(
        public _id?: string,
        public item?: string,
        public qty?: number,
        public tags?: string,
        public status?: string,
        public size?: Size
    ){}

}

export class Size {

    constructor(
        public h?: number,
        public w?: number,
        public uom?: string
    ){}

}
