const placeTokenLinkButtons = () => {
    const tokenContract = getTokenContractAddress();

    const buttonsContainer = globalThis.getElementByXpath("//*[@id=\"ContentPlaceHolder1_divSummary\"]/div[1]/div[2]")
    const lastItem = buttonsContainer.children[buttonsContainer.children.length - 1]

    const dsButton = document.createElement("a")
    dsButton.className = "btn btn-sm btn-white btn-ds"
    dsButton.innerText = "DEX Screener"
    dsButton.href = `https://dexscreener.com/ethereum/${tokenContract}`
    dsButton.target = "_blank"
    buttonsContainer.insertBefore(dsButton, lastItem)

    const dtButton = document.createElement("a")
    dtButton.className = "btn btn-sm btn-white btn-dt"
    dtButton.innerText = "DEXTools"
    dtButton.href = `https://www.dextools.io/app/en/ether/pair-explorer/${tokenContract}`
    dtButton.target = "_blank"
    buttonsContainer.insertBefore(dtButton, lastItem)

    const dexSpyButton = document.createElement("a")
    dexSpyButton.className = "btn btn-sm btn-white btn-dexspy"
    dexSpyButton.innerText = "DexSpy"
    dexSpyButton.href = `https://dexspy.io/eth/token/${tokenContract}`
    dexSpyButton.target = "_blank"
    buttonsContainer.insertBefore(dexSpyButton, lastItem)

    const definedButton = document.createElement("a")
    definedButton.className = "btn btn-sm btn-white btn-defined"
    definedButton.innerText = "Defined"
    definedButton.href = `https://www.defined.fi/eth/${tokenContract}`
    definedButton.target = "_blank"
    buttonsContainer.insertBefore(definedButton, lastItem)

    const coinScanButton = document.createElement("a")
    coinScanButton.className = "btn btn-sm btn-white btn-coinscan"
    coinScanButton.innerText = "CoinScan"
    coinScanButton.href = `https://www.coinscan.com/tokens/eth/${tokenContract}`
    coinScanButton.target = "_blank"
    buttonsContainer.insertBefore(coinScanButton, lastItem)

    const aegisButton = document.createElement("a")
    aegisButton.className = "btn btn-sm btn-white btn-aegis"
    aegisButton.innerText = "Aegis Check"
    aegisButton.href = `https://analyze.aegisweb3.com/eth/${tokenContract}`
    aegisButton.target = "_blank"
    buttonsContainer.insertBefore(aegisButton, lastItem)

    const uniswapButton = document.createElement("a")
    uniswapButton.className = "btn btn-sm btn-white btn-uniswap"
    uniswapButton.innerText = "Uniswap"
    uniswapButton.href = `https://app.uniswap.org/#/swap?outputCurrency=${tokenContract}&inputCurrency=ETH`
    uniswapButton.target = "_blank"
    buttonsContainer.insertBefore(uniswapButton, lastItem)

    const maestroButton = document.createElement("a")
    maestroButton.className = "btn btn-sm btn-white btn-maestro"
    maestroButton.innerText = "Maestro"
    maestroButton.href = `https://t.me/MaestroSniperBot?start=${tokenContract}`
    maestroButton.target = "_blank"
    buttonsContainer.insertBefore(maestroButton, lastItem)

    const thunderButton = document.createElement("a")
    thunderButton.className = "btn btn-sm btn-white btn-thunder"
    thunderButton.innerText = "Thunder"
    thunderButton.href = `http://localhost:7777/quickTask?contract=${tokenContract}&function=customSwap&params=DEFAULT&price=DEFAULT&mode=SAFE`
    thunderButton.target = "_blank"
    buttonsContainer.insertBefore(thunderButton, lastItem)

    const senseiButton = document.createElement("a")
    senseiButton.className = "btn btn-sm btn-white btn-sensei"
    senseiButton.innerText = "Sensei"
    senseiButton.href = `https://app.sensei.win/defi?token=${tokenContract}`
    senseiButton.target = "_blank"
    buttonsContainer.insertBefore(senseiButton, lastItem)

    const waifuButton = document.createElement("a")
    waifuButton.className = "btn btn-sm btn-white btn-waifu"
    waifuButton.innerText = "Waifu"
    waifuButton.href = `http://localhost:7780/uniswapqt?contractAddress=${tokenContract}&mode=v2&group=Default`
    waifuButton.target = "_blank"
    buttonsContainer.insertBefore(waifuButton, lastItem)

    const agonyButton = document.createElement("a")
    agonyButton.className = "btn btn-sm btn-white btn-agony"
    agonyButton.innerText = "Agony"
    agonyButton.href = `http://localhost:6969/tasks/qt/defi?action=buy&token=${tokenContract}&slippage=5&value=0.05`
    agonyButton.target = "_blank"
    buttonsContainer.insertBefore(agonyButton, lastItem)
}

const getTokenContractAddress = () => {
    return document.querySelector("a[data-clipboard-text]").getAttribute("data-clipboard-text")
}

placeTokenLinkButtons();



