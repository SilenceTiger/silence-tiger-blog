<template>
  <div id="app">
    <h1>hello world</h1>
    <p v-highlight>
      <pre>
        <code class="javascript">
          function selectionSort(arr){
              var minIndex, temp, len = arr.length;
              for(var i=0; i < len; i++){
                  minIndex = i;
                  for(var j=i+1; j < len; j++){
                      if(arr[j] < arr[minIndex]){
                          minIndex = j;
                      }
                  }
                  temp = arr[i];
                  arr[i] = arr[minIndex];
                  arr[minIndex] = temp;
              }
              return arr;
          }
          var num = new Array;
          num = [1,5,2,8,4,9,3,0,4];
          console.log(selectionSort(num));
        </code>
      </pre>
    </p>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>

</style>
