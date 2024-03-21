class posts extends HTMLElement {
	constructor () {
		super();
	}
	connectedCallback() {

		const shadow = this.attachShadow({ mode: "open" });

		//create boxes
		const boxCard = document.createElement("div");
		boxCard.setAttribute("class", "card-st-2 ta-s");

		//title card
		const titleCard = boxCard.appendChild(document.createElement("h2"));
		titleCard.setAttribute("class", "title-p", "ta-s");
		titleCard.textContent = this.getAttribute("title");

		//text content
		const paragraphCard = boxCard.appendChild(document.createElement("p"));
		paragraphCard.setAttribute("class", "ta-s");
		
		//take atr and put in <p>
		const text = this.getAttribute("data-content");
		paragraphCard.textContent = text;

		const link = paragraphCard.appendChild(document.createElement("a"));
		const linkHref = this.getAttribute("link")
		link.setAttribute("class","ta-en");
		link.setAttribute("href", linkHref)
		link.textContent = ' '+ "Ler mais";
		
		//create terminal
		/*const terminalCard = paragraphCard.appendChild(document.createElement("div"));
		terminalCard.setAttribute("class", "tips-trm ta-s rl pd-10p")
		terminalCard.textContent = this.hasAttribute("trm") ? this.getAttribute("trm") : ""
		*/
		const style = document.createElement("style");

		style.textContent = 
		`.card-st-2 {
			margin: 1rem 0.5rem;
			border-radius: 0.6rem;
			background-color: rgb(238, 238, 238);
			padding: 2rem;
			width: 75%;
			min-height: 20rem;
			font-size: 20px;
			display: inline-block;
			text-overflow: ellipsis;
			word-wrap: break-word;
			overflow: hidden;
			line-height: 1.4em;
			box-shadow: 3px 5px 8px -4px rgba(0,0,0,0.75);
			-webkit-box-shadow: 3px 5px 8px -4px rgba(0,0,0,0.75);
			-moz-box-shadow: 3px 5px 8px -4px rgba(0,0,0,0.75);
		}
		.aias-c {
			align-items: center;
			align-self: center;
		}
		.ta-en {
			display:flex;
			text-align:left;
			text-decoration:none;
		}
		.ta-s {
			text-align: start;
		}
		.tips-trm {
			background-color: black;
			color: white;
		}
		.t-1r {
			top: -4rem;
		}
		
		.t-20 {
			top: -20px;
		}
		
		.t-13 {
			top: -13px;
		}
		
		.rl {
			position: relative;
		}
		
		.aita-c {
			text-align: center;
			align-items: center;
		}
		
		.aias-c {
			align-items: center;
			align-self: center;
		}
		
		.pd-10p {
			padding: 10px;
		}
		
		.pd-10r {
			padding: 10rem;
		}
		
		.pd-30p {
			padding: 30px;
		}
		
		.pd-1r {
			padding: 1rem;
		}
		
		.dy-ib {
			display: inline-block;
		}
		
		.ta-s {
			text-align: start;
		}
		
		.wd-15r {
			width: 15rem;
			height: 30px;
		}
		
		.w-150p {
			width: 150px;
			height: 25px;
		}
		@media only screen and (max-width: 700px) {
			.card-st-2 {
				max-width:75%;
				height:100%;
		}
		`;
		shadow.appendChild(style);
		shadow.appendChild(boxCard);
		boxCard.appendChild(paragraphCard);
		
	}
}
customElements.define("card-s", posts);