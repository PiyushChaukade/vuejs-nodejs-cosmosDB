// // store.js

import { createStore } from "vuex";
import axios from "axios";

// Create and export the Vuex store instance
export default createStore({
  state: {
    received: [],
    todos: [],
  },
  mutations: {
    SET_RECEIVED(state, received) {
      state.received = received;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        // Make an API request to fetch todos
        const response = await axios.get(
          "http://localhost:5001/todolist/fetchtodo"
        );
        commit("SET_RECEIVED", response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
    async addTodo({ commit, state }, data) {
      try {
        const response = await axios.post(
          "http://localhost:5001/todolist/addtodo",
          data
        );
        commit("SET_TODOS", [...state.todos, response.data]);
        // commit('SET_DIALOG', false);
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    },
    async deleteTodo({ commit }, todoId) {
      try {
        await axios.delete(
          `http://localhost:5001/todolist/deletetodo/${todoId}`
        );
        const response = await axios.get(
          "http://localhost:5001/todolist/fetchtodo"
        );
        commit("SET_RECEIVED", response.data);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
    async updateItem({ commit }, data) {
      try {
        const response = await axios.put(
          `http://localhost:5001/todolist/updatetodo/${data.id}`,
          data
        );
        const newTodos = response.data;
        commit("SET_TODOS", newTodos);
      } catch (error) {
        console.error("Error updating item:", error);
        throw error;
      }
    },
  },
  getters: {
    received(state) {
      return state.received;
    },
  },
});
