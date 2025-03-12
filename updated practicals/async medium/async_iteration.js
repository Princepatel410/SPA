async function* gen() {
    
    let count = 0;
    while(true)
    {
     await new Promise(resolve=> setTimeout(resolve,1000));
        yield count++;
      
    }
}

(async()=> {
    for await(let values of gen())
    {
        console.log(values);

        if(values>=5) break;
        
    }
})();
