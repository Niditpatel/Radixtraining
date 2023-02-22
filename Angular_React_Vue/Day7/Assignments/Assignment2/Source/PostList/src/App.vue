<script>
import Postlist from "./components/PostList.vue";
export default {
  data() {
    return {
      arr: [],
      show: false,
      LikedPostList: []
    }
  },
  components: {
    Postlist
  },
  methods: {
    likedpost(arr) {
      this.LikedPostList = arr;
    },
    showCart() {
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
      };
    }
  }
}
</script>
<template>
  <nav class="bg-gray-300 h-12 mb-8">
    <div class="container-fluid py-3 px-24 flex justify-between">
      <a class="navbar-brand text-xl" v-if="show" href="#">Likes</a>
      <a v-else class="navbar-brand text-xl" href="#">Posts</a>
      <div>
        <ul class="ms-auto flex space-x-4 mb-2 mb-lg-0">
          <li class="nav-item" v-if="show" id="cart-button">
            <a class="nav-link" @click="showCart()" href="#">
              <em class="fa-solid fa-arrow-left"></em>
            </a>
          </li>
          <li v-else>
            <a class="nav-link" @click="showCart()" href="#">
              <em class="fa-regular fa-heart text-xl text-rose-900">{{ this.LikedPostList.length }}</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4  mx-auto w-fit " v-if="show == true">
    <div class="flex shadow-lg rounded-lg hover:shadow-orange-300" v-for=" item of LikedPostList">
      <div class="my-1 w-fit">
        <img :src="item.PostedImage" class=" w-fit h-24  " alt="" />
      </div>
      <div class=" bg-white w-fit">
        <div class="my-2 mx-2">
          <h5 class="text-gray-900 text-xl font-medium mb-2"> Name : {{ item.PostName }}</h5>
          <p><span class="text-gray-900 text-l  font-medium mb-2">Posted On : </span>
            {{ (item.PostedDate).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </div>
  <Postlist @postLiked="likedpost($event)" :class="{ hidden: show==true, 'show':show == false }"></Postlist>
</template>