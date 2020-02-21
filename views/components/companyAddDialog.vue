<template>
    <div>
        <!-- <form> -->
        <v-form>
          <!-- <v-input v-model="company.name" prepend-icon="business">Firmenname</v-input> -->
          <v-text-field prepend-icon="business" label="Firmenname" v-model="company.name" required></v-text-field>
          <!-- <input type="text" placeholder="Firmenname" v-model="company.name"/> -->
          <v-text-field prepend-icon="location_on" label="Straße + Hausnr." v-model="company.street" required></v-text-field>
          <!-- <input type="text" placeholder="Straße + Hausnummer" v-model="company.street"/> -->
          <v-text-field prepend-icon="location_on" label="Postleitzahl" v-model="company.zip" :rules="[rules.zip]" required></v-text-field>
          <!-- <input type="text" placeholder="Postleitzahl" v-model="company.zip"/> -->
          <v-text-field prepend-icon="location_on" label="Ort" v-model="company.city" required></v-text-field>
         <!--  <input type="text" placeholder="Ort" v-model="company.city"/> -->
         <v-combobox label="Ausbildungsberufe" :items="['Fachinformatiker', 'Mediengestalter', 'Kaufmann/frau']"></v-combobox>
          <button type="submit" @click.prevent="submit">Neue Firma</button>
        </v-form>
       <!--  </form> -->
    </div>
</template>

<script>
import { http } from '../config/http'

export default {
    data() {
      return {
        company: {
          name: '',
          street: '',
          zip: '',
          city: ''
        },
        rules: {
          zip: zip => /^\d{5}$/.test(zip) || 'Ungültige Postleitzahl'
        }
      }
    },
    methods: {
      submit() {
      //this.submitDone = false
      http
        .post("/companies", this.company)
        .then(response => {
          this.$emit('addedCompany')
          //this.submitDone = true
          //this.alert(true, 'Create', 'Company')
          //this.close()
        })
        .catch(e => {
          //this.submitDone = true
          //this.alert(false, 'Create', 'User')
        });
      }
    }
}
</script>