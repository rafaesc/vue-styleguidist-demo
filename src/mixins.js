import Vue from 'vue'
import VModal from 'vue-js-modal'
import vMediaQuery from 'v-media-query'

Vue.use(vMediaQuery, {
  variables: {
    hd: 1920,
    sm: '1240px'
  }
})
Vue.use(VModal)

export default {
  data() {
    return {
      colorDemo: 'blue',
      sizeDemo: 'large',
    }
  }
}