// Converting dates to min sec hours and days
const convert = (date1, date2 = null, action = '-', decimals = 0) => {

    if(typeof date1 !== 'number') {
        date1 = new Date(date1).getTime()
    }
    if(typeof date2 !== 'number') {
        date2 = new Date(date2).getTime()
    }

    let number;
    let totalSeconds;
    let days;
    let hours;
    let minutes;
    let seconds;

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
        return console.warn(date1 + `isn't a date, received ` + typeof date1)
    }

    } else {
        try {
        let first = date1
        let second = date2

        

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
        return console.warn(date1 + `isn't a date, received ` + typeof date1)
    }
        
   
    }

}

module.exports = convert          