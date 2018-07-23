var Fibonacci = {

    sumFibonacci: function(x) {
        var num1 = 1;
        var num2 = 2;
        var num3 = 0;
        var sum = 0;

        while(num1 < x) {
            console.log('while loop starts');
            console.log('number 1 = ' + num1);
            console.log('number 2 = ' + num2);
            if(num1 % 2 === 0) {
                console.log('if statement starts');
                sum += num1;
                console.log(sum);
            }
            num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
        }
        return sum;  
    }

}

module.exports = Fibonacci;
