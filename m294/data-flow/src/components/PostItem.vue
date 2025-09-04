<script setup lang="ts">
import type { Post } from "../types/post.types";

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="post">
    <div class="post__votes voter">
      <button class="voter__action">👍</button>
      <div class="voter__votes">{{ props.post.votes }}</div>
      <button class="voter__action">👎</button>
    </div>
    <div class="post__content">
      <div class="post__user">{{ props.post.user }}</div>
      <div class="post__title">{{ props.post.title }}</div>
      <div class="post__text">{{ props.post.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  padding: 20px;
  border: 2px solid transparent;
}

.post--trending {
  border: 2px dashed #ecc500;
  background: #fff8ee;
}

.post--spam {
  opacity: 0.25;
}

.post + .post {
  border-top: 1px solid #fafafa;
}

.post__user {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

.post__title {
  font-size: 1rem;
  line-height: 1.1;
  font-weight: bold;
  margin-bottom: 10px;
}

.post__text {
  color: #666;
  line-height: 1.2;
  font-size: 0.9rem;
}

.post__votes {
  width: 40px;
  margin-right: 20px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
}

.voter__votes {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 8px 0;
}

.voter__action {
  appearance: none;
  background: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  transition: background 0.2s ease;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  line-height: 1;
}

.voter__action:hover {
  background: #f0f0f0;
}
</style>
