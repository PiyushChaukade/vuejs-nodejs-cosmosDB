<template>
  <v-container>
    <v-btn
      color="blue-lighten-2"
      icon="mdi-pencil"
      variant="text"
     
    >
    </v-btn>
   
  </v-container>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "UpdateTodo",

  props: {
    // todos:Object
  },

  components: {},

  data: () => ({
    // dialog: false,
    // UpdatedTodoList: "",
    // Updateddescription: "",
    // id:''
  }),

  methods: {
    // ...mapActions(["fetchTodos", "updateItem"]),
    // async submitForm() {
    //   this.dialog = false;
    //   const UpdatedTodo = {
    //     TodoList: this.UpdatedTodoList,
    //     description: this.Updateddescription,
    //     id:this.id,
    //   };
    //   console.log(UpdatedTodo,"UpdatedTodo")
    //   await this.updateItem(UpdatedTodo);
    //   await this.fetchTodos();
    // },
    // canceledForm() {
    //   this.dialog = false;
    // },
  },
  created(){
    // this.UpdatedTodoList=this.todos.TodoList;
    //   this.Updateddescription=this.todos.description;
    //   this.id=this.todos.id;
  }
};
</script>
<style scoped></style>
