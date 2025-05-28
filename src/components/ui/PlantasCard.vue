<template>
    <div class="planta-card">
        <h3>{{ name }}</h3>
        <p class="subtitle">Cantidad de Habitaciones: {{ habitaciones }}</p>
        <p class="subtitle">Habitaciones ocupadas: {{ ocupadas }}</p>
        <div class="metrics">
            <div class="electricidad"><span>⚡</span> Consumo Eléctrico
                <div>
                    {{ electricNow }}
                    <p>Consumo actual</p>

                    {{ electricMensual }}
                    <p>Consumo Mensual</p>
                </div>
            </div>
            <div class="agua"><span>💧</span> Consumo de Agua <div>
                    {{ waterNow }}
                    <p>Consumo actual</p>

                    {{ waterMensual }}
                    <p>Consumo Mensual</p>
                </div>
            </div>
            <div class="gas"><span>🔥</span> Consumo de Gas
                <div>
                    {{ gasNow }}
                    <p>Consumo actual</p>

                    {{ gasMensual }}
                    <p>Consumo Mensual</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'habitaciones', 'ocupadas','electricNow', 'electricMensual', 'waterNow', 'waterMensual', 'gasNow', 'gasMensual'],
}
</script>

<style>
.planta-card {
    background: linear-gradient(135deg, #322a80, #3f2f91);
    border-radius: 16px;
    padding: 1rem;
    width: 220px;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.subtitle {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
}

.metrics div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
}
</style> 