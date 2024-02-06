<script>
import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            store,
            project: null,
            loading: false
        };
    },
    created() {
        this.loading = true;
        axios.get(`${this.store.Url}/api/projects/${this.$route.params.slug}`).then((resp) => {
          if(!resp.success) {
            this.project = resp.data.results;
          } else {
            this.$router.push({name: 'not-found'})
          }
        }).finally(() => {
            this.loading = false
          });
    },
}  
</script>

<template>
    <div class="container mt-4">
      <div v-if="loading">
        Loading...
      </div>
      <div v-else>
        <h1>{{ project.title }}</h1>
        <div>
          Categoria: {{ project.type.name }}
        </div>
        <div>
          Pubblicato: {{ project.created_at }}
        </div>
        <div class="my-3">
          <span class="me-2 p-2" :style="{'background-color': tecnology.hex_color}" v-for="tecnology in project.tecnologies">{{ tecnology.tecnologia }}</span>
        </div>
        <div class="img">
            <img :src="`${store.Url}/storage/${project.img}`" alt="">
        </div>

        <p>{{ project.content }}</p>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
.img{
    width: 30%;
    img{
        width: 100%;
    }
}
</style>