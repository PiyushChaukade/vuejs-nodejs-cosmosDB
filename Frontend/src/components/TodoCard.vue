<template>
  <v-container class="pa-5 text-lg-left">
    <v-row>
      <v-col cols="4" v-for="(todos, index) in received" :key="index">

        <v-card class="mx-auto mb-4" max-width="300" hover >
          <v-card-item text-lg-right>
            <v-card-title text-lg-right 
              >Title: {{ todos.TodoList }}</v-card-title
            >
          </v-card-item>
          <v-card-text>Description: {{ todos.description }}</v-card-text>
          <div class="d-flex">
            <v-sheet>
              <UpdateTodo :todos="todos"  />
            </v-sheet>
            <v-sheet><DeleteTodo @click="deleteItem(todos.id)" /></v-sheet>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateTodo from "./UpdateTodo.vue";
import DeleteTodo from "./DeleteTodo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoCard",
  props: { deleteItem: Function },
  components: { DeleteTodo, UpdateTodo },
  data: () => ({
    
    data: null,
    loading: true,
  }),
  computed: {
    // ...mapState({
    //   receivedTodos: state => state.received
    // }),
    ...mapGetters(["received"]),
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    async fetchData() {
      await this.fetchTodos();
    },
   
  },
};
</script>
<style scoped></style>
