import Vue from 'vue'
import Peeps from '@/views/Peeps'

describe('Peeps.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peeps)
    const vm = new Constructor({
      data: { 
        peeps: [{"id":597,"body":"why be a when you can be a pirate","created_at":"2019-02-23T15:56:40.757Z","updated_at":"2019-02-23T15:56:40.757Z","user":{"id":907,"handle":"kwaiks"},"likes":[]}]
     }
    }).$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .toEqual('Chitter')
  })
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Peeps)
    const vm = new Constructor({
      data: { 
        peeps: [{"id":597,"body":"why be a when you can be a pirate","created_at":"2019-02-23T15:56:40.757Z","updated_at":"2019-02-23T15:56:40.757Z","user":{"id":907,"handle":"kwaiks"},"likes":[]}]
     }
    }).$mount()
    expect(vm.$el.querySelector('.peep h2').textContent)
      .toEqual('why be a when you can be a pirate')
  })

})