const style = `
.loading {
    position: absolute;
    inset: 0;
    background: rgba(253,22,105,.8);
    opacity: 1;
    animation: fade .1s linear;
}

@keyframes fade {
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
}

.d-none {
    display: none;
}

p {
  color: pink;
}

:host {
    background: #FFFFFF;
}

#app {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap:1rem;
    padding: 16px;
    max-width: 400px;
    margin: 0 auto;
    transition: opacity 420ms ease-in-out;
    box-shadow: 7.58877px 14.3019px 9.04815px rgba(93, 134, 194, 0.12);
    border-radius: 45px;
    overflow: hidden;
}

img {
    width: 101.5px;
    height: 101.5px;
    background: #FD1669;
    border-radius: 999px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 13.52px;
}

.tags span {
    padding: 4px 6px;
    background: #1F1F1F;
    border-radius: 2.70333px;
    color:#fff;
}

button:active{
    position: relative;
    top: 3px;
    left: 3px;
}

header {
  background-color: #252526;
  color: lime;
}
`

let tmpl = document.createElement("template")
tmpl.innerHTML = `<style>${style}</style>
<div id="app">
<div class="loading"></div>
<img src="">
<div class="name"></div>
<div class="description"></div>
<div class="tags"></div>
<a href="">
<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_511_1307)">
<rect x="5.38086" y="3.58398" width="25.2385" height="25.2385" rx="3.6998" fill="#00A6ED"/>
<path d="M16.5881 16.9082C16.5881 17.5558 16.4739 18.1044 16.2453 18.5539C16.0243 19.0035 15.6929 19.3463 15.251 19.5825C14.8091 19.8187 14.2605 19.9368 13.6053 19.9368C12.6605 19.9368 11.9367 19.6854 11.4339 19.1825C10.931 18.6797 10.6796 17.9368 10.6796 16.9539V11.6625H12.7024V16.8397C12.7024 17.3273 12.7786 17.6739 12.931 17.8797C13.091 18.0854 13.3272 18.1882 13.6396 18.1882C13.8529 18.1882 14.0281 18.1463 14.1653 18.0625C14.31 17.9711 14.4129 17.8263 14.4739 17.6282C14.5348 17.4301 14.5653 17.1635 14.5653 16.8282V11.6625H16.5881V16.9082ZM20.5615 11.6625C21.4606 11.6625 22.1349 11.8873 22.5844 12.3368C23.0339 12.7863 23.2587 13.4263 23.2587 14.2568C23.2587 14.653 23.2053 15.0263 23.0987 15.3768C22.992 15.7197 22.8282 16.0206 22.6072 16.2797C22.3863 16.5387 22.1006 16.7444 21.7501 16.8968C21.3996 17.0416 20.9806 17.1139 20.493 17.1139H20.0358V19.8225H18.013V11.6625H20.5615ZM20.4244 13.3539H20.0358V15.4225H20.2872C20.4777 15.4225 20.6415 15.3844 20.7787 15.3082C20.9234 15.232 21.0339 15.1101 21.1101 14.9425C21.1939 14.7749 21.2358 14.5539 21.2358 14.2797C21.2358 13.9825 21.1672 13.7539 21.0301 13.5939C20.9006 13.4339 20.6987 13.3539 20.4244 13.3539ZM26.0325 16.9425H24.3639L24.0782 11.6625H26.3068L26.0325 16.9425ZM24.1011 18.8968C24.1011 18.5387 24.1963 18.272 24.3868 18.0968C24.5849 17.9139 24.8554 17.8225 25.1982 17.8225C25.5258 17.8225 25.7849 17.9139 25.9754 18.0968C26.1658 18.272 26.2611 18.5387 26.2611 18.8968C26.2611 19.2473 26.162 19.5139 25.9639 19.6968C25.7658 19.872 25.5106 19.9597 25.1982 19.9597C24.8706 19.9597 24.6039 19.872 24.3982 19.6968C24.2001 19.5139 24.1011 19.2473 24.1011 18.8968Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_511_1307" x="0.876753" y="0.205905" width="34.2465" height="34.2467" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.12603"/>
<feGaussianBlur stdDeviation="2.25205"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_511_1307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_511_1307" result="shape"/>
</filter>
</defs>
</svg>
</a>
</div>`

class LuksoPowerUp extends HTMLElement {
  static observedAttributes = ["wallet-addr"]

  constructor() {
    super()

    this.attachShadow({
      mode: "open",
    })
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true))
  }

  loading() {
    this.shadowRoot.querySelector(".loading").classList.toggle("d-none")
  }

  readProfile() {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_call",
      params: [
        {
          to: this.walletAddress,
          data: "0x54f6127f5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
        },
        "latest",
      ],
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch(`https://rpc${this.getAttribute(`network`) === "testnet" ? ".testnet" : ""}.lukso.gateway.fm`, requestOptions)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data)
        const hex = data.result.substr(210, 106)

        console.log(`hex`, hex)

        let bytes = [],
          str
        for (var i = 0; i < hex.length - 1; i += 2) bytes.push(parseInt(hex.substr(i, 2), 16))

        str = String.fromCharCode.apply(String, bytes).replace("ipfs://", "").replace("://", "").trim()

        console.log(str)

        const response = await fetch(`https://api.universalprofile.cloud/ipfs/${encodeURI(str)}`)
        if (!response.ok) throw new Response("Failed to get data", { status: 500 })
        const json = await response.json()
        console.log(json)
        this.shadowRoot.querySelector("img").src = `https://api.universalprofile.cloud/ipfs/${json.LSP3Profile.profileImage[0].url.replace("ipfs://", "")}`
        this.shadowRoot.querySelector(".name").innerHTML = `@${json.LSP3Profile.name}`
        this.shadowRoot.querySelector(".description").innerHTML = `${json.LSP3Profile.description}`
        json.LSP3Profile.tags.map((item) => {
          this.shadowRoot.querySelector(".tags").innerHTML += `<span class="tag">${item}</span>`
        })
        this.shadowRoot.querySelector("a").href = `https://wallet.universalprofile.cloud/${this.walletAddress}?network=mainnet&referrer=lukso-power-upfs`

        this.loading()
      })
      .catch((error) => console.error(error))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`)
    this.walletAddress = newValue
    this.readProfile()
  }

  getTmpl() {
    return tmpl
  }

  getTmplRaw() {
    return tmpl.innerHTML
  }

  connectedCallback() {
    console.log("Custom element added to page.")
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.")
  }
}
customElements.define("lukso-powerup", LuksoPowerUp)
