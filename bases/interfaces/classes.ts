(() => {

    interface Xmen {
        name: string,
        realNamen: string,
        mutantPower(id:number):string,
    }

    interface Human {
        age: number,
    }

    class Mutant implements Xmen, Human {
        public age!: number; 
        public name!: string;
        public realNamen!: string;

        mutantPower(id: number): string {
            return this.name + ' ' + this.realNamen; 
        }
    }
    

})()