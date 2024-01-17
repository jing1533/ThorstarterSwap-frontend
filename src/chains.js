
export class ThorchainClient {
  constructor(midgardUrl, asset) {
    this.midgardUrl = midgardUrl;
    this.asset = asset;
  }

  async balance(address) {
    const coins = (await this.request("/balance/" + address)).coins;
    const coin = coins.find((c) => c.asset === this.asset);
    if (!coin) return 0;
    return parseFloat(coin.amount) / (coin.asset === "CACAO" ? 1e10 : 1e8);
  }

  async balances(address, pools = []) {
    if (this.asset !== "CACAO") {
      return [{ asset: this.asset, balance: await this.balance(address) }];
    }
    const coins = (await this.request("/balance/" + address)).coins;
    return coins.map((c) => ({
      asset: c.asset.includes("/") ? c.asset : "MAYA." + c.asset,
      balance:
        parseFloat(c.amount) /
        (c.asset === "MAYA" ? 1e4 : c.asset === "CACAO" ? 1e10 : 1e8),
    }));
  }

  async request(path) {
    return await (await fetch(this.midgardUrl + "/v2" + path)).json();
  }
}

export class BitcoinClient {
  async balance(address) {
    const url = "https://blockchain.info";
    const url2 = "https://blockchair.info";
    let b;
    try {
      b = await (await fetch(url + "/q/addressbalance/" + address)).text();
    }
    catch {
      console.log((await (await fetch("https://api.blockchair.com/bitcoin/addresses/balances?addresses=" + address)).json()).data)
      b = (await (await fetch("https://api.blockchair.com/bitcoin/addresses/balances?addresses=" + address)).json()).data;
      b = b[address];
      if (!b) b = 0;
      console.log(b)
    }
    return parseFloat(b) / 1e8;
  }

  async balances(address) {
    return [{ asset: "BTC.BTC", balance: await this.balance(address) }];
  }
}
