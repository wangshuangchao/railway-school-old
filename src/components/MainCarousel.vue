<template>
  <div class="home">
       <div class="home-box">
           <div style="background: #fdfbde">
               <div class="marquee">
                   <div class="marquee_box">
                       <ul class="marquee_list" :class="{marquee_top:animate}">
                           <li v-for="(item, index) in announcementArr" :key="index">
                               <span>{{item}}</span>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            announcementArr: [],
            animate: false
        }
    },
    mounted() {
        this.addAnnouncement();

        setInterval(this.showMarquee, 2000);
    },
    methods: {
        addAnnouncement: function() {
           this.announcementArr = ['测试滚动001','测试滚动002','测试滚动003','测试滚动004']
        },
        showMarquee: function() {
            this.animate = true;
            setTimeout(() => {
                this.announcementArr.push(this.announcementArr[0]);
                this.announcementArr.shift();
                this.animate = false
            }, 1000)
        }
    }
}
</script>

<style type="text/css">
.home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-box {
    width: 200px;
    height: 200px;
}
.marquee {
    width: 100%;
    height: 30px;
    align-items: center;
    color: #3A3A3A;
    background-color: #fdfbde;
    display: flex;
    box-sizing: border-box;
}

.marquee_box {
    display: block;
    position: relative;
    width: 60%;
    height: 30px;
    overflow: hidden;
}

.marquee_list {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}

.marquee_top {
    transition: all 0.5s;
    margin-top: -30px
}

.marquee_list li {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding-left: 20px;
}

.marquee_list li span {
    padding: 0 2px;
    color: #f1543a;
}
</style>
