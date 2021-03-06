import React from 'react';
import {mount, render} from 'enzyme';
import Message from '../index';

jest.useFakeTimers();

describe('Message', () => {
  it('default case', () => {
    const wrapper = render(<Message />);
    expect(wrapper.find('.Yep-icon-bell').length).toBe(1);
    expect(wrapper.find('.Yep-icon-close').length).toBe(0);
    expect(wrapper.hasClass('Yep-message')).toBe(true);
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = render(<Message {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('do not render Icon component when icon prop is false', () => {
    const props = {
      icon: false,
    };
    const wrapper = render(<Message {...props} />);
    expect(wrapper.find('.Yep-icon-bell').length).toBe(0);
  });

  it('render close Icon when closeable prop is true', () => {
    const props = {
      closeable: true,
    };
    const wrapper = render(<Message {...props} />);
    expect(wrapper.find('.Yep-icon-close').length).toBe(1);
  });

  it('message box className is provided by prop type', () => {
    const props = {
      type: 'warn',
    };
    const wrapper = render(<Message {...props} />);
    expect(wrapper.find('.box-warn').length).toBe(1);
  });

  it('component will auto hide after duration', () => {
    const props = {
      duration: 3000,
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.state().isShow).toBe(true);
    jest.advanceTimersByTime(4000);
    expect(wrapper.state().isShow).toBe(false);
  });

  it('component will hide when use click close button', () => {
    const props = {
      closeable: true,
    };
    const wrapper = mount(<Message {...props} />);
    wrapper.find('.Yep-icon-close').simulate('click');
    expect(wrapper.state().isShow).toBe(false);
  });

  it('When position assigns fix-bottom, message notifications are displayed at the bottom of the page', () => {
    const props = {
      position: 'fix-bottom',
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find('.Yep-message').hasClass('fix-bottom')).toBe(true);
  });

  it('When position assigns fix-top, message notifications are displayed at the top of the page', () => {
    const props = {
      position: 'fix-top',
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find('.Yep-message').hasClass('fix-top')).toBe(true);
  });
});
