[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/cdfishe1/nanny-now)
![GitHub top language](https://img.shields.io/github/languages/top/cdfishe1/nanny-now)

# Nanny now

Nanny Now allows parents who need to find a nanny to connect with people who offer their nanny services.

## Created by

- [Natalie Finnegan](https://github.com/nfinnegan)
- [Charles Fisher](https://github.com/cdfishe1)
- [Diego Villarreal](https://github.com/diego773)

## Table of Contents

- [User Story](#user-story)
- [Nanny Now Demos](#show-match-demos)
- [Deployment](#deployment)
- [Installation](#installation)
- [Nodemailer](#nodemailer)
- [Challenges and Successes](#challenges-and-successes)
- [Directions for Future Development](#directions-for-future-development)
- [Credits](#credits)
- [Special Thanks](#special-thanks)
- [License](#license)

## User Story

```
AS a parent
I want to easily search/find nannies in my area
SO that, I can get childcare support

```

## Acceptance Criteria

```
GIVEN a nanny service website
WHEN I am brought to the homepage
THEN I am presented with options to contact, login, and signup
WHEN I signup
THEN I am presented with inputs for username, email, password, and location, and Nanny Needs gender, languages, education, and years of experience.
WHEN I click on the submit button
THEN I am taken to a search bar to find nannies in my area
WHEN I enter a city in the search bar
THEN I am presented with results from a nanny database that matches my city input
When I click login
THEN I am also presented with the search bar
WHEN I click contact us
THEN I am presented with an email form
WHEN I fill out the form and click submit
THEN an email is sent to Nanny Now with my comments
```

## Nanny Now Demos

### Screencast on wide screen

### Screencast on mobile

## Deployment

Site deployed at [Nanny Now](https://murmuring-stream-65661.herokuapp.com/)

## Installation

This app uses the following dependencies:

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [sequelize](https://www.npmjs.com/package/sequelize)

### Installation Instructions

- In order to install this app please run npm install on the command line in node.js.
- You can use the .env.EXAMPLE file to input your specific information for the working .env file.
- If deploying to Heroku you will need to use JAWS_DB for the database, as well as to set your environment variables for the email server.

## Nodemailer

We used Nodemailer in order to construct our email contact form.

## Challenges and Successes

- Nodemailer was a challenge to get up and running. We needed to translate the boilerplate code and video demonstration into the specific needs of our project. This was also a success. It really forced us to understand what Nodemailer is doing so that we could adopt it for our needs.
- Getting handlebars to work with conditionals for navbar management was a challenge.
- Our team worked well in dividing responsibilities and getting tasks done in a timely manner. The MVC model was quite helpful for helping to not "step on each other's code", as well as to minimize git conflicts.

## Directions for Future Development

- Nannies will be able to login and create their own profile.
- More robust searching with the ability to narrow searches by criteria such as languages, years of experience, etc.
- Text messaging between parents and nannies
- Development of an internal messaging system so that emails could be eliminated.
- Integrate a payment system (Stripe or PayPal)
- Adding Terms and Conditions
- Conducting actual background checks before a Nanny is able to sign up and be booked for hire
- Rate and review for families and nannies
- See current bookings or nannies you've used in the past
- Favorite/bookmark nannies while you are searching through results

## Special Thanks

- Tom McCarthy, bootcamp guest TA, helped us understand how to leverage conditionals in handlebars to make navbar elements appear/disappear given login status.
- [Nodemailer - Send Emails From Your Node.js App](https://www.youtube.com/watch?v=nF9g1825mwk)

## License

Copyright (c) Natalie Finnegan, Charles Fisher, Diego Villarreal. All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Charles Fisher, Natalie Finnegan, Diego Villarreal

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</blockquote>
</details>
