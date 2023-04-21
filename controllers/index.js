const awesomeFunction = (req, res, next) => {
    res.json('Pedrus Saick');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson};
