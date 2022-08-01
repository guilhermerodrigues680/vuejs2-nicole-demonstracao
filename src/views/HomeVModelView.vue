<template>
  <div>
    <div>
      <p>Exemplo usando v-model.</p>
      <p>
        Para exemplo usando <code>sync</code>, clique no link:
        <router-link to="/">HomeView</router-link>
      </p>
    </div>

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
          <!--
              https://br.vuejs.org/v2/guide/components-custom-events.html#Personalizando-v-model-do-Componente
              https://www.webmound.com/add-v-model-custom-components-vue-2/
              https://www.drewtown.dev/post/using-vues-v-model-with-objects/
              usa `users[idx]` ao inves de `user` pois:
              'v-model' directives cannot update the iteration variable 'user' itself.
          -->
          <UserInputVModel v-model="users[idx]" />
        </div>
        <button @click="addOtherUser">Adicionar outro usuário</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserInputVModel from "@/modules/home/components/UserInputVModel.vue";

export default {
  name: "HomeVModelView",

  components: {
    UserInputVModel,
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
