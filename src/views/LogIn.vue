<template>
    <div class="login">

        <div class="nav">
            <p>Hotel Sweet</p>
        </div>

        <div class="form">

            <h2>BIENVENIDO</h2>

            <h3>Para ingresar al sitio primero inicie sesion.</h3>

            <label>Usuario</label>

            <input name="username" type="text" class="input" placeholder="Usuario">

            <label>Contraseña</label>

            <input name="password" type="password" class="input" placeholder="Contraseña">

            <button class="btn">INICIAR SESION</button>

        </div>

    </div>
</template>
  
<script>

export default {
    name: 'LogIn',
}
</script>