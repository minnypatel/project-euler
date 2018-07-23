var FizzBuzz  = {

    sumFizzBuzz: function (x) {
        var count = 1;
        var sum = 0;

        while(count < x) {
            if (count % 3 == 0 || count % 5 == 0) {
                sum += count;
            }
            count++;
        }
        return sum;
    }
}

module.exports = FizzBuzz;
