module.exports = function toReadable (number) {
    let oneNum = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    
    let twoNum = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    let tenS = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
 
    const hundred = 'hundred';

    let readable = [oneNum, twoNum, tenS];

    let result = String(number).split('');

    let a = result[0];
    let b = result[1];
    let c = result[2];

        if (result.length == 1) {
            return (oneNum[a]);
        }

        if (result.length == 2) {
            if (number < 20)
            return (readable[a][b]);
            else if (number >= 20 && b == 0)
            return (readable[2][a]);
            else return (readable[2][a] + ' ' + oneNum[b]);
        }

        if (result.length == 3) {
            if (b == 0 && c == 0) return (oneNum[a] + ' ' + hundred);       // 100
            else if (c == 0) return (oneNum[a] + ' ' + hundred + ' ' + readable[2][b]); //tenS
            else if (b == 0) return (oneNum[a] + ' ' + hundred + ' ' + oneNum[c])// 101-109
            else if (+(b + c) < 20)                                             // 111 - 119
            return (oneNum[a] + ' ' + hundred + ' ' + readable[1][c]); 
            else if (+(b + c) > 20) 
            return (oneNum[a] + ' ' + hundred + ' ' + readable[2][b] + ' ' + oneNum[c]);
        }

}
