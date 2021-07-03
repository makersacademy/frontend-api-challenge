import Vue from 'vue'
import Peep from '@/views/Peep'

describe('Peep.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peep)
    const vm = new Constructor({
    }).$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .toEqual('Chitter')
  })
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peep)
    const vm = new Constructor({
    }).$mount()
    expect(vm.$el.querySelector('.peep h2').textContent)
      .toEqual('why be a when you can be a pirate')
  })

})