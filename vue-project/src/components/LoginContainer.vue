<script setup>

</script>

<template>
    <body>
        <div id="header"></div>
        <div class="container">
            <div class="form-container">
                <h2>Login</h2>
                <form action="login.php" method="POST">
                <label for="loginEmail">Email<span class="material-symbols-outlined">mail</span></label>
                <input type="email" id="loginEmail" name="email" required>

                <label for="loginPassword">Password<span class="material-symbols-outlined">lock</span></label>
                <input type="password" id="loginPassword" name="password" required>

                
                <button type="submit"><span class="material-symbols-outlined">login</span></button>
                </form>
            </div>
        </div>
    </body>
</template>

<style>

</style>