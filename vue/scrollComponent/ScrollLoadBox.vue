<template>
  <div
    ref="box"
    :style="
      'transform: translateY(' +
      `${y}` +
      'px);' +
      'transition:all' +
      ' ' +
      'ease' +
      ' ' +
      `${duration}s;`
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pageScroll',
  props: {
    offset_y: {
      type: Number,
      default: 150,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.throttling(this.scrollHandle,200), true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttling(this.scrollHandle,200), true)
  },
  data() {
    return {
        y:'',
    }
  },
  methods: {
    //节流 防止处理函数持续触发，影响性能
    throttling(cb,time){
            let timer =null
            return function(){
                if(!timer){
                    timer = setTimeout(()=>{
                    cb()
                    timer=null
                },time)
                }
            }
        },
      scrollHandle(){
          const elem = this.$refs[`box`]
          const offset = elem.getBoundingClientRect()
          const offsetTop = offset.top
          if (offsetTop-window.innerHeight<0){
              this.y=0
          }else{
              this.y=this.offset_y
          }
      }
      
    },
  
}
</script>
<style>

</style>
