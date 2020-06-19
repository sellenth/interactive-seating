import React from "react";
import { render } from "@testing-library/react";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { TestEnv } from "../index";

describe('<TestEnv />'), () => {
  it('renders 8 dummy cards', () => {
    const wrapper = shallow(<TestEnv></TestEnv>);
    expect(wrapper.find(Div).to.have.lengthOf(9))
  }
}