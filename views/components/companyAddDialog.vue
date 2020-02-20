<template>
    <div>
        <form>
            <input type="text" placeholder="Firmenname" v-model="company.name"/>
            <input type="text" placeholder="Straße + Hausnummer" v-model="company.street"/>
            <input type="text" placeholder="Postleitzahl" v-model="company.zip"/>
            <input type="text" placeholder="Ort" v-model="company.city"/>
            <button type="submit" @click.prevent="submit">Neue Firma</button>
        </form>
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
        }
      }
    },
    methods: {
      submit() {
      //this.submitDone = false
      http
        .post("/companies", this.company)
        .then(response => {
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