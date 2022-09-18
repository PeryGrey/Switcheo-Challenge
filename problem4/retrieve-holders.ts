import axios from 'axios';

// return types for functions
type Wallet = {
  address: string;
  amount: number;
};
type GetWalletsResponse = {
  data: Wallet[];
  result: string;
};

// given data
const contractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
const accounts = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392',
];
const apiKey = 'V99GBXHEM5RAM4BWRABQWGYNBMME82X81R';

// async function to get data from BSC contract
async function getWallets(account: string) {
  try {
    // data: GetWalletsResponse
    // modified link from https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
    const { data, status } = await axios.get<GetWalletsResponse>(
      `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${account}&tag=latest&apikey=${apiKey}`
    );

    // desire output display
    await console.log(account, +data.result / 10 ** 8);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

// loop through all wallet addresses for amount $SWTH token held
for (let account of accounts) getWallets(account);
