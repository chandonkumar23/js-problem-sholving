
/*********fun task 1************/

// function takaToDollar(taka){
//     var Rate=100; 
//     var total=(taka/Rate);
//     return total;
// }


// const tk= 10000;
// var dollar=takaToDollar(tk);
// console.log ("$", dollar);





// /*********fun task 2************/


// function barbiKen(noBarbi){
//     const barbie=noBarbi.length;
//     const reminder=barbie%2;
//     if (reminder===0){
//         console.log ('Hi ken')
//     }
//     else{
//         console.log ('HI Barbie')
//     }
// }
// barbiKen('who is Bribie')




// function barbieKen(name){
//     let manes=name.length%2;
//     if(manes==0){
//         console.log('Hi barbie')

//     }
//     else{
//         console.log('Hi ken')
       
//     }
//     return manes;
// }

// barbieKen('babye')



// let first =5;
// let second=7;

// const temp=first;
// first=second;
// second=temp;
// console.log(first,second);


//     const number1=80;
//     const number2=46;
//     const number3=76;
//     if(number1>number2&&number1>number3){
//         console.log('the big number is:number-1');
//     }
//     else if(number2>number1&&number2>number3){
//         console.log('the second bigest number is:');
//     }
// else{
//     console.log('the bigest number is number3');
// }

// Math.max(2,34,23,354,6,4,443,);
// console.log (Math.max);
// function maxInArray(numbers){
//     for(let i=0; i<numbers.length;i++)
// {
//     const index=i;
//     const element=numbers[index];
//     console.log(element);
// }
// }
// const heigths=[234,232,23,233];
// const talest=maxInArray(heigths);
// console.log(talest);
// function cakeWinner(cake){
//     let chandon=34;
//     let bappy=54;
//     let kumar=45;

// const winner=Math.max(chandon,bappy,kumar);
// return winner;
    
// }
// const cake =cakeWinner();
// console.log (cake);
// const numbers =[34,23,34,44,23,54,23]
// const total= numbers.splice(3,5);
// console.log(total);
// for (let i=1; i<=50;i++){
//     if(i %3===0 && i%5===0){
//         console.log('foobar');
//         }
//         else if(i % 3 ===0){
//             console.log('foo');
//         } 
//         else if (i % 5 ===0){
//             console.log ('bar');
//         }
//         else {
//             console.log (i);
//         }

//     }



// function woodcalculator(chairQuantity,tableQuantity,BedQuntity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
//     const chairWood = chairQuantity * perChairWood;
//     const tableWood =tableQuantity *perTableWood;
//     const bedWood = BedQuntity*perBedWood;

//     const totalWood = (chairWood+tableWood+bedWood);
//     return totalWood;
// }
// const totalWood=woodcalculator(4,9,4);
// console.log (totalWood);





// const phones =[
//     {name : 'samsung',camera :66, storage:128, price:31000,color:'blue'},
//     {name : 'vivo',camera :12, storage:16, price:19000,color:'silver'},
//     {name : 'xaomi',camera :12, storage:32, price:22000,color:'black'},
//     {name : 'oppo',camera :12, storage:64, price:20000,color:'red'},
//     {name : 'greenLine',camera :12, storage:32, price:56000,color:'navy'},
//     {name : 'iPhone',camera :12, storage:128, price:86000,color:'white'},
//     {name : 'Nokia',camera :88, storage:64, price:44000,color:'black'},
    
// ]
// function cheapestPhone(phones){
//     let cheapest=phones[0];
//     for (let i=0; i < phones.length;i++){
//         const phone= phones[i];
//         if(phone.camera>cheapest.camera){
//             cheapest=phone;
//         }
       
//     }
//     return cheapest;
// }

// const mySelection=cheapestPhone(phones);
// console.log (mySelection);

// function feetToInch(feet){
//     const totaInch= feet*12;
//     return totaInch;
// }



// const totalFeet=feetToInch(15);{
//     console.log (totalFeet);
// }




function centimeterTometer (centimeter){
    let totalMeter=centimeter/12;
    return totalMeter;

}


const meter=centimeterTometer(1000);{
    console.log ('total meter:', meter);
}

function paperRequirments (book1,book2,book3){
    const needBooks1=3;
    const needBooks2=4;
    const needBooks3=6;
    const book1Papers= needBooks1*book1;
    const book2Papers = needBooks2*book2;
    const book3Papers=needBooks3*book3;
    const totalPaperss=(book1Papers + book2Papers + book3Papers);
    
    return totalPaperss;

}


totalPapers=paperRequirments(100,200,300);{
    console.log("totalPapers:",totalPapers);
}






