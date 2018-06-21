pragma solidity ^ 0.4.18;

contract brak {

    enum ActionChoices { send_h, send_w, send_t, razvodAuto, razvod50na50, razvodKoef }
    ActionChoices choice;

    address own = 0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address addOne = 0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo = 0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;
    address adThrid = 0x95Fa3CbF9D1e54226Be8Cb3373f2BDE5bA04A853;
    uint p1 = 0; uint p2 = 0; uint p3 = 0;
    
    function send_h(uint amount)public
    payable
    {
        choice = ActionChoices.send_h;
        p1 += amount;
        require(msg.value >= 10000000000000000);
        own.transfer(msg.value);
    }

    function send_w(uint amount)public
    payable
    {
        choice = ActionChoices.send_w;
        p2 += amount;
        require(msg.value >= 10000000000000000);
        own.transfer(msg.value);
    }

    function send_t(uint amount)public
    payable
    {
        choice = ActionChoices.send_t;
        p3 += amount;
        require(msg.value >= 10000000000000000);
        own.transfer(msg.value);
    }


    function razvodAuto() public
    payable
    {
        choice = ActionChoices.razvodAuto;
        addOne.transfer(((msg.value - p3) / (p1 + p2) * p1) + (p3 / 2));
        addTwo.transfer(((msg.value - p3) / (p1 + p2) * p2) + (p3 / 2));
        selfdestruct(own);
    }


    function razvod50na50() public
    payable
    {
        choice = ActionChoices.razvod50na50;
        require(msg.value >= 10000000000000000);
        addOne.transfer(msg.value / 2);
        addTwo.transfer(msg.value / 2);
        selfdestruct(own);
    }

    function razvodKoef(uint k) public
    payable
    {

        choice = ActionChoices.razvodKoef;
        require(msg.value >= 10000000000000000);
        addOne.transfer(msg.value * k / 100);
        addTwo.transfer(msg.value * (100 - k) / 100);
        selfdestruct(own);
    }

    function getChoice()public constant returns(ActionChoices)
    {
        return choice;
    }
    function getP1()public constant returns(uint)
    {
        return p1;
    }
    function getP2()public constant returns(uint)
    {
        return p2;
    }
    function getP3()public constant returns(uint)
    {
        return p3;
    }
}