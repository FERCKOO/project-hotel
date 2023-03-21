<template>
    <div class="principal">
        <div class="buscar-cliente">

            <p>Buscar cliente:</p>
            <input type="text" class="buscar" placeholder="Ingrese numero telefonico o nombre">

        </div>

        <!-- Carta para los usuarios -->
        <div class="user-card">
        </div>

    </div>
</template>

<style scoped>

.buscar-cliente {
    align-items: start;
    width: 400px;
    border: 1px solid green;
}
    p{
        margin-bottom: 0px;
    }

    .buscar {
        width: 230px;
    }
</style>