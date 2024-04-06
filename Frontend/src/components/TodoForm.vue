<template>
  <v-container class="pa-5">
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent="submitForm">
        <v-text-field
          v-model="TodoList"
          :rules="TodoListRules"
          label="Todo List"
        ></v-text-field>
        <v-textarea
          label="Description"
          v-model="description"
          name="input-7-1"
          :rules="descriptionRules"
          variant="filled"
          auto-grow
        ></v-textarea>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        <v-btn class="mt-2" @click="canceledForm" block>Cancel</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "TodoForm",
  props: {
 
  },
  components: {},
  data() {
    return {
      TodoList: "",
      TodoListRules: [(v) => !!v || "First name is required"],
      description: "",
      descriptionRules: [(v) => !!v || "Description is required"],
    };
  },

  methods: {
    submitForm() {
      if (this.TodoList !== "" && this.description !== "") {
        const newTodo = {
          TodoList: this.TodoList,
          description: this.description,
        };
        this.$emit("formSubmitted", newTodo);
        this.TodoList = "";
        this.description = "";
      }
    },
    canceledForm() {
      this.$emit("formCanceled");
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
