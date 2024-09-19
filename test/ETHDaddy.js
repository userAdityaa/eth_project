const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('ETHDaddy', () => { 
  let ethDaddy;
  let deployer, owner1;
  const Name = "ETH Daddy"
  const Symbol = "ETHD"

  beforeEach(async () => { 
    [deployer, owner1] = await ethers.getSigners();
    const ETHDaddy = await ethers.getContractFactory('ETHDaddy')
    ethDaddy = await ETHDaddy.deploy('ETH Daddy', 'ETHD')
  })

  describe('deployment', async () => { 
    it('has a name', async () => {
      const result = await ethDaddy.name()
      expect(result).to.equal(Name)
    })
  
    it('has a symbol', async () => { 
      let result = await ethDaddy.symbol()
      expect(result).to.equal(Symbol)
    })

    it('Sets the owner', async() => { 
      const result = await ethDaddy.owner()
      expect(result).to.equal(deployer.address)
    })
  })

})