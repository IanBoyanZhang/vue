<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">Some API call result</h1>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
    </el-card>

    <a> written by {{ author }} </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      articles: [],
    }
  },
  mounted: function() {
    // e.g. Making an API call
/*    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {

        this.articles = response.data.subjects

    }, function(response) {
        console.log(response)
    });*/
  }
}
</script>

<style>

</style>
