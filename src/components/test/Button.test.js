import React from "react";
import {shallow} from "enzyme";
import Button from "../Button";

describe('<CenteredHeading />', () => {
  it('should contain text', () => {
    const wrapper = shallow(<Button>Hello</Button>);
    expect(wrapper.text()).to.equal('Hello');
  });
});
