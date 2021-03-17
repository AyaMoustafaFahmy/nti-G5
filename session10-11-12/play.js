function x (value, c){
    setTimeout(()=>{
        if(value<21) c(false, 'must be more than 21')
        else c(value, false)
    },2000)
}

x(25, (result, error)=>{
    
} )