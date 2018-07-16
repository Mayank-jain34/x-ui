import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';

describe('Button.vue', () => {
  it('Should display correct text on button', () => {
    const text = 'button';
    const wrapper = shallowMount(Button, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('button should be disabled', () => {
    const text = 'button';
    const disable = true;
    const wrapper = shallowMount(Button, {
      propsData: { text, disable},
    });
    expect(wrapper.attributes().disabled).toBe('disabled');
  });
});
