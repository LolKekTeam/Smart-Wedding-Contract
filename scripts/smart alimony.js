pragma solidity ^ 0.4.18;

contract alimony {
    address addOne = 0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo = 0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;
    uint debt;

    enum ActionChoices { ali_money1, ali_money2, age_of_your_child }
    ActionChoices choice;

    function age_of_your_child(uint age)public
    {
        choice = ActionChoices.age_of_your_child;
        debt = (18 - age) * 3;
    }

    function ali_money1()public
    payable
    {
        choice = ActionChoices.ali_money1;
        addTwo.transfer(msg.value);
        debt -= (msg.value / 1000000000000000000);
    }
    function ali_money2()public
    payable
    {
        choice = ActionChoices.ali_money2; 
        addOne.transfer(msg.value);
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