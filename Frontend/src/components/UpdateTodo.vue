<template>
  <v-container>
    <v-btn
      color="blue-lighten-2"
      icon="mdi-pencil"
      variant="text"
      @click="dialog = true"
    >
    </v-btn>
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

                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                <v-btn class="mt-2" @click="canceledForm" block>Cancel</v-btn>
              </v-form>
            </v-sheet>
          </v-container>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UpdateTodo",

  props: {
    todos:Object
  },

  components: {},

  data: () => ({
    dialog: false,
    UpdatedTodoList: "",
    Updateddescription: "",
    id:''
  }),

  methods: {
    ...mapActions(["fetchTodos", "updateItem"]),
    async submitForm() {
      this.dialog = false;
      const UpdatedTodo = {
        TodoList: this.UpdatedTodoList,
        description: this.Updateddescription,
        id:this.id,
      };
      console.log(UpdatedTodo,"UpdatedTodo")
      await this.updateItem(UpdatedTodo);
      await this.fetchTodos();
    },
    canceledForm() {
      this.dialog = false;
    },
  },
  created(){
    this.UpdatedTodoList=this.todos.TodoList;
      this.Updateddescription=this.todos.description;
      this.id=this.todos.id;
  }
};
</script>
<style scoped></style>
