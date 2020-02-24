module.exports = function toReadable(number) {

    const obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    };




    if (number <= 20) {
        return obj[number]

    } else if (number > 20 && number < 100 && number % 10 == 0) {
        return obj[number]

    } else if (number > 20 && number < 100 && number % 10 !== 0) {
        return obj[Math.trunc(number / 10) * 10] + ' ' + obj[number % 10]

    } else if (number >= 100 && number <= 999 && number % 100 == 0) {
        return obj[number / 100] + ' hundred'

    } else if (number >= 100 && number <= 999 && number % 100 !== 0) {
        if (String(number).charAt(2) == 0 || String(number).charAt(1) == 0 || String(number).charAt(1) == 1) {
            return obj[Math.trunc(number / 100)] + ' hundred ' + obj[number % 100]
        } else {
            let str = String(number).slice(1);
            return obj[Math.trunc(number / 100)] + ' hundred ' + obj[Math.trunc(str / 10) * 10] + ' ' + obj[str % 10]
        }
    }
}
