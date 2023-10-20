const placeTokenLinkButtons = () => {
    const tokenContract = getTokenContractAddress();

    const buttonsContainer = globalThis.getElementByXpath("//*[@id=\"ContentPlaceHolder1_divSummary\"]/div[1]/div[2]")
    const lastItem = buttonsContainer.children[buttonsContainer.children.length - 1]

    placeButton(buttonsContainer, lastItem, "btn-ds", "DEX Screener",
        `https://dexscreener.com/ethereum/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-dt", "DEXTools",
        `https://www.dextools.io/app/en/ether/pair-explorer/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-dexspy", "DexSpy",
        `https://dexspy.io/eth/token/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-defined", "Defined",
        `https://www.defined.fi/eth/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-coinscan", "CoinScan",
        `https://www.coinscan.com/tokens/eth/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-aegis", "Aegis Check",
        `https://analyze.aegisweb3.com/eth/${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-uniswap", "Uniswap",
        `https://app.uniswap.org/#/swap?outputCurrency=${tokenContract}&inputCurrency=ETH`)

    placeButton(buttonsContainer, lastItem, "btn-maestro", "Maestro",
        `https://t.me/MaestroSniperBot?start=${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-thunder", "Thunder",
        `https://thunder.eversify.com/terminal?address=${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-sensei", "Sensei",
        `https://app.sensei.win/defi?token=${tokenContract}`)

    placeButton(buttonsContainer, lastItem, "btn-waifu", "Waifu",
        `http://localhost:7780/uniswapqt?contractAddress=${tokenContract}&mode=v2&group=Default`)

    placeButton(buttonsContainer, lastItem, "btn-agony", "Agony",
        `http://localhost:6969/tasks/qt/defi?token=${tokenContract}`)
}

const getTokenContractAddress = () => {
    return document.querySelector("a[data-clipboard-text]").getAttribute("data-clipboard-text")
}

const placeButton = (container, lastItem, className, innerText, href) => {
    const newButton = document.createElement("a")
    newButton.className = `btn btn-sm btn-white ${className}`
    newButton.innerText = innerText
    newButton.href = href
    newButton.target = "_blank"
    container.insertBefore(newButton, lastItem)
}

placeTokenLinkButtons();



