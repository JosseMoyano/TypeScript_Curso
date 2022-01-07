"use strict";
(() => {
    const a = 10;
    let b = 10;
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('hola');
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    const name = fullName('Wanda', 'Maximof', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Wanda');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Wanda', 'Maximof');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const scarletWitch = fullName('Wanda', 'Elizabeth', 'Maximoff', 'bruja escarlata');
    console.log({ scarletWitch });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const destroyTheWord = () => `No es locura, es CAOS`;
    let myFunction;
    myFunction = destroyTheWord;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Bati Señal';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let scarletWitch = {
        name: 'Wanda Maximoff',
        age: 29,
        powers: ['magia del caos']
    };
    let Fenix = {
        name: 'Jean Gray',
        age: 24,
        powers: ['telepatia', 'fenix']
    };
})();
(() => {
    let scarletWitch = {
        name: 'Wanda Maximoff',
        age: 29,
        powers: ['magia del caos']
    };
    let Fenix = {
        name: 'Jean Gray',
        age: 24,
        powers: ['telepatia', 'fenix'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomvariable = 'Fernando';
    console.log(typeof myCustomvariable);
    myCustomvariable = 20;
    console.log(typeof myCustomvariable);
    myCustomvariable = {
        name: 'Wanda',
        age: 32,
        powers: ['caos']
    };
    console.log(typeof myCustomvariable);
    console.log(myCustomvariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.123;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, 6, 7, 8, 9];
    number.push(11);
    const villanos = ['Dormamu', 'Octopus'];
    villanos.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman });
    isSuperman = true && false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["meduim2"] = 3] = "meduim2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    const villanos = 20;
    if (avengers < villanos) {
        console.log('estamos en problemas');
    }
    else {
        console.log('Nos salvamos ');
    }
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const wanda = `Bruja Escarlata`;
    console.log(wanda.toUpperCase());
    console.log(`Im ${wanda}`);
})();
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Wanda';
    hero[1] = 1000;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callWanda = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map