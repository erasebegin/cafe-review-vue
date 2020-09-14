<template>
  <v-card class="mx-auto main-container" shaped>
    <v-img
      class="white--text"
      height="200px"
      align="center"
      :src="latest.fields.heroImage.fields.file.url"
    >
      <div class="card-title-container">
        <v-card-title class="card-title">{{latest.fields.title}}</v-card-title>
        <v-card-subtitle class="pb-0 align-center">{{latest.fields.description}}</v-card-subtitle>
      </div>
      <h3 class="featured">featured</h3>
    </v-img>
    <v-card-text></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["latest"]
};
</script>

<style lang="scss" scoped>
.main-container {
  .card-title-container {
    background: rgb(142, 221, 172);
    background: linear-gradient(
      180deg,
      rgba(142, 221, 172, 1) 0%,
      rgba(132, 228, 167, 1) 17%,
      rgba(145, 255, 187, 1) 43%,
      rgba(114, 255, 167, 0.9304096638655462) 75%,
      rgba(121, 255, 170, 0.9023984593837535) 85%,
      rgba(107, 255, 162, 0.7679446778711485) 92%,
      rgba(63, 255, 134, 0.5858718487394958) 100%
    );
  }

  .card-title {
    font-weight: 400;
    color: rgb(36, 36, 36);
    margin-left: 0.75em;
  }

  .featured {
    font-family: "Caveat", cursive;
    font-weight: 700;
    grid-area: featured;
    color: var(--darker);
    text-align: center;
    background: rgba(var(--highlight), 0.8);
    border-bottom-left-radius: 10px;
  }
}
</style>