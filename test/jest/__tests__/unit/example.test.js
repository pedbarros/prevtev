import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Error404 from "../../../../src/pages/Error404";
import * as All from "quasar";
import loadAllComponents from "../../../utils/load-all-components";
const { Quasar, date } = All;

describe("Mount Quasar", () => {
  let localVue;
  let shallowWrapper;
  let vmShallow;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar, { components: loadAllComponents });
    shallowWrapper = shallowMount(Error404, {
      localVue
    });
    vmShallow = shallowWrapper.vm;
  });

  afterEach(() => {
    localVue = null;
  });
  it("passes the sanity check and creates a wrapper", () => {
    expect(shallowWrapper.isVueInstance()).toBe(true);
  });

  /*

    it('accesses the shallowMount', () => {
        expect(vm.$el.textContent).toContain('rocket muffin')
        expect(wrapper.text()).toContain('rocket muffin') // easier
        expect(wrapper.find('p').text()).toContain('rocket muffin')
    })

    it('sets the correct default data', () => {
        expect(typeof vm.counter).toBe('number')
        const defaultData2 = QBUTTON.data()
        expect(defaultData2.counter).toBe(0)
    })

    it('correctly updates data when button is pressed', () => {
        const button = shallowWrapper.find('q-btn')
        button.trigger('click')
        expect(vmShallow.counter).toBe(1)
    })

    it('formats a date without throwing exception', () => {
        // test will automatically fail if an exception is thrown
        // MMMM and MMM require that a language is 'installed' in Quasar
        let formattedString = date.formatDate(Date.now(), 'YYYY MMMM MMM DD')
        console.log('formattedString', formattedString)
    })*/
});
