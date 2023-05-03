<template>
  <div>
    <div class="left" v-if="index">
      <img class="leftImg" :src="littleImg.skuImageList[index].imgUrl" alt="">
      <!-- 鼠标层罩 -->
      <div v-show="topShow" class="top" :style="topStyle"></div>
      <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
      <div class="maskTop"
           @mouseenter="enterHandler"
           @mousemove="moveHandler"
           @mouseout="outHandler">
      </div>
    </div>
    <div v-show="rShow" class="right">
      <img :style="r_img" class="rightImg" :src="littleImg.skuImageList[index].imgUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['detailList'],
    data() {
      return {
        topStyle:{transform:''},
        r_img: {},
        topShow:false,
        rShow:false,
        index:'1'
      }
    },
    mounted() {
      this.$bus.$on('demo',(data)=>{
        this.index=data
        // console.log('传过来的数据是',data)
      })
      // console.log("little",this.littleImg.price)
    },
    computed:{
      littleImg(){
        return this.detailList.skuInfo ||{}
      }
    },
    methods : {
      // 鼠标进入原图空间函数
      enterHandler() {
        // 层罩及放大空间的显示
        this.topShow = true
        this.rShow = true
      },
      // 鼠标移动函数
      moveHandler(event) {
        // 鼠标的坐标位置
        let x = event.offsetX
        let y = event.offsetY
        // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
        let topX = (x-100) < 0 ? 0:(x-100)
        let topY = (y-100) < 0 ? 0:(y-100)
        // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
        if(topX>200) {
          topX = 200
        }
        if(topY>200) {
          topY = 200
        }
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${2*topX}px,-${2*topY}px)`
      },
      // 鼠标移出函数
      outHandler() {
        // 控制层罩与放大空间的隐藏
        this.topShow = false
        this.rShow = false
      },

      //获取传过来的数据
      // getImageId(imageid){
      //   this.$bus.$on('imgid',imageid)
      //   console.log("imageid",imageid)
        // for(let i=1;i<=this.littleImg.skuImageList.length;i++){
        //   // if(this.littleImg.skuImageList[i].id===imageid){
        //   //   this.imageurl=this.littleImg.skuImageList[i].id
        //   // }
        //   console.log(imageid)
        // }

    }
  }
</script>

<style scoped>
  /* 放大的图片，通过定位将左上角定位到(0,0) */
  .rightImg {
    display: inline-block;
    width: 800px;
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
  /* 右边的区域图片放大空间 */
  .right {
    margin-left: 412px;
    margin-top: 0px;
    width: 400px;
    height: 400px;
    border: 1px solid red;
    position: absolute;
    overflow: hidden;
  }
  /* 一个最高层层罩 */
  .maskTop {
    width: 400px;
    height: 400px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  /* 层罩，通过定位将左上角定位到(0,0) */
  .top {
    width: 200px;
    height: 200px;
    background-color: lightcoral;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
  }
  /* 原图的显示 */
  .leftImg {
    width: 400px;
    height: 400px;
    display: inline-block;
  }
  /* 原图的容器 */
  .left {
    width: 400px;
    height: 400px;
    border: 1px solid teal;
    float: left;
    position: relative;
  }
</style>