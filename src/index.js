module.exports = function toReadable (number) {
    const hundredten = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const one = ['zero','one','two','three','four','five','six','seven','eight', 'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const two = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    const hundred = 'hundred'
    let str = String(number)
    if(number === 0){
        return 'zero'
    }else if(number === 1){
        return 'one'
    }else if(number === 2){
        return 'two'
    }else if(number === 3){
        return 'three'
    }else if(number === 4){
        return 'four'
    }else if(number === 5){
        return 'five'
    }else if(number === 6){
        return 'six'
    }else if(number === 7){
        return 'seven'
    }else if(number === 8){
        return 'eight'
    }else if(number === 9){
        return 'nine'
    }else if(number === 10){
        return 'ten'
    }else if(number === 11){
        return 'eleven'
    }else if(number === 12){
        return 'twelve'
    }else if(number === 13){
        return 'thirteen'
    }else if(number === 14){
        return 'fourteen'
    }else if(number === 15){
        return 'fifteen'
    }else if(number === 16){
        return 'sixteen'
    }else if(number === 17){
        return 'seventeen'
    }else if(number === 18){
        return 'eighteen'
    }else if(number === 19){
        return 'nineteen'
    }else if(number === 20){
        return 'twenty'
    }
    
    
    if(str.length<= 2){
    let oneNumber = String(two.filter((value,index)=> (index + 2) == str[0]))
    let twoNumber = String(one.filter((value,index)=> index == str[1]))
    return str = str[1] === '0' ?  `${oneNumber}`: `${oneNumber} ${twoNumber}`
    
    }else if(str.length=== 3 && str[1]<=0 ){
    let onehundred =  String(one.filter((value,index)=> index == str[0]))
    let threehundred =  String(one.filter((value,index)=> index == str[2]))
    return str = str[2] === '0' ? `${onehundred} ${hundred}`:`${onehundred} ${hundred} ${threehundred}`
  
    }else if(str.length=== 3 &&str[1]== 1 &&str[2]== 0){
      onehundred =  String(one.filter((value,index)=> index == str[0]))
     let twohundredten =  String(hundredten.filter((value,index)=> (index + 1)== str[1]))
      return str =`${onehundred} ${hundred} ${twohundredten}`
  
    }else if(str.length=== 3 &&str[1]== 1 && str[2]> 0){
      onehundred =  String(one.filter((value,index)=> index == str[0]))
     let twohundredeleven =  String(hundredten.filter((value,index)=> (index )== str[2]))
      return str =`${onehundred} ${hundred} ${twohundredeleven}`
  
    }else if(str.length=== 3 &&str[1]>= 2){
      onehundred =  String(one.filter((value,index)=> index == str[0]))
     let hundredTwenty =  String(two.filter((value,index)=> index + 2 == str[1]))
     let hundredeOne =  String(one.filter((value,index)=> (index )== str[2]))
     return str = str[2] === '0' ? `${onehundred} ${hundred} ${hundredTwenty}`: `${onehundred} ${hundred} ${hundredTwenty} ${hundredeOne}`
    }
    
       
    
}
