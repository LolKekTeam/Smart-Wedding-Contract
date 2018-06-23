pragma solidity ^ 0.4.18;

contract brak {

    enum ActionChoices { setAddresses, send_h, send_w, send_t, razvodAuto, razvod50na50, razvodKoef }
    ActionChoices choice;

    address own = 0x96ae57e6370ab3c547f91af35998d35d98a5e727;
    address addOne = 0xa6d2f20f7f38e9cc9016430dcfa0752229118a55;
    address addTwo = 0xaeadd10c6a168eeb02d24a1cb6d542a7c1903775;
    /*address addThrid = 0x95Fa3CbF9D1e54226Be8Cb3373f2BDE5bA04A853;*/
    uint p1 = 0; uint p2 = 0; uint p3 = 0; /*uint b1 = 0; uint b2 = 0; uint b3 = 0;
    address addOne; address addTwo; address own;*/ uint k;

    /*function setAddresses(address _addOne, address _addTwo, address _own, uint _k) public 
    {
        choice = ActionChoices.setAddresses;
        addOne = _addOne; addTwo = _addTwo; own = _own; k = _k;
    }*/
    mapping(address => uint256) balances;
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

    function razvodKoef() public
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
    function getRazvod() public constant returns(uint256 b1, uint256 b2, uint256 b3) {
        return (addOne.balance / 1000000000000000000, addTwo.balance / 1000000000000000000, own.balance / 1000000000000000000);
    }
}