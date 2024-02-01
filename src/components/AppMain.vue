<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default{
    data(){
        return{
            Url: 'http://127.0.0.1:8000',
            projects: []
        }
    },
    created(){
        axios.get(`${this.Url}/api/projects`).then((resp)=> {
            this.projects = resp.data.results.data;
        });
    },
    components:{ProjectCard}
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="col" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>