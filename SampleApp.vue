<template>
  <div>
    <Card :datas="results" />
  </div>
</template>
<script>
import axios from "axios";
import Card from "./Card";
export default {
  components: {
    Card
  },
  data() {
    return {
      results: []
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/"
    }).then(
      result => {
        this.results = result.data;
      },
      error => {
        console.error(error);
      }
    );
  },
  methods: {}
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
    