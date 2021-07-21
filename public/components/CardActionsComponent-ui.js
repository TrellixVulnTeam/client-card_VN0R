export default function getHTML(){
	return `
<section class="section">
	<div id="greetingComponent-ui"></div>
	<div class="container">
			<div class="columns">
				<div class="column"></div>
				<div class="column is-three-fifths">
					<div class="hero">
							<div class="card">
								<div class="card-content">
									<div class="content">
										<div class="field">
											<div class="control">
												<button id ="creditAction" class="button is-primary is-fullwidth">Abonar</button>
											</div>
										</div>
										<div class="field">
											<div class="control">
													<button  id="redemAction" class="button is-fullwidth">Redimir</button>
											</div>
										</div>	
									<!--content -->
									</div>
								<!--card-content -->
								</div>
							<!--card -->
							</div>
					<!--hero -->
					</div>
				<!--column -->
			</div>
			<div class="column"></div>
		<!--columns -->
		</div>
	<!--container -->
	</div>
</section>`;
}