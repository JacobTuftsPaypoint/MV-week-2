/* 
The provided function will be tested using multiple salarys.  Inside the function code-block, 
your challenge is to write the logic to calculate the amount of take-home pay after taxes have
been deducted.
Here are the tax bands. Rates are marginal.  Marginal bands mean you only pay the specified tax rate on that portion of salary. 
For example, if your salary puts you in the 40% tax bracket, then you only pay 40% tax on the segment of earnings in that income tax band. 
For the lower part of your earnings, you'll still pay the appropriate 20% or 0%.

Example £15,000.00 =>  £12,570.00 isn't taxed, then the remaining £2,430.00 is taxed at 20%

||------------------------------||------------||
||   Tax Band                   ||   Tax Rate ||
||------------------------------||------------||
||   £0         => £12,570.00   ||     0%     ||
||   £12,570.01 => £50,270.00   ||    20%     ||
||   £50,270.01 => £150,000.00  ||    40%     ||
||   £150,000.00 => To the moon!||    45%     ||
||============================================||
*/
const band1 = 12570.
const band2 = 50270.1
const band3 = 150000.1
let totaltax = 0

function taxBand(salary) {
    if(salary>band1){
        if(salary>band2){
            totaltax+=(band2-band1)*0.2
            if (salary>band3) {
                totaltax+=(salary-band3)*0.45
            } else {
                totaltax+=(salary-band2)*0.4
            }
        } else {
            totaltax+=(salary-band1)*0.2
        }
    } else if(salary>0){
        totaltax=0
    } else {
        return(0)
    }
    return(salary-totaltax)
}


module.exports = { taxBand };
