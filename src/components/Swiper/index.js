import Swiper from './Swiper.vue'
import SwiperItem from './SwiperItem.vue'
/*
    ES6向外暴露的两种写法
    1 export default {}  => import xxx from "" 不能解构，需要一个个引入
    2 export {} => import {} from '' 可以以解构的形式引入
    若上述两个都写了
    import xxx ,{} from ''
*/
export {
  Swiper,
  SwiperItem
}
