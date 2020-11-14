<template>
  <div class = 'page-classify'>
    <normal-header title="分类"></normal-header>
     <div class="classify-main">
      <header-type :types='types' @click='onChange'></header-type>
      <cartoon-list :list='list'></cartoon-list>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/NormalHeader'
import headerType from '@/components/HeaderType'
import cartoonList from '@/components/CartoonList'

import { getTypes, getTypesList } from '@/api/cartoon.js'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Classify',
  components: {
    normalHeader,
    headerType,
    cartoonList
  },
  data () {
    return {
      types: [],
      cartoonList: []
    }
  },
  computed: {
    list () {
      return this.cartoonList.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.bigcoverurl,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    getTypes () {
      getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      })
    },
    getTypesList (subject) {
      getTypesList(subject).then(res => {
        if (res.code === 200) {
          this.cartoonList = JSON.parse(unformat(res.info)).comicsList
        } else {
          console.log(res.code_msg)
        }
      })
    },
    onChange (payload) {
      this.getTypesList(payload.data.targetargument)
    }
  },
  /*
    问题是：点击分类列表，获取不到当前分类信息
    原因是：两者都为异步下载
    解决方法：异步串行，分类信息必须在分类列表之后获取到
  */
  async created () {
    await this.getTypes()
    this.getTypesList(this.types[0].targetargument)
    console.log(this.getTypesList(this.types[0].targetargument))
  }
}
</script>

<style lang='scss' scoped>
  .page-classify {
    display: flex;
    flex-direction: column;
    height: 100%;

    .classify-main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
