(() => {

    const fullName = (firstName:string, ...restArgs:string[]):string => {
       
      return `${firstName} ${restArgs.join(' ')}`;
       
    }

    const scarletWitch = fullName('Wanda', 'Elizabeth', 'Maximoff', 'bruja escarlata');

    console.log({scarletWitch});
    
})()