const seperateNumber=(num)=>{
    return num.toString().split('.');
}

const dateFomart=(date)=>{
    return new Date(date).toUTCString()
}

export {seperateNumber, dateFomart}