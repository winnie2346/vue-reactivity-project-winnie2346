<template>
  <div class="intro">
    <h2>
      chef ramsay says bob's kitchen needs to be shut down for sanitary reasons but bob believes
      thats absolute cow poop.
    </h2>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTpjvq0-YDG8ayyACoH9EkEfqWNqasfiJjg&s"
      alt=""
    />

    <button><Routerlink to="/game">start</Routerlink></button>
  </div>
</template>

<script setup></script>

<style scoped>
.intro {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  place-items: center;
}
img {
  margin-bottom: 30px;
}
h2 {
  text-align: center;
  margin-left: 30%;
  margin-right: 30%;
}
button {
  scale: 150%;
}
</style>
