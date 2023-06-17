<script lang="ts">
	let login = true;
	export let form: any;
	let showLogin = () => {
		login = !login;
	};
</script>

{#if form?.success}
	<div class="alert alert-success" role="alert">Logged in</div>
{/if}

{#if login}
	<div class="card mt-4">
		<h5 class="card-header">Login</h5>
		<div class="card-body">
			<form method="POST" action="?/login" class="mb-3">
				<div class="mb-3">
					<label for="userName" class="form-label">Username</label>
					<input type="text" class="form-control" name="userName" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" name="password" />
				</div>
				<button class="btn btn-primary">Log in</button>
			</form>
			<button type="button" class="btn btn-warning" on:click={showLogin}
				>Go to create account</button
			>
		</div>
	</div>
{:else}
	<div class="card mt-4">
		<h5 class="card-header">Create account</h5>
		<div class="card-body">
			<form method="POST" action="?/create" class="mb-3">
				<div class="mb-3">
					<label for="userName" class="form-label">Username</label>
					<input type="text" class="form-control" name="userName" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" name="password" />
				</div>
				<button class="btn btn-primary">Create Account</button>
			</form>
			<button type="button" class="btn btn-warning" on:click={showLogin}>Go to login</button>
		</div>
	</div>
{/if}
