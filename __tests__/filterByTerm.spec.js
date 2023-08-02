// Per the specification, the function under the test should leave out the objects whose url property does not match the given search term

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "http://www.link3.dev" },
    ];

    // expected output: an array with a single object, given 'link' as the search term
    const output = [{ id: 3, url: "https://www.link3.dev" }];
  });
});
