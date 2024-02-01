<script>

export default {
    data() {
        return {
            Url: 'http://127.0.0.1:8000',
        }
    },
    props: {
        project: Object,
    },
    computed: {
        taglioDescrizione() {
            if (this.project.content && this.project.content.length > 250) {
                return this.project.content.substring(0, 150) + "...";
            }
            return this.project.content;
        },
    },
}
</script>

<template>
    <div class="card h-100">
        <img :src="`${Url}/storage/${project.img}`" alt="" />
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p>
                <span>Tipologia Progetto:</span>
                {{ project.type ? project.type.tipologia : "Nessuna Tipologia associata" }}
            </p>
            <p>
                <span>Creato il:</span>
                {{ project.created_at}}
            </p>
            <p><span>Descriozione:</span>:{{ taglioDescrizione }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span{
    font-weight: bold;
    color: red;
}
</style>