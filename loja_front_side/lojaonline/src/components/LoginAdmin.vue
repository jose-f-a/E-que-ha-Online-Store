<template>
  <v-dialog v-model=" isOpen" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Email"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                label="Password"
                :type="show ? 'text' : 'password'"
                v-model="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="loginValidation">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";
import jwt from "jsonwebtoken";
export default {
  data: () => ({
    show: false,
    email: "",
    password: "",
    valid: false,
  }),
  methods: {
    closeDialog() {
       this.$store.commit("admin/changeShowLoginDialog")
    },
    loginValidation() {
        console.log('sssss')
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/login",
        headers: { "Content-Type": "application/json" },
        data: { email: this.email, password: this.password },
      };
      console.log("aaaaaa")
      axios
        .request(options)
        .then((response) => {
            console.log(response)
          if (response.status == 200) {
            const {isadmin}=jwt.decode(response.data.token)
            if(isadmin){
                localStorage.setItem("tokenAdmin", response.data.token);
                this.closeDialog()
                this.$store.commit("admin/setLogin",true)
            }else{
                alert('Nao tem premissão')
            }
            
          }
        })
        .catch( error => {
          console.log(error);
        });
    console.log('dsaddddasd')
    },
  },
  computed:{
        isOpen:{
            get(){
                return this.$store.getters['admin/getLoginDialog']
            },
            set(val){
                
                this.$store.commit("admin/setShowLoginDialog",val)
            }
        }
    },
};
</script>