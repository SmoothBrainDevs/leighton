// Converting dates to min sec hours and days
const convert = (date1: any, decimals: number = 0, date2: any = null, action: string = '-'): any => {

    if(typeof date1 !== 'number') {
        date1 = new Date(date1).getTime()
    }
    if(typeof date2 !== 'number') {
        date2 = new Date(date2).getTime()
    }

    let number: any;
    let totalSeconds: any;
    let days: any;
    let hours: any;
    let minutes: any;
    let seconds: any;
    

    if(date2 == null) {
        try {
        number = date1
        
        totalSeconds = (number / 1000);
        days = Math.floor(totalSeconds / 86400).toFixed() || 0 
 
        totalSeconds %= 86400;
        hours = Math.floor(totalSeconds / 3600).toFixed() || 0  
     
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60).toFixed() || 0
        seconds = totalSeconds % 60 || 0
            if(isNaN(decimals)) return console.warn(decimals + " isn't a number, received " + typeof decimals)
        seconds = seconds.toFixed(decimals)
        
        return [days, hours, minutes, seconds]
    } catch (err) {
        return console.warn(err)
    }

    } else {
        try {
        let first: any = date1
        let second: any = date2

        switch (action) {
            case '+':
                number = first + second
                break;

                case '-':
                    number = first - second
                    break;

                    case '*':
                        number = first * second
                        break;

                        case '/':
                            number = first / second
                            break;

                            default: 
                            number = first - second 
                            break;

        }

        totalSeconds = (number / 1000);
        days = Math.floor(totalSeconds / 86400).toFixed() || 0
        totalSeconds %= 86400;
        hours = Math.floor(totalSeconds / 3600).toFixed() || 0
        totalSeconds %= 3600;
        minutes = Math.floor(totalSeconds / 60).toFixed() || 0
        seconds = totalSeconds % 60 || 0
            if(isNaN(decimals)) return console.warn(decimals + " isn't a number, received " + typeof decimals)
        seconds = seconds.toFixed(decimals)

        return [days, hours, minutes, seconds]

    } catch (err) {
        return console.warn(err)
    }
        
   
    }

}

console.log(convert(new Date(), 3, 'Thu Feb 11 2021 09:41:29 GMT+0000 (Coordinated Universal Time)', '-'))        

/* you can use date1 and date2 as a string, number, new Date()
returns an array index 0 is days 1 is hours 2 is minutes 3 is seconds*/ 