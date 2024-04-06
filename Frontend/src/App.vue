<template>
  <v-app class="bg-cyan-lighten-1">
    <v-main>
      <TodoHomePage/>
    </v-main>
  </v-app>
</template>

<script>
import TodoHomePage from './components/TodoHomePage.vue'

export default {
  name: 'App',

  components: {
    TodoHomePage,
  },

  data: () => ({
    //
  }),
}
</script>
