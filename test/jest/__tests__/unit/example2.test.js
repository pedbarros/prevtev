/*mport Quasar, * as All from "quasar";
import { mount, createLocalVue } from "@vue/test-utils";
import Error404 from "../../../../src/pages/Error404";

describe("Component", () => {
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar, {
      config: { components: All, directives: All, plugins: All }
    });
  });

  it("is a Vue instance", () => {
    const wrapper = mount(Error404, {
      localVue
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
*/

describe("Name of the group", () => {
  it("should ", () => {
    expect(1).toBe(1);
  });
});
