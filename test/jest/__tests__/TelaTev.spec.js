import {shallowMount, createLocalVue} from '@vue/test-utils'
import TelaTev from '../../../src/pages/TelaTev'
import PVImagem from '../../../src/components/PVImagem'
import {Quasar, QBtn} from 'quasar'
import components from '../loadcomponents'

describe('Mount Quasar', () => {

  let localVue
  let wrapper
  let vm

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Quasar, {components}) // , lang: langEn

    wrapper = shallowMount(TelaTev, {
      localVue
    })
    vm = wrapper.vm
  })

  it('passes the sanity check and creates a wrapper', () => {
   const pvImage = wrapper.find('img')
    console.log(pvImage)
  })

})
