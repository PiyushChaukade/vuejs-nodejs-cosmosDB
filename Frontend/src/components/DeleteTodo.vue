<template>
  <v-container>
    <v-btn
      color="red-lighten-2"
      icon="mdi-trash-can-outline"
      variant="text"
    ></v-btn>

    <!-- <v-dialog v-model="deleteDialog" max-width="500">
      <v-card>
        <v-card-title>Delete Todo</v-card-title>
        <v-card-text> Are you sure you want to delete this todo? </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="deleteTodo">Yes</v-btn>
          <v-btn color="error" @click="cancelDelete">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "DeleteTodo",
  props: {
    // todos:Object,
  },
  components: {},
  data: () => ({
    // deleteDialog: false,
  }),
  methods: {
  //   ...mapActions([ "deleteTodo"]),
  //   deleteTodoDialog() {
  //     this.deleteDialog = true;
  //   },
  //   cancelDelete() {
  //     this.deleteDialog = false;
  //   },
  //  async deleteTodo(){
  //     this.deleteDialog = false;
  //     console.log(this.todos.id,'this.todos.id')
  //     await this.deleteTodo(this.todos.id);
      
  //   }
  
  },
};
</script>
<style scoped></style>
