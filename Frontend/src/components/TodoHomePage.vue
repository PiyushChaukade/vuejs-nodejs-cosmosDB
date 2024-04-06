<template>
  <v-container class="text-center">
    <v-btn color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>Create Todo</v-btn
    >
    <v-dialog max-width="400" v-model="dialog">
      <v-card title="Add Todo Items">
        <TodoForm @formCanceled="closeDialog" @formSubmitted="submittedform" />
      </v-card>
    </v-dialog>
    <TodoCard :deleteItem="onDeleteItem"/>
  </v-container>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoCard from "./TodoCard.vue";
import { mapActions } from "vuex";

export default {
  name: "TodoHomePage",

  components: { TodoForm, TodoCard },
  data() {
    return {
      dialog: false,
      todos: [],
      refreshTodos: false,
    };
  },

  methods: {
    ...mapActions(["addTodo", "deleteTodo", "fetchTodos"]),
    async submittedform(data) {
      this.dialog = false; 
      await this.addTodo(data);
      this.closeDialog();
    },
    onDeleteItem(id) {
      this.deleteTodo(id);
      this.fetchTodos();
    },
    closeDialog() {
      this.dialog = false; 
      this.fetchTodos();// Commit mutation to close dialog
    },
  },

  computed: {},
};
</script>
