require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strong deny spike purse hundred light army gesture'; 
let testAccounts = [
"0x41d23800435a853e056e19331416cb1d458265e29553fe11d47da26673e2872e",
"0x86c899940f53d1d12e66cb6cb2738a8ce0f6dc9f2861487dc11f625ef3b0dd42",
"0x0d36423ccb89977118515459db8108a3d608131c2ed56a90c45e643b8a313743",
"0xb8e2947175c6cb46464cc90c11fc0e22e219223b4ced2bfae37466f195494fee",
"0xa4d5b96b172a6ff5b0135ad9f798cf9fbd9f553717c5ab1489c000ec8a75ee47",
"0x82a440023514f143b280e9511ab55d8b70a7ba3e7b3c29dc26149874b96feb9d",
"0x0e453725e475eb3e32b1c28053a16326a3176c81f01dffdc7428da4fc85fbb69",
"0x097310251bece0fc4739517fd7c9c7b79388b96f44fb7fd98e9e4e79099861ce",
"0x800da972cf621e478d4bf6108fbfd63f3cce099ec33dd003cdd3759e45c51930",
"0x3ee9c1b4de49afef0fffff79ce727ca79a6d5f74fbf225a82cc639bb5e9709a9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


