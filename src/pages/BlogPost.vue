<template>
    <!--
    <BlogPost title="Vue와 함께한 나의 여행" />
    <BlogPost title="Vue로 블로깅하기" />
    <BlogPost title="Vue가 재미있는 이유" />
    -->

    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
      />
    </div>


    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button @click="$emit('enlarge-text')">텍스트 확대</button>
    </div>


</template>

<!-- BlogPost.vue -->
<script>
export default {
  props: ['title'],
  emits: ['enlarge-text'],
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue와 함께한 나의 여행' },
        { id: 2, title: 'Vue로 블로깅하기' },
        { id: 3, title: 'Vue가 재미있는 이유' }
      ]
      
    }
  }
}
</script>
