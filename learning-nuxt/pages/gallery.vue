<template>
  <div>
    <h1>Gallery</h1>
    <ul class="image-gallery">
      <li
        class="gallery-image"
        v-for="(image, index) in images"
        :key="`$image-${index}`"
      >
        <img :src="image.url_medium_size" />
        <div class="image-desc">{{ image.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },

  async fetch() {
    const res = await this.$http.$get(
      "https://pixelford.com/api/image/category/2"
    );
    this.images = res;
  },
};
</script>

<style>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 0 20px;
  list-style-type: none;
}
.gallery-image {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  box-shadow: 5px 5px 8px -2px rgba(0, 0, 0, 0.37);
}
.gallery-image img {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  object-fit: cover;
  overflow: hidden;
}
.image-desc {
  font-family: sans-serif;
  padding: 10px;
}
</style>
