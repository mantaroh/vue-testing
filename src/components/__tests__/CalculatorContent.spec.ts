import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CalculatorContent from "../../components/CalculatorContent.vue";

describe("CalculatorComponent", () => {
  it("Basic: 表示されることの確認", () => {
    const wrapper = mount(CalculatorContent);
    expect(wrapper.element).not.toBeNull();
  });
  it("Basic: ボタンを押して表示されることの確認", async () => {
    const wrapper = mount(CalculatorContent);
    await wrapper.find("#no7").trigger("click");

    expect(wrapper.find("#formula").element.textContent).toBe("7");
  });
  it("Basic: 小数点の入力確認", async () => {
    const wrapper = mount(CalculatorContent);
    await wrapper.find("#no7").trigger("click");
    await wrapper.find("#dot").trigger("click");
    await wrapper.find("#no7").trigger("click");

    expect(wrapper.find("#formula").element.textContent).toBe("7.7");
  });
});
