import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import "../../setupTest";
import { findByTestAttr, checkProps } from "../../../Utils/index.js";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "test header",
        desc: "test desc"
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a H1", () => {
      const H1 = findByTestAttr(component, "header");
      expect(H1.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have NO props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArray: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 29,
            online: false
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
