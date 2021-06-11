// Here are 3 ways for creating a function, no one way is better than the other, all that matters is that you are consistant

function firstWay() {
    console.log('This function has a chance of being overwritten');
}

const secondWay = function () {
    console.log("This function can't be overwritten and");
};

const thirdWay = () => {
    console.log("This function can't be overwritten");
};
