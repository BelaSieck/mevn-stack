<template>
  <v-card>
    <v-card-title>{{company.name}}</v-card-title>
    <v-card-text>{{company.adress}}</v-card-text>
    <v-card-actions>
      <v-btn small @click="deleteCompany" color="error"><v-icon>delete</v-icon></v-btn>
    </v-card-actions>  
  </v-card>
</template>

<script>
import { http } from '../config/http'

export default {
  props: {
    company: {
      type: Object,
      required: true  
    }  
  },
  methods: {
    deleteCompany() {
      http
        .delete("/companies/" + this.company._id)
        .then(response => {
          this.$emit('deletedCompany')  
        })
    }
  }
}
</script>