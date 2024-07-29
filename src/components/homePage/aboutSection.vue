<template>
  <v-container fluid class="pa-0">
    <div class="position-relative py-8 my-6 mx-0 px-0">
      <div
        class="image-container position-absolute"
        style="right: 25%; top: -100%"
      >
        <img
          src="../../assets/images/portrait-young-woman-with-earrings-with-gems-isolated.jpg"
          alt="Jewelry"
          width="400"
          height="500"
          class="jewelry-image py-9"
        />
      </div>

      <div
        class="content-container w-50 position-absolute"
        style="left: 50%; top: 20%"
      >
        <h3 class="text-h5 text-center">LUXURY JEWELRY COLLECTION</h3>
        <p class="pt-7">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris"
        </p>
        <button class="more-button">MORE</button>
      </div>
      <h2 class="w-100"></h2>
    </div>
  </v-container>
</template>

<script></script>

<style scoped>
h3 {
  color: black;
}

.luxury-jewelry-collection {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px;
}

.image-and-line-container {
  width: 100%;
  position: relative;
}

.image-container {
  text-align: center;
  width: 100%;
}

.content-container {
  text-align: center;
  width: 100%;
  padding-top: 20px;
}

h2 {
  background-color: #eccd69;
  padding: 30px;
  width: 100%;
}

.more-button {
  background-color: transparent;
  border: 1px solid #eccd69;
  color: white;
  padding: 10px 100px;
  cursor: pointer;
  margin-top: 20px;
}
.more-button:hover {
  background-color: #eccd69;
  color: #222;
}

@media (min-width: 768px) {
  .luxury-jewelry-collection {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0;
  }

  .image-and-line-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    flex: 1;
    padding-left: 20px;
    text-align: left;
  }

  h2 {
    display: block;
  }
}
@media (max-width: 400px) {
  .image-container {
    top: -30% !important;
  }
  .image-container img {
    width: 170px;
    height: 350px;
  }
  p {
    font-size: 10px;
  }
  .content-container {
    width: 25%;
  }
  .more-button {
    padding: 10px 30px;
    font-size: 10px;
    margin-top: 20px;
  }
  h3 {
    font-size: 20px !important;
  }
  h2 {
    padding: 40px;
  }
}
</style>
