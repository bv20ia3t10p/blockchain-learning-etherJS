const ethers = require('ethers')
// yarn add ethers
const fs = require('fs-extra')
// yarn add fs-extra
async function main() {
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545')
  const wallet = new ethers.Wallet(
    'bd997b1a70c73fde5eed29d5434cbec0673771f940f56105f5f2a42c8218ea26',
    provider,
  )
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8')
  const binary = fs.readFileSync(
    './SimpleStorage_sol_SimpleStorage.bin',
    'utf8',
  )
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
  console.log('Deploying, please wait')
  const contract = await contractFactory.deploy()
  console.log(contract)
}
main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
