<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import {store} from "../store";

export default{
    data(){
        return{
            store,
            projects: [],
            curPage: 1,
            lastPage: 1,
            total: 0
        }
    },
    created(){
        this.getProjects(1);
    },
    methods: {
        getProjects(pageNum){
            this.curPage = pageNum;
            axios.get(`${this.store.Url}/api/projects`,{
                    params:{
                        page: pageNum,
                    }
                }).then((resp)=> {
                this.projects = resp.data.results.data;
                this.lastPage = resp.data.results.last_page;
                this.total = resp.data.results.total;
            });
        }
    },
    components:{ProjectCard}
}
</script>

<template>
    <div class="container">
        <div class="my-3">
            Totali progetti: {{ total }}
            <button class="btn btn-primary me-2" :disabled="curPage === 1" href="" @click.prevent="getProjects(curPage - 1)">Prev</button>
            <button class="btn btn-primary me-2" :class="{'btn-success': num === curPage}" v-for="num in lastPage" @click.prevent="getProjects(num)">{{ num }}</button>
            <button class="btn btn-primary" :disabled="curPage === lastPage" href="" @click.prevent="getProjects(curPage + 1)">Next</button>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="col" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>