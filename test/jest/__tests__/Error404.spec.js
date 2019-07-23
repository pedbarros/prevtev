import {shallowMount, createLocalVue} from '@vue/test-utils'
import Error404 from '../../../src/pages/Error404'
import {Quasar, QBtn} from 'quasar'
import components from '../loadcomponents'

describe('Mount Quasar', () => {

  let localVue
  let wrapper
  let vm

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Quasar, {components})

    wrapper = shallowMount(Error404, {
      localVue
    })
    vm = wrapper.vm
  })

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

})
