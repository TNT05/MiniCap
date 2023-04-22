describe('App spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
      cy.get('h1').should('have.text', 'Welcome to your professional community');
      cy.get('img[src="/images/login-hero.svg"]').should('be.visible');
      cy.get('button').contains('Sign in with Google').should('be.visible');
      cy.contains('Sign Up').click();
      cy.get('div[class="signup"]').should('be.visible');
      cy.contains('Login').click();
      cy.get('div[class="login"]').should('be.visible');
      cy.get('input[type="email"]').type('cytest@hotmail.com');
      cy.get('input[type="password"]').type('cytest123');
      //cy.get('button[type="submit"]').click();
      cy.url().should('include', '/home');
      cy.get('div[class="sc-gHyekI cqSYQC"]').click();
      const pictureFilePath = '../fixtures/profile.jpeg'
      cy.get('input[type="file"]').attachFile(pictureFilePath)
      cy.get('button').contains('Update Photo').click()
      cy.wait(5000)
      //cy.get('li[class="sc-hAtEyd bkRxoI"]').click()
      cy.reload()
      cy.get('div[class="sc-cmEail cIcSXg"]').click();
      const pdfPath = '../fixtures/cypress.pdf'
      cy.get('input[class="resume"]').attachFile(pdfPath)
      cy.get('button[class="resumeUpload"]').click()
      cy.wait(200)
      cy.get('input[class="cover"]').attachFile(pdfPath)
      cy.get('button[class="coverUpload"]').click()
      cy.wait(200)
      cy.reload()
      cy.get('img[src="/images/edit-icon.svg"]').click();
       // Fill in contact info
      const contactInfo = "test@hotmail.com";
      cy.get('#contactInfo').type(contactInfo);

      // Fill in bio
      const bio = "I am a test";
      cy.get('#bio').type(bio);

      const textFields = "textfields" 
        cy.get('.add-button').eq(0).click();
        cy.get('[name="title"]').eq(0).type(textFields);
        cy.get('[name="company"]').eq(0).type(textFields);
        cy.get('[name="startDate"]').eq(0).type(textFields);
        cy.get('[name="endDate"]').eq(0).type(textFields);
        cy.get('[name="location"]').eq(0).type(textFields);
        cy.get('#jobDescription').type(textFields);

        cy.get('.add-button').eq(1).click();
        cy.get('[name="school"]').eq(0).type(textFields);
        cy.get('[name="program"]').eq(0).type(textFields);
        cy.get('[name="startDate"]').eq(1).type(textFields);
        cy.get('[name="endDate"]').eq(1).type(textFields);

      cy.get('.add-button').eq(2).click();
      cy.get('[name="title"]').eq(1).type(textFields);
      cy.get('[name="company"]').eq(1).type(textFields);
      cy.get('[name="startDate"]').eq(2).type(textFields);
      cy.get('[name="endDate"]').eq(2).type(textFields);
      cy.get("#volunteerDescription").type(textFields);
      
        cy.get('.add-button').eq(3).click();
        cy.get('[name="skill"]').type(textFields);
    
        cy.get('button[class="sc-hIqOWS kwPctH"]').click()

       
      //cy.get('img').should('exist')
    })
  })