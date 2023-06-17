<script>
	let login = true;

	let showLogin = () => {
		login = !login;
	};
</script>

{#if login}
	<div class="card mt-4">
		<h5 class="card-header">Login</h5>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label for="userName" class="form-label">Username</label>
					<input type="email" class="form-control" id="userName" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" id="password" />
				</div>
			</form>
			<button type="button" class="btn btn-primary">Log in</button>
			<button type="button" class="btn btn-warning" on:click={showLogin}
				>Go to create account</button
			>
		</div>
	</div>
{:else}
	<div class="card mt-4">
		<h5 class="card-header">Create account</h5>
		<div class="card-body">
			<form>
				<div class="mb-3">
					<label for="userName" class="form-label">Username</label>
					<input type="email" class="form-control" id="userName" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" id="password" />
				</div>
			</form>
			<button type="button" class="btn btn-primary">Create Account</button>
			<button type="button" class="btn btn-warning" on:click={showLogin}>Go to login</button>
		</div>
	</div>
{/if}
