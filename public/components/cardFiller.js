import escape from "../utils/stringUtils.js";
import html from "./CardComponent-ui.html";
import BaseComponent from "./base_component/BaseComponent.js";

export default class CardComponent extends BaseComponent{
  constructor(container) {
  	super(container, html);
    this.type  = "read-only";
    this.qrcode = null;
	this.uiElements = {
		qrComponent: {id:"#qrHolder"},
		cardTitle: {id:"#card-title"},
		cardPoints: {id:"#card-points"},
	};
	this.mapColor = {"1":"#ff0000","2":"#ff00ff"};
    
  }

  qRSizes(pageWidth){
  	if(pageWidth<200){
  		return 150;
  	}else if(pageWidth >200 && pageWidth < 500){
  		return pageWidth-50;
  	}else{
  		return 500;
  	}
  }

  init(){
  	super.init();
  }

  createCardElement(card){

	  	let pageWidth = document.body.clientWidth;
		let width, height;
		width = height = this.qRSizes(pageWidth);
	
		let qrColor  = this.mapColor[card.brand.brandColor]||"#000000";
  		this.qrcode = new QRCode(this.uiElements.qrComponent.el, {
						width : width,
						height : height,
						colorDark: qrColor,
						logo: card.brand.logoURL
					});
  		
		this.qrcode.makeCode(card.value);
		let qrElement = document.querySelector("#qrElement");
		if(qrElement){
			qrElement.focus();
			console.log("Centering app to qrCode");
		} 
		this.uiElements.cardTitle.el.innerHTML = escape(card.brand.name);
		this.uiElements.cardPoints.el.innerHTML = card.points;
  }
}
