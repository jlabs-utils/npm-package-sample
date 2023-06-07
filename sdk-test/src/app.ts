import Typicode from 'sdk-demo-12345'

const client = new Typicode({ apiKey: '123' })

// GET ALL POSTS
client.getPosts().then((posts) => console.log(posts))

// GET POST BY ID
// client.getPostById(1).then(p => console.log(p))

// CREATE NEW POST
// client
//   .createPost({
//     title: 'foo',
//     body: 'bar',
//     id: 1,
//   })
//   .then((p) => console.log('New post is created', p))
