<template>
  <div 
    id="root" 
    class="root">
    <div class="container-1">
      <p>1</p>
    </div>
    <div class="container-2 a1 a2">
      <p>2</p>
    </div>
    <div class="container-3">
      <p>3</p>
    </div>
    <div class="container-4 a1 a2">
      <p>4</p>
    </div>
    <div class="container-5">
      <p>5</p>
    </div>
    <div class="container-6 a1 a2">
      <p>6</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style>
#root {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
}

.a1 {
  color: red;
}

.container-1 {
  width: 25%;
  height: 25%;
  background-color: brown;
  text-align: center;
}

.container-2 {
  width: 25%;
  height: 25%;
  background-color: antiquewhite;
  text-align: center;
}
.container-3 {
  width: 25%;
  height: 25%;
  background-color: teal;
  text-align: center;
}
.container-4 {
  width: 25%;
  height: 25%;
  background-color: springgreen;
  text-align: center;
}

.container-5 {
  width: 25%;
  height: 25%;
  background-color: violet;
  text-align: center;
}

.container-6 {
  width: 25%;
  height: 25%;
  background-color: steelblue;
  text-align: center;
}
</style>
