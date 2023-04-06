describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // The page should contain an h1 with "Hello world!"
    cy.get("h1").contains("Hello world!");
  });
});
