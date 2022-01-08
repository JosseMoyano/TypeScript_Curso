"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villano extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const scarletWitch = new Xmen('Scarlet Witch', 'Wanda');
    const magneto = new Villano('Magneto', 'Erick');
    const printName = (character) => {
        console.log(character.name);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.age = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3)
                throw new Error('El nombre debe ser mayor a 3 letras');
            this.name = name;
        }
        getFullNameforXmen() {
            console.log(super.getFullName());
        }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan', true);
    wolwerine.fullName = 'Wanda';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    apocalipsis.changeName('Wanda');
    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map