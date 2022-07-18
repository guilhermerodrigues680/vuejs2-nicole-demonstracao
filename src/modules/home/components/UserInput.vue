<template>
  <div class="user-input">
    <h4>User Input</h4>

    <label>
      Nome:
      <input
        type="text"
        :value="name"
        @input="($event) => $emit('update:name', $event.target.value)"
      />
    </label>

    <label>
      Documento:
      <!-- Exemplo usando função -->
      <input type="text" :value="document" @input="handleUpdateDocument" />
    </label>

    <label>
      Idade:
      <input
        type="text"
        :value="age"
        @input="($event) => $emit('update:age', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "UserInput",

  props: {
    name: String,
    document: String,
    age: String,
  },

  methods: {
    handleUpdateDocument(event) {
      // https://br.vuejs.org/v2/guide/components-custom-events.html#Modificador-sync
      const newDocumentValue = event.target.value;
      console.log("newDocumentValue", newDocumentValue);
      this.$emit("update:document", newDocumentValue);
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
