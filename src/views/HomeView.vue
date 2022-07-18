<template>
  <div class="home">
    <div>
      Valor de <b>data users</b>:
      <pre><code>{{users}}</code></pre>
    </div>

    <div>
      <div
        class="user-input__container"
        v-for="(user, idx) in users"
        :key="`user-${idx}`"
      >
        <div>
          <span> Idx: {{ idx }} </span>
          <button v-if="users.length > 1" @click="deleteUser(idx)">
            Excluir usuário
          </button>
        </div>

        <!-- https://br.vuejs.org/v2/guide/components-custom-events.html#Modificador-sync -->
        <UserInput
          :name.sync="user.name"
          :document.sync="user.document"
          :age.sync="user.age"
        />
      </div>

      <button @click="addOtherUser">Adicionar outro usuário</button>
    </div>
  </div>
</template>

<script>
import UserInput from "@/modules/home/components/UserInput.vue";

export default {
  name: "HomeView",

  components: {
    UserInput,
  },

  data: () => ({
    users: [
      {
        name: "",
        document: "",
        age: "",
      },
    ],
  }),

  methods: {
    addOtherUser() {
      this.users.push({
        name: "",
        document: "",
        age: "",
      });
    },

    deleteUser(idx) {
      this.users.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
code {
  color: crimson;
  background-color: #f1f1f1;
  padding-left: 4px;
  padding-right: 4px;
}

.home {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  column-gap: 2rem;
  max-width: 960px;
  margin: auto;
}

.user-input__container {
  padding: 0.5rem 1rem;
  border: 1px solid #2c3e50;
  margin: 0 0 0.25rem;
}
</style>
