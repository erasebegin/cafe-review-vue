<template>
  <div class="main-container">
    <div class="inner-container">
      <div class="heading-container-top">
        <v-btn fab color="pink">
          <v-icon>mdi-coffee-outline</v-icon>
        </v-btn>
        <h2 class="h2-cafe">Café</h2>
      </div>
      <h1 class="h1-review">Review</h1>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.main-container {
  padding: 2em;
  padding-left: 0;
  background: url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");

  .inner-container {
    background: #FFFFFF88;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1em 0 1em 2em;

    .heading-container-top {
      display: flex;
      align-items: center;
      gap: 0.5em;

      .h2-cafe {
        font-family: "Caveat", cursive;
        font-weight: 300;
        font-size: 3rem;
      }
    }

    .h1-review {
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
      font-size: 3rem;
    }
  }
}
</style>