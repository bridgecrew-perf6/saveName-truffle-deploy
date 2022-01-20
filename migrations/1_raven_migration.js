// const Lottery = artifacts.require("Lottery");

// module.exports = function (deployer) {
//   deployer.deploy(Lottery, 5, 60, 20, 70, 4);
// };


// const PocketDoge = artifacts.require("PocketDoge");

// module.exports = function (deployer) {
//   // deployer.deploy(Lottery, 5, 60, 20, 70, 4);

//   // address development,
//   // address marketing,
//   // address _liquidityWallet,
//   // address router,
//   // string memory name,
//   // string memory ticker,
//   // string memory tracker,
//   // string memory trackerTicker
  

// // DEVELOPMENT=0xb1F7D313Ce45fe62EdE9CE4cfb46833051d38e57
// // MARKETING=0xfa3d26f18456248146A008fE251F285C2940664b
// // LIQUIDITYWALLET=0x381E24e9b0FbdFaEE350F180980bE0b99D292573
// // ROUTER=0x7e81157163846d11fBd36C12A135703285bb370C

//   deployer.deploy(PocketDoge, "pocketDoge", "PKDG", "pTracker", "PKDGTR");
// };

const SaveName = artifacts.require("SaveName");

module.exports = function (deployer) {
  deployer.deploy(SaveName, 2);
};