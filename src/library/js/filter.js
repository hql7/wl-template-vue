

export const dateFilter = (date) =>{
    console.log(data)
    return data;
}
/**
 * author fndbs1314
 * date.getFullYear -> date.getFullYear();
 * @param {*} data 
 */
export const YYMMDDFilter = (timestamp) =>{
    if(timestamp){
        let date = new Date(timestamp)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() ;

    }else{
        return null;
    }
}

export const YYMMFilter = (timestamp) =>{
    if(timestamp){
        let date = new Date(timestamp)
        return date.getFullYear() + '-' + (date.getMonth() + 1) ;

    }else{
        return null;
    }
}

export const moneyFilter = (money) =>{
    if(money){
        return  money.toLocaleString();
     }else{
         return 0;
     }
}