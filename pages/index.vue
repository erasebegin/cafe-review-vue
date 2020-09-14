<template>
  <div class="container">
    <Featured :latest="posts[0]" />
    <h1 class="text-muted">hello world</h1>
    <h2 v-for="(blogPost,index) in posts" :key="index">
      <nuxt-link :to="blogPost.fields.slug">{{blogPost.fields.title}}</nuxt-link>
    </h2>
  </div>
</template>

<script>
import client from "@/plugins/contentful";

export default {
  asyncData() {
    return client
      .getEntries({
        content_type: "blogPost",
      })
      .then((entries) => {
        return { posts: entries.items };
      })
      .catch((e) => console.log(e));
  },
  head: {
    title: "Home",
  },
};
</script>
  
<style lang="scss" global>
html {
  $highlight: #00db50;
  $dull: #5ca276;
  $saturated-mid: #008f34;
  $muted: #4edb81;
  $dark: #005c22;

  font-family: "Open Sans", sans-serif;
}
</style>  