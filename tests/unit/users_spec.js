import Vue from 'vue'
import Users from '@/views/Users'

describe('Peep.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Users)
    const vm = new Constructor({
    }).$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .toEqual('Chitter')
  })
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Users)
    const vm = new Constructor({
    }).$mount()
    expect(vm.$el.querySelector('.peep h2').textContent)
      .toEqual('why be a when you can be a pirate')
  })

})