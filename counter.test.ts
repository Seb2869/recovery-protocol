import { expect } from "chai";
import { ethers } from "hardhat";

describe("CounterBase", function () {
  it("increments and decrements", async () => {
    const C = await ethers.getContractFactory("CounterBase");
    const c = await C.deploy();
    await c.waitForDeployment();
    await c.inc();
    expect(await c.current()).to.equal(1);
    await c.dec();
    expect(await c.current()).to.equal(0);
  });
});
