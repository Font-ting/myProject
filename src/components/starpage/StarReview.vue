<template>
<div id="app">
  <main :style="mainStyle">
        <!-- 白星星 -->
        <div class="star_line">
            <!-- <span @click="changeValue(star)" class="star" :style="starStyle" v-for="star in total" v-bind:key="star">☆</span> -->
            <span class="star" :style="starStyle" v-for="star in total" v-bind:key="star">☆</span>
        </div>
        <!-- 黑星星 -->
        <div class="star_line" :style="blackStyle">
            <!-- <span @click="changeValue(star-1)" class="star star-orange" :style="starStyle" v-for="star in total" v-bind:key="star">★</span> -->
            <span class="star star-orange" :style="starStyle" v-for="star in total" v-bind:key="star">★</span>
        </div>
    </main>
</div>

</template>

<script>
export default {
  name:"StarReview",
   props:{
        total:{
            default:5,
        },
        size:{
            default:13
        },
        // 接收从父组件传过来的score
        value:{}
    },
    // 计算属性
    computed:{
        mainStyle(){
            return{
                width:this.size * this.total + "px",
            }
        },
        starStyle(){
            return{
                width:this.size + "px",
                height:this.size + "px",
                fontSize: this.size + 6 + "px"
            }
        },
        blackStyle(){
            return{
                width:this.value / this.total * 100*0.5 + "%"
            }
        }
    },
    methods:{
        // changeValue(value){
        //     // 将最新的结果传给input
        //     // input标签有有个默认的input事件
        //     this.$emit("input",value)
        // }
    }

}
</script>

 <style>
	main{
		position:relative;
		}
	.star_line{
		/*  设置强制不换行 */
		white-space: nowrap;
		overflow: hidden;
		position: absolute;
		}
	.star{
		display: inline-block;
		/* 设置当鼠标放到星星上是变成小手样式 */
		cursor: pointer;
    color:lightgray;
		}
  .star-orange{
    color:orange;

  }
</style>