const users = () => {}

users.listUsers = () => {
    let users = [
        { "githubLogin": "mHattrup", "name": "Mike Hattrup" },
        { "githubLogin": "gPlake", "name": "Glen Plake" },
        { "githubLogin": "sSchmidt", "name": "Scot Schmidt" }
    ];
    return users
}

module.exports = users