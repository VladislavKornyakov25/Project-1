'use strict';
function amountOfPages(summary){
    
    let result = 0;    
    for (let i = 1; i <= summary; i++) { 
        let str = '';       
        str += i;        
        result += str.length;
        if (result == summary) {
            return i;
        }
    }
}
amountOfPages(1095); 