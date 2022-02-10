const retrieveTags = () => {}

retrieveTags.listTags = () => {
    let tags = [
        { "photoID": "1", "userID": "gPlake" },
        { "photoID": "2", "userID": "sSchmidt" },
        { "photoID": "2", "userID": "mHattrup" },
        { "photoID": "2", "userID": "gPlake" }
    ]

    return tags
}

module.exports = retrieveTags