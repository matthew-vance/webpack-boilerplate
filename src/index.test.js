import rootElement from "./index";

describe("root element", () => {
  it("creates a root element", () => {
    let element = rootElement();

    expect(element.outerHTML).toEqual('<div id="root"></div>');
  });
});
