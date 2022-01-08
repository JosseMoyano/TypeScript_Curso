(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id:string):string;
    }

    interface Address {
        id:number,
        cp: number,
        city: string
    }

    const client: Client = {
        name: 'Wanda',
        age: 29,
        address: {
            id: 125,
            cp: 1854,
            city: 'longchamps'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }

    const client2 : Client = {
        name: 'Magneto',
        age: 45,
        address:{
            id: 124,
            cp: 767,
            city: 'Burzaco'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }

})()