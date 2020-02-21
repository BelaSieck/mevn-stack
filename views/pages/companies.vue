<template>
    <article id="companies">
        <h1>Firmen</h1>
        <companyAddDialog @addedCompany="load"/>
        <!-- <v-card v-for="company in companies">
            <v-card-title><v-icon left>business</v-icon> {{company.name}}</v-card-title>
            <v-card-text><v-icon>location_on</v-icon> {{company.adress}}</v-card-text>
        </v-card> -->
        <company @deletedCompany="load" v-for="company in companies" :company="company" :key="company.id"/>
    </article>
</template>

<script>
import { http } from "../config/http.js"
import companyAddDialog from '../components/companyAddDialog'
import company from '../components/company'

export default {
    data() {
        return {
            companies: []
        }
    },
    methods: {
      load() {
        http
          .get("companies")
          .then(response => {
            this.companies = response.data.companies;
          })
          .catch(e => {
            this.errors.push(e);
          });
      }
    },
    mounted() {
        this.load()
    },
    components: {
        company,
        companyAddDialog
    }
}
</script>