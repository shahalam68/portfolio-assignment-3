



//  program start for Kilometer To Meter convert.
function kilometerToMeter(kilo){
    if(kilo < 0){
        return 'Your input is Invalid please insart an positive number';
    }
    var meter = kilo*1000;
    return meter;
}
//  program end for Kilometer To Meter convert.


// program start for budget Calculator

function budgetCalculator( w, m, l){

    if(Number.isInteger(w) == false || w<0){
        return 'Your input is Invalid please insert integer and positive number';
    }
    if(Number.isInteger(m) == false || m<0){
        return 'Your input is Invalid please insert integer and positive number';
    }
    if(Number.isInteger(l) == false || l<0){
        return 'Your input is Invalid please insert integer and positive number';
    }
    return w*50 + m*100 + l*500;
}
// program end for budget Calculator


// program start for hotelCost

function hotelCost(days) {
    if(days < 0  || Number.isInteger(days) == false) {
      return "Your input is Invalid please insert integer and positive number";
    }
    if(days <= 10){
      return days*100;
    } else if(days>=11 && days<=20){
      return 1000+(days-10)*80;
    } else if(days>20){
      return 1800+(days-20)*50;
    }
}
// program end for hotelCost


// program start for megaFriend

function megaFriend(nameList){
    var result = '';
    for(var i = 0;i<nameList.length;i++){
        if(result.length < nameList[i].length){
            result = nameList[i];
        }
    }
    return result;
}
// program end for megaFriend
