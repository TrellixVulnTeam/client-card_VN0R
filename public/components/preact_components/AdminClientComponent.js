
import { h, Component, render } from 'preact';
import HtmlComponents from './components/HtmlComponents.js';
import PaginationComponent from './components/PaginationComponent.js';
import requests from '../../api/request.js';
import {AlertModal} from '../authorization/AlertComponent.js';
import htm from 'htm';


const html = htm.bind(h);
const clientColumns = ["", "Id","Nombre", "Puntos"];


						
export default class AdminClientcomponent extends Component  { 



	constructor(container, callBack, brandID){
		super();
		this.container = container;
		this.brandId = brandID;
		
	}

	disable(cardId, brandId, that){
		render(html `<p>¿Esta seguro de deshabilitar esta tarjeta?</p>`,AlertModal.getContent());
		
		AlertModal.show(()=>{
			requests.disableCard(cardId, brandId, ()=>{
				that.init(brandId);
			});
		});
	}

	TableComponent(props) {


		const isEnable = (el)=>{
			return html`<td>
							<span class="icon ${el.enable? html`has-text-success`: html`has-text-light`}">
				  				<i class="fas fa-circle"></i>
							</span>
						</td>`;
		}
		let columns =  props.columns.map((el)=>html `<th>${el}</th>`);

		
		const disableButton = (el)=>{
			let btn = h('button',{className:"delete has-background-danger", onClick: ()=>props.that.disable(el.cardId, props.brandId, props.that)}, "Deshabilitar");
			return html`<td>${btn}</td>`;
		}

		const button = this.DisableButton;
		let rows = props.rows.map((el)=>{

										return h('tr',null,
												[isEnable(el),
												 h('td', null, el.cardId),
												 h('td', null, el.name),
												 h('td', null, el.points)
												 /*h('td', null, disableButton(el))*/
												 ]);
										/*return html `<tr onClick={${alert}}>
														${isEnable(el)}
														<td>${el.name}</td>
														<td>${el.points}</td>
														${disableButton()}
													</tr>`*/
										});
		  
		return html `<table class="table is-narrow"> 
		  				<thead> 
	  						<tr>
		  						${columns}	
		  					</tr>
		  				</thead>
		  				${html `<tbody>${rows}</tbody>`}
	  				</table> `;
	}


	go(brandId, page){
		let go = ()=> this.go(brandId, page);
		let goToPage = (page)=> this.go(brandId, page);

		let iconRefresh = 
							h('a', {className:"pagination-next", onClick :go},
							["Actualizar", h('span', {className : "icon-text  has-text-success is-clickable" },
								html `<i class="fas fa-refresh"></i>`)]);

		let pageSize = 3;

		requests.getClientsByBrand((response)=>{

			let pagination = html `<${PaginationComponent} 
									go="${goToPage}" 
									pageSize=${pageSize} 
									total=${response.total}
									current=${page}>${iconRefresh}</${PaginationComponent}> `;

	    	 let clients = response.hits;
	 
			 render(html`<div class="table-container">
			 				<span class="title">Tarjetas afiliadas</span>
			 				<div id="modal"></div>
						 	<${this.TableComponent} 
						 				columns="${clientColumns}"
					 					rows="${clients}"
					 					that="${this}"
					 					brandId="${brandId}"/>
			 				 ${pagination}
		 				 </div>`,
		 		this.container);	
	    },brandId,pageSize, (page-1)*pageSize);
	}

	init(brandId){

		
		let goToPage = (page)=> this.go(brandId, page);
		let refresh = ()=> this.init(brandId);

		let iconRefresh = 
							h('a', {className:"pagination-next", onClick :refresh},
							["Actualizar", h('span', {className : "icon-text  has-text-success is-clickable" },
								html `<i class="fas fa-refresh"></i>`)]);
		let pageSize = 3;
		

		requests.getClientsByBrand((response)=>{

			let pagination = html `<${PaginationComponent} 
									go="${goToPage}" 
									pageSize=3
									total=${response.total}
									current=1>${iconRefresh}</${PaginationComponent}>`;
	    	let clients = response.hits;
	 
			render(html`<div class="table-container">
			 				<span class="title">Tarjetas afiliadas</span>
			 				<div id="modal"></div>
						 	<${this.TableComponent} 
						 				columns="${clientColumns}"
					 					rows="${clients}"
					 					that="${this}"
					 					brandId="${brandId}"/>
			 				 ${pagination}
		 				 </div>`,
		 		this.container);	
	    },brandId, pageSize)
	
	}

}