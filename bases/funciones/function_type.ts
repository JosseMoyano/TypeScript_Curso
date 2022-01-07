(() => {

    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const destroyTheWord = ():string => `No es locura, es CAOS`;

    let myFunction: () => string; 

    // myFunction = 10; 
    // console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Wanda'));

    myFunction = destroyTheWord;
    console.log(myFunction());

})()
// te quiero...