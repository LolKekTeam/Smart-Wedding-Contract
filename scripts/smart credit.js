pragma solidity ^ 0.4.18;

contract credit {
    address own = 0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address Goal = 0x98ac5f4664f9f836d9c3CFdeba2B56b66d33f4CA;
    address bank = 0xDf85431fD9E674eD591ad1E0D325216F23d55CB0;
    uint debt;

    enum ActionChoices { getMoney, credit_money }
    ActionChoices choice;

    function getMoney()public
    payable
    {
        choice = ActionChoices.getMoney;
        require(msg.value >= 10000000000000000);
        Goal.transfer(msg.value);
        debt = msg.value;
        debt = (debt * 2) / 1000000000000000000;
    }

    function credit_money()public
    payable
    {
        choice = ActionChoices.credit_money;
        bank.transfer(msg.value);
        debt -= (msg.value / 1000000000000000000);
    }

    function WhatIsMyDebt()public constant returns(uint)
    {
        return (debt);
    }

    function getChoice()public constant returns(ActionChoices)
    {
        return choice;
    }
}