export default function getHTML(){
	return `<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="/assets/logo.png">
					</figure>
				</div>
				<div class="card-content">
					<div class="content">
					<h1 class="title">Iniciar sesión</h1>
						<div class="field">
							<label class="label">Correo</label>
							<div class="control">
								<input autofocus=true class="input" name="email" id="emailInput" type="text" placeholder="Ingrese su correo">
							</div>
						</div>
					<div class="field">
					<label class="label">Contraseña </label>
					<div  is-password=true class="control has-icons-right"> 
						<input class="input" id="passwordInput" name="password" type="password">
						<a>
						 	<span class="icon is-small is-right" style="pointer-events: all; cursor: pointer">
	    					  <i class="fas fa-eye-slash"></i>
							</span>
						</a>
					</div>
				</div>
				<div class="field is-grouped">
					 <div class="control"> 
					 	<button class="button is-link" id="loginBtn">Iniciar Sesión</button>
						<a href="/signin" class="button is-success">Registrarse</a>					 	
				 	</div>
			 	</div>
		 	</div>
	 	</div>
 	</div>`;
}