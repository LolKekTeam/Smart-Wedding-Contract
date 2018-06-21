pragma solidity ^ 0.4.18;

contract money_box {
    address moneybox = 0xF078699400fE2e203622b9F8a1ede458F306EBDB;
    address addOne = 0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo = 0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;
    address Goal = 0x98ac5f4664f9f836d9c3CFdeba2B56b66d33f4CA;

    enum ActionChoices { send, money_to_goal }
    ActionChoices choice;

    function send()public
    payable
    {
        choice = ActionChoices.send;
        require(msg.value >= 10000000000000000);
        moneybox.transfer(msg.value);
    }

    function money_to_goal()public
    payable
    {
        choice = ActionChoices.money_to_goal;
        require(msg.value >= 10000000000000000);
        Goal.transfer(msg.value);
        selfdestruct(moneybox);
    }

    function getChoice()public constant returns(ActionChoices)
    {
        return choice;
    }
}