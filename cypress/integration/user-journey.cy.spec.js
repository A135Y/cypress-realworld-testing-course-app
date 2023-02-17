describe("user-journeys", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    it("a user can select a course from the homepage and complete the lesson", () => {
        cy.getByData("course-0").find("a").eq(3).click();
        cy.getByData("next-lesson-button").click();
        cy.getByData("challenge-answer-0").click();
        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("next-lesson-button").click();
        cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").click();
        cy.location("pathname").should("eq", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").click();

    })
})