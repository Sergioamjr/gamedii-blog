describe("Blog navigation", () => {
  it("should load page", () => {
    cy.visit("/")

    cy.get('[data-testid="page-title"]').should("contain", "Publicações")

    cy.get('[data-testid="blog-card-item"]').should("exist")
    cy.get('[data-testid="blog-card-item"]')
      .first()
      .within($el => {
        cy.get("a")
          .first()
          .click()
      })

    cy.get('[data-testid="article-title"]').should("exist")

    cy.get('[data-testid="article-content"]').should("exist")

    cy.get('[data-testid="article-content"]').within($el => {
      cy.get("p").should("exist")
    })

    cy.reload()

    cy.get('[data-testid="article-content"]').should("exist")

    cy.get('[data-testid="article-content"]').within($el => {
      cy.get("p").should("exist")
    })

    cy.get('[data-testid="search-link"]').click()

    cy.get('[data-testid="page-title"]').should("contain", "Pesquisar")

    cy.get('[data-testid="input-search"]').type("dii {enter}")

    cy.contains("Pesquisando...")

    cy.get('[data-testid="search-result-item"]').should("exist")
  })
})
