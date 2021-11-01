const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const userData = [
  {
    id: 1,
    ownerName: 'Nolan',
    dogName:  'Biscuit',
    profilePic: 'https://i.imgur.com/i4UwYMu.jpeg',
    dogBreed: 'Sheppard',
    bio: lorem,
    appointments: []
  },
  {
    id: 2,
    ownerName: 'Joshua',
    dogName: 'Fido',
    profilePic: 'https://i.imgur.com/LRoLTlK.jpeg',
    dogBreed: 'Labrador',
    bio: lorem,
    appointments: [
      {
        date: '2021-11-02',
        id: 1635662137907,
        location: 'Cherry Creek Dog Park',
        usersInvolved: [2, 3]
      },
      {
        date: '2021-09-29',
        id: 1635662144859,
        location: 'Greenway Dog Park',
        usersInvolved: [2, 5]
      }
    ]
  },
  {
    id: 3,
    ownerName: 'Paul',
    dogName: 'Twinky',
    profilePic: 'https://i.imgur.com/ZMPYHsk.jpeg',
    dogBreed: 'Pit Bull',
    bio: lorem,
    appointments: []
  },
  {
    id: 4,
    ownerName: 'Robbie',
    dogName: 'Chunk',
    profilePic: 'https://i.imgur.com/tIqs5vu.jpeg',
    dogBreed: 'Wiener',
    bio: lorem,
    appointments: []
  },
  {
    id: 5,
    ownerName: 'Kayla',
    dogName: 'Kevin',
    profilePic: 'https://i.imgur.com/ZKGFJbC.jpeg',
    dogBreed: 'Corgi',
    bio: lorem,
    appointments: []
  }
]

export default userData
