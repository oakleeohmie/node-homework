const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your Github username"
    },
    {
        type: "input",
        name: "favorite color",
        message: "What is your favorite color?"
    };
];

function writeToFile("generate.pdf", pdf) {

};
async function getGithubInfo(data) {
    let res = await axios.get(`https://api.github.com/users/${username}`);
    let followers = res.data.followers_url;
    let following = res.data.following_url
    let location = res.data.location;
}

function init() {

    init()
};