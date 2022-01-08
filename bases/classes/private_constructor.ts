(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(
            public name: string,
        ){}

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico')
            }
            return Apocalipsis.instance;
        }

        changeName ( newName:string){
            this.name = newName; 
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()
    console.log(apocalipsis)
    console.log(apocalipsis2)
    console.log(apocalipsis3)
    apocalipsis.changeName('Wanda')
    // const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... el unico');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... el unico');
    console.log(apocalipsis)
    console.log(apocalipsis2)
    console.log(apocalipsis3)

})()