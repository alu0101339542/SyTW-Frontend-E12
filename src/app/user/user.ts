export class User {

    constructor (
        public name: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = "",
        public preferences: string[] = []
    ){

    }
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
