pragma solidity ^ 0.4.18;

contract death1 {
    address own =0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address addOne =0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo =0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;

    function death_money() public 
	payable
{
        addTwo.transfer(msg.value);
        selfdestruct(own);
        selfdestruct(addOne);
    }
}
contract death2 {
    address own =0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address addOne =0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo =0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;

    function death_money() public 
	payable
{
        addOne.transfer(msg.value);
        selfdestruct(own);
        selfdestruct(addTwo);
    }
}
contract death_with_third_faces2 {
    address own = 0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address addOne = 0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo = 0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;
    address addThird = 0x95fa3cbf9d1e54226be8cb3373f2bde5ba04a853;

    function death_money() public
    payable
    {
        addOne.transfer(msg.value / 2);
        addThird.transfer(msg.value / 2);
        selfdestruct(own);
        selfdestruct(addTwo);
    }
}
contract death_with_third_faces1 {
    address own = 0x0B361c9Fd431fCaBE0A4D9d9F32E7680136C56d7;
    address addOne = 0xE27623a11d5B67e2C4d54326eA5FB00f0eA20398;
    address addTwo = 0x3d7992cFbBeeFaEdde4cFc44A68a93Dd0630709F;
    address addThird = 0x95fa3cbf9d1e54226be8cb3373f2bde5ba04a853;

    function death_money() public
    payable
    {
        addTwo.transfer(msg.value / 2);
        addThird.transfer(msg.value / 2);
        selfdestruct(own);
        selfdestruct(addOne);
    }
}