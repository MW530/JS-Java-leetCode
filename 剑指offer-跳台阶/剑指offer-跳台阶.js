function jumpFloor(number)
{
    // write code here
        if (number <= 0) {
            return 0;
        }
        if (number == 1) {
            return 1;
        }
        if (number == 2) {
            return 2;
        }
        var first = 1, second = 2, third = 0;
        for (var i = 3; i <= number; i++) {
            third = first + second;
            first = second;
            second = third;
        }
        return third;
}
module.exports = {
    jumpFloor : jumpFloor
};
