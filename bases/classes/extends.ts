(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            // console.log('Constructor Avenger llamado!')
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean, 
        ){
            super(name, realName)
            // console.log('Constructor xmen llamado')
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string){
            if (name.length < 3) throw new Error('El nombre debe ser mayor a 3 letras')
            this.name = name; 
        }

        getFullNameforXmen(){
            console.log( super.getFullName() )
        }
    }

    const wolwerine = new Xmen('Wolwerine', 'Logan', true);
    // console.log(wolwerine);
    // wolwerine.getFullNameforXmen();
    // console.log(wolwerine.fullName);
    wolwerine.fullName = 'Wanda';
    // console.log(wolwerine.fullName);

})()