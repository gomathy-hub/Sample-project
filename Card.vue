<template>
  <div class="card mb-3 center" style="max-width: 900px;">
    <div class="card-body">
      <h5 class="card-title">To Do List</h5>
      <p class="card-text">
        <b-table
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          small
          outlined
          hover
          :items="datas"
        ></b-table>
      </p>
    </div>
    <div class="text-xs-right">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        style="right"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datas"],
  data() {
    return {
      perPage: 10,
      currentPage: 1
    };
  },
  created() {},
  computed: {
    rows() {
      return this.datas.length;
    }
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
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  background-color: teal;
}
.card-title {
  color: ghostwhite;
}
.card-text {
  background-color: ghostwhite;
}
</style>
    