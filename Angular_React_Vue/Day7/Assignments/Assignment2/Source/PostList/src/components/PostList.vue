<script>
export default {
    data() {
        return {
            LikedList:[],
            PostList: [
                {
                    PostName: 'Backpack',
                    PostDescription: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                    PostedDate: new Date('12-10-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                },
                {
                    PostName: 'T-Shirt',
                    PostDescription: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket,  soft fabric for breathable and comfortable wearing',
                    PostedDate: new Date('10-25-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
                },
                {
                    PostName: 'Jacket',
                    PostDescription: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working , traveling or other',
                    PostedDate: new Date('12-08-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
                },
                {
                    PostName: 'Bracelet',
                    PostDescription: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl",
                    PostedDate: new Date('09-15-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
                },
                {
                    PostName: 'Internal SSD',
                    PostDescription: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5',
                    PostedDate: new Date('11-03-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
                },
                {
                    PostName: 'T-Shirt',
                    PostDescription: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch',
                    PostedDate: new Date('01-01-2022'),
                    PostedImage: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
                }

            ]
        }
    },
    methods: {
        verify(item){
            const Index = this.LikedList.indexOf(item);
            return Index;

        },
        LikePost(item,event) {
            const Index = this.verify(item);
            console.log(Index !== -1);
            if (Index !== -1) {
                this.LikedList.splice(Index, 1);
                this.flag =false
            } else {
                this.LikedList.push(item)
                this.flag = true
                this.$emit('postLiked',this.LikedList)
            }
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mx-auto w-fit">
        <div class="flex justify-center mx-2" v-for="item of PostList">
            <div class="rounded-lg shadow-lg bg-white max-w-sm  hover:shadow-orange-300">
                <div class="mx-auto my-1 w-fit">
                    <img :src="item.PostedImage" class=" w-fit h-48  " alt="" />
                </div>
                <div class="my-2 mx-2">
                    <h5 class="text-gray-900 text-xl font-medium mb-2"> Name : {{ item.PostName }}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        <span class="text-gray-900 text-l  font-medium mb-2">Discription : </span>
                        {{ item.PostDescription }}
                    </p>
                    <p><span class="text-gray-900 text-l  font-medium mb-2">Posted On : </span>
                        {{ (item.PostedDate).toLocaleDateString() }}</p>
                </div>
                <div class="w-fit mr-auto ml-2 my-2">
                    <button type="button" :class="{ 'inline-block text-gray-200 text-xl': verify(item) == -1, 'inline-block text-rose-600 text-xl':verify(item) !== -1 }" class="text-gray-200 text-2xl" @click="LikePost(item,$event)">
                        <em class="fa-solid fa-heart "></em>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>