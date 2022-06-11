<template>
    <form>
        <h3>Mot de passe oublié</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Email" />
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Envoyer</button>
    </form>
</template>

<script>
    export default{
        name: 'Forgot'
    }
</script>