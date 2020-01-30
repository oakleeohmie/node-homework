const axios = require("axios");
var inquirer = require("inquirer");
var htmlPage = require("./generateHTML");
const fs = require("fs");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument();

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your Github username"
        },
        {
            type: "input",
            name: "color",
            message: "What is your favorite color?"
        }
    ]);
    function writeToFile(doc) {
        axios.get(`https://api.github.com/users/${username}`).then(function (res) {
            const picture = res.data.avatar_url;
            const name = res.data.name;
            const location = res.data.location;
            const gitHub = res.data.html_url;
            const blog = res.data.blog;
            const bio = res.data.bio;
            const repoNumber = res.data.public_repos;
            const followers = res.data.followers;
            const following = res.data.following;
            console.log(picture)
            console.log(location)
        });

    };
    function init() {

        init();
    }