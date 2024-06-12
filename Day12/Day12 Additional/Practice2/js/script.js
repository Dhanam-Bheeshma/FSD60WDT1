//EB bill calculator
//For first 100 units,Rs1.5/unit,Subsidy=Rs.150
//For next 100 units,Rs2/unit,Fixed Price=Rs.20,Subsidy=Rs.150
//For units upto 500 units,Rs3/unit,Fixed Price=Rs.30,Subsidy=Rs.150
//For upto 500 units,Rs6.6/unit,Fixed Price=Rs.50,Subsidy=Rs.150

function calculateBill(units){
    
if(units<=100){
    bill=150-(units*1.5);
    }
else if(units<=200){
    bill=(((100*1.5)+(units-100)*2)+20)-150;
}
else if(units<=500){
    bill=(((100*1.5)+(100*2)+(units-200)*3)+30)-150;
}   
else if(units>500){
    bill=(((100*1.5)+(100*3.5)+(300*4.6)+(units-500)*6.6)+50)-150;
}

return bill ;
}

const units=525;
console.log(calculateBill(units));
