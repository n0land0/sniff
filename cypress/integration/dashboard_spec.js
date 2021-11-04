describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('https://sniff-api.herokuapp.com/api/v1/users', {
      body: [
        {
          id: 1,
          owner_name: 'Nolan',
          dog_name:  'Biscuit',
          profile_pic: 'https://i.imgur.com/i4UwYMu.jpeg',
          dog_breed: 'Sheppard',
          bio: 'lorem',
          appointments: []
        },
        {
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
              "date": "2021-11-24",
              "location": "Greenway Dog Park"
            },
            {
              "id": 1635920119866,
              "userId": 2,
              "playmate": {
                "id": 4,
                "ownerName": "Robbie",
                "dogName": "Chunk"
              },
              "date": "2021-11-18",
              "location": "Cherry Creek Dog Park"
            }
          ]
        },
        {
          id: 3,
          owner_name: 'Paul',
          dog_name: 'Twinky',
          profile_pic: 'https://i.imgur.com/ZMPYHsk.jpeg',
          dog_breed: 'Pit Bull',
          bio: 'lorem',
          appointments: []
        },
        {
          id: 4,
          owner_name: 'Robbie',
          dog_name: 'Chunk',
          profile_pic: 'https://i.imgur.com/tIqs5vu.jpeg',
          dog_breed: 'Wiener',
          bio: 'lorem',
          appointments: []
        },
        {
          id: 5,
          owner_name: 'Kayla',
          dog_name: 'Kevin',
          profile_pic: 'https://i.imgur.com/ZKGFJbC.jpeg',
          dog_breed: 'Corgi',
          bio: 'lorem',
          appointments: []
        }
      ]
    })
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
          "date": "2021-11-24",
          "location": "Greenway Dog Park"
        },
        {
          "id": 1635920119866,
          "userId": 2,
          "playmate": {
            "id": 4,
            "ownerName": "Robbie",
            "dogName": "Chunk"
          },
          "date": "2021-11-18",
          "location": "Cherry Creek Dog Park"
        }
      ]
    }).visit('http://localhost:3000/')
  })

  it('should display upcoming playdates',() => {
    cy.get('.playdates-container>article').eq(1)
      .should('exist')
  })
})
