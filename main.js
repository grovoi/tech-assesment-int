/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    let day = 0
    let month = 0
    let year = 0
    let totalDay = 0


    let firstDate = dates[0].split('.')
    let lasttDate = dates[1].split('.')

    let tYear = parseInt(firstDate[2])
    let lYear =  parseInt(lasttDate[2])
    while (tYear != lYear)
    {

        if (tYear % 4 === 0)
        {
            totalDay = totalDay + 366
        }
        else {
            totalDay = totalDay + 365
        }


        if (tYear > lYear)
        {
            tYear = tYear - 1
            year++
        }
        else if (tYear < lYear){
            tYear = tYear + 1
            year++
        }
        
       

    }

    let tMonth = parseInt(firstDate[1])
    let lMonth = parseInt(lasttDate[1])
    let pass = true
    while (tMonth != lMonth)
    {

            if (tMonth == 2 && (tYear % 4 === 0))
            {
                totalDay = totalDay + 29
            }
            else if (tMonth == 2 && (tYear % 4 !== 0)) {
                totalDay = totalDay + 28
            }
            else if (tMonth % 2 === 0)
            {
                totalDay = totalDay + 30
            }
            else if (tMonth % 2 !== 0){
                totalDay = totalDay + 31
            }

            if (year > 0 && month > 6)
            {
                
            }  

        
        if ((tMonth > lMonth) && pass)
        {
            tMonth = tMonth + 1
            month++
            if (tMonth > 12)
                {
                    tMonth = 1
                    month = 0
                    if (year > 0)
                    {
                        year = year - 1
                        if (tYear % 4 === 0)
                            {
                                totalDay = totalDay - 366
                            }
                            else {
                                totalDay = totalDay - 365
                            }
                    }
                  
                }
        }
        else if ((tMonth < lMonth) && pass){
            tMonth = tMonth + 1
            month++
        }
        
      
    }

    let tDay = parseInt(firstDate[0])
    let lDay = parseInt(lasttDate[0])
    while (tDay != lDay)
    {
        if (tDay > lDay)
        {
            tDay = tDay - 1
            day++
        }
        else if (tDay < lDay){
            tDay = tDay + 1
            day++
        }
    }

    totalDay = totalDay + day

   

    return ((year!= 0 ? year > 1 ? year + " years, ": year + " year, " : "") + 
            (month!= 0 ? month > 1 ? month + " months, ": month + " month, " : "") + "total " + (totalDay)+ ' days');


}