import Vue from 'vue'
import Peep from '@/views/Peep'

describe('Peep.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peep)
    const vm = new Constructor({
      data: { 
        peep: {"id":34,"body":"my first peep :)","created_at":"2018-09-21T17:40:13.661Z","updated_at":"2018-09-21T17:40:13.661Z","user":{"id":231,"handle":"YuuuuSeeeer"},"likes":[]}
     }
    }).$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .toEqual('Chitter')
  })
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peep)
    const vm = new Constructor({
      data: { 
        peep: {"id":34,"body":"my first peep :)","created_at":"2018-09-21T17:40:13.661Z","updated_at":"2018-09-21T17:40:13.661Z","user":{"id":231,"handle":"YuuuuSeeeer"},"likes":[]}
     }
    }).$mount()
    expect(vm.$el.querySelector('.peep h2').textContent)
      .toEqual('why be a when you can be a pirate')
  })

})