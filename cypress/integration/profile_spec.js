describe('Profile Page View', () => {

  beforeEach(() => {
    cy.intercept('https://sniff-api.herokuapp.com/api/v1/users/1', {
      id: 1,
      owner_name: 'Nolan',
      dog_name:  'Biscuit',
      profile_pic: 'https://i.imgur.com/i4UwYMu.jpeg',
      dog_breed: 'Sheppard',
      bio: 'lorem',
      appointments: []
    }).visit('http://localhost:3000/profile/1')
  })

  it('should be able to input date into form', () => {
    cy.get('input[type="date"]')
      .type('2021-12-21')
      .should('have.value', '2021-12-21')
  })

  it('should be able to select a location', () => {
    cy.get('select')
      .select('Fuller Dog Park')
      .should('have.value', 'Fuller Dog Park')
  })

  it('should display a newly made booking', () => {
    cy.get('input[type="date"]')
      .type('2021-12-21')

    cy.get('select')
      .select('Fuller Dog Park')

    cy.get('form')
      .find('button')
      .click()

    cy.intercept('https://sniff-api.herokuapp.com/api/v1/playdates')
    cy.intercept('https://sniff-api.herokuapp.com/api/v1/users/2', {
      id: 2,
      owner_name: 'Joshua',
      dog_name: 'Fido',
      profile_pic: 'https://i.imgur.com/LRoLTlK.jpeg',
      dog_breed: 'Labrador',
      bio: 'lorem',
      appointments: [
        {
          "id": 1635920058018,
          "userId": 2,
          "playmate": {
            "id": 1,
            "ownerName": "Nolan",
            "dogName": "Biscuit"
          },
          "date": "2021-12-21",
          "location": "Fuller Dog Park"
        }
      ]
    })
    cy.intercept('https://sniff-api.herokuapp.com/api/v1/users/1', {
      id: 1,
      owner_name: 'Nolan',
      dog_name:  'Biscuit',
      profile_pic: 'https://i.imgur.com/i4UwYMu.jpeg',
      dog_breed: 'Sheppard',
      bio: 'lorem',
      appointments: [
        {
          "id": 1635920058018,
          "userId": 1,
          "playmate": {
            "id": 2,
            "ownerName": "Joshua",
            "dogName": "Fido"
          },
          "date": "2021-12-21",
          "location": "Fuller Dog Park"
        }
      ]
    })

    cy.get('.profile')
      .should('include.text', 'You have a playdate scheduled on 2021-12-21 at Fuller Dog Park.')
  })

  it('should be able to go back to gallery from the profile', () => {
    cy.get('.find-friends-btn').click()
    cy.get('.gallery').url().should('include', '/findfriends')
  })
})
