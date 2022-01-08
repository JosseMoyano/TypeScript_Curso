(() => {

    class Avenger {

        // private name: string = ''; 
        // public team: string = '';
        // public realName?: string = '';
        static age: number = 35; 
        static getAge(){
            return this.name; 
        }

        // constructor( name:string, team: string, realName?: string ) {
        //     this.name = name ;
        //     this.team = team ;
        //     this.realName = realName ;
        // }

        constructor ( 
            private name:string,
            public team: string, 
            public realName?: string,
        ) {}

        public bio(){
            return `${this.name} (${this.team})`;
        }

    }        

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.age);
    // console.log(antman.bio());
    // console.log(Avenger.getAge());

})()