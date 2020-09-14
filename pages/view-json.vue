<template>
  <div class="container">
    <h1>Contentful JSON (Single Post)</h1>
    <pre>{{JSON.stringify(posts[0], null, 4)}}</pre>
    <h1>Contentful JSON (Post Image)</h1>
    <pre>{{JSON.stringify(posts[0].fields.branch, null, 4)}}</pre>
    <h1>Other</h1>
    <p>{{posts[0].fields.description}}</p>
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