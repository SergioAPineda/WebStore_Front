export class User {

    constructor(
        public _id?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public username?: string,
        public password?: string,
        public admin?: boolean
    ){}

}