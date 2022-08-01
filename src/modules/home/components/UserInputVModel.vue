<template>
  <div class="user-input">
    <h4>User Input</h4>

    <label>
      Nome:
      <input
        type="text"
        :value="value.name"
        @input="($event) => updateValue('name', $event.target.value)"
      />
    </label>

    <label>
      Documento:
      <input
        type="text"
        :value="value.document"
        @input="($event) => updateValue('document', $event.target.value)"
      />
    </label>

    <label>
      Idade:
      <input
        type="text"
        :value="value.age"
        @input="($event) => updateValue('age', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "UserInput",

  props: {
    // https://br.vuejs.org/v2/guide/components-custom-events.html#Personalizando-v-model-do-Componente
    // https://www.webmound.com/add-v-model-custom-components-vue-2/
    // https://www.drewtown.dev/post/using-vues-v-model-with-objects/
    value: { type: Object, required: true },
  },

  methods: {
    updateValue(key, keyValue) {
      // https://br.vuejs.org/v2/guide/components-custom-events.html#Personalizando-v-model-do-Componente
      // https://www.webmound.com/add-v-model-custom-components-vue-2/
      // https://www.drewtown.dev/post/using-vues-v-model-with-objects/
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer
      const newValue = { ...this.value, [key]: keyValue };
      console.log("newValue", newValue);
      this.$emit("input", newValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-input {
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0.5rem 0 1rem;
  }

  label {
    padding: 0.25rem 0;
  }
}
</style>
