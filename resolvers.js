const retrieveUsers = require('./users')
const retrievePhotos = require('./photos')
const retrieveTags = require('./tags')

let _id = 0;

let users = retrieveUsers.listUsers()
let photos = retrievePhotos.listPhotos()

let tags = retrieveTags.listTags()

const resolvers = {
    Query: {
    totalPhotos: () => photos.length,
    allPhotos: () => photos,
    allUsers: () => users
    },

    Mutation: {
        postPhoto(parent, args) {
            let newPhoto = {
                id: _id++,
                ...args.input
            }
            photos.push(newPhoto)
            return newPhoto
        }
    },
    Photo: {
        url: parent => `http://yoursite.com/img/${parent.id}.jpg`,
        postedBy: parent => {
            return users.find(u => u.githubLogin == parent.githubUser)
        },
        taggedUsers:parent => tags.filter(tag => tag.photoID === parent.id).map(tag => tag.userID).map(userID => users.find(u => u.githubLogin === userID))
    },
    User: {
        postedPhotos: parent => {
            return photos.filter(p => p.githubUser === parent.githubLogin)
        },
        inPhotos: parent => tags
                // Returns an array of tags that only contain the current user
                .filter(tag => tag.userID === parent.id)
                // Converts the array of tags into an array of photoIDs
                .map(tag => tag.photoID)
                // Converts array of photoIDs into an array of photo objects
                .map(photoID => photos.find(p => p.id === photoID))
    }
}
module.exports = resolvers 