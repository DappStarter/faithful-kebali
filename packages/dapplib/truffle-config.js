require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remember hole give arena bottom gate'; 
let testAccounts = [
"0x8ee253948535ccfa9b9e04be187e189c3af6cc874a4d905abd247529e1ad3b9c",
"0x90712095afc17cd0278d36999e8d5221e3f0b2fa01dc168d6152548da42aa63c",
"0xd6b35eb86f2bf8601042b3e10f76c12acc97c8230280f9712c8ca890bb9a60e4",
"0x7b582af85f99d8b49a11567d5ad7b4fcea7d55ab68bc5fa2de62be94b6dab022",
"0x07f05c83135ae888906128c9e3a30acfaf4997ac7eae90152f85e98d3ffc4fc1",
"0xde264e8e1d1ba0e7321031d77a82f6bb82549f6edb8377735ab0a2d7afe6b359",
"0x937ed5fa8557535617914e0bed5afa9cea05f40ff77e13960a27dfdf29e42e4c",
"0x1e07e7d41d7178d58c35858530233f79f9a0a346c3b61cd9dc39d22e2a195168",
"0x87a5ddd33e1a00028a147242325ae8a3175d8d0206dd3b86436bc10096cb071a",
"0x7fe408e726c239014b57d0b4e167727228c62e2adff27874dc3ae51c006ffb29"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

