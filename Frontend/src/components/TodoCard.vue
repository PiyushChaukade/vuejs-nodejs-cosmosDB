<template>
  <v-container class="pa-5 text-lg-left">
    <v-row>
      <v-col cols="4" v-for="(todos, index) in received" :key="index">
        <v-card class="mx-auto mb-4" max-width="300" hover>
          <v-card-item text-lg-right>
            <v-card-title text-lg-right
              >Title: {{ todos.TodoList }}</v-card-title
            >
          </v-card-item>
          <v-card-text>Description: {{ todos.description }}</v-card-text>
          <div class="d-flex">
            <v-sheet>
              <UpdateTodo @click="updateTodohere(todos)" />
              <v-dialog max-width="400" v-model="dialog">
                <v-card title="Update Todo Items">
                  <v-container class="pa-5">
                    <v-sheet class="mx-auto" width="300">
                      <v-form fast-fail @submit.prevent="submitForm">
                        <v-text-field
                          v-model="UpdatedTodoList"
                          label="Todo List"
                        ></v-text-field>
                        <v-textarea
                          label="Description"
                          v-model="Updateddescription"
                          name="input-7-1"
                          variant="filled"
                          auto-grow
                        ></v-textarea>

                        <v-btn class="mt-2" type="submit" block>Update Todo</v-btn>
                        <v-btn class="mt-2" @click="canceledForm" block
                          >Cancel</v-btn
                        >
                      </v-form>
                    </v-sheet>
                  </v-container>
                </v-card>
              </v-dialog>
            </v-sheet>
            <v-sheet><DeleteTodo  @deleteItems="deleteItem(todos.id)" /></v-sheet>
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
    dialog: false,
    data: null,
    loading: true,
    UpdatedTodoList: "",
    Updateddescription: "",
    id: "",
  }),
  computed: {
    ...mapGetters(["received"]),
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "updateItem"]),
    async fetchData() {
      await this.fetchTodos();
    },
    updateTodohere(data) {
      this.dialog = true;
      this.UpdatedTodoList = data.TodoList;
      this.Updateddescription = data.description;
      this.id = data.id;
    },
    async submitForm() {
      this.dialog = false;
      const UpdatedTodo = {
        TodoList: this.UpdatedTodoList,
        description: this.Updateddescription,
        id: this.id,
      };
      await this.updateItem(UpdatedTodo);
      await this.fetchTodos();
    },
    canceledForm() {
      this.dialog = false;
    },
  },
};
</script>
<style scoped></style>
