const retrievePhotos = () => {}

retrievePhotos.listPhotos = () => {
    let photos = [
        {
        "id": "1",
        "name": "Dropping the Heart Chute",
        "description": "The heart chute is one of my favorite chutes",
        "category": "ACTION",
        "githubUser": "gPlake"
        },
        {
        "id": "2",
        "name": "Enjoying the sunshine",
        "category": "SELFIE",
        "githubUser": "sSchmidt"
        },
        {
        id: "3",
        "name": "Gunbarrel 25",
        "description": "25 laps on gunbarrel today",
        "category": "LANDSCAPE",
        "githubUser": "sSchmidt"
        }
    ];

    return photos
}

module.exports = retrievePhotos