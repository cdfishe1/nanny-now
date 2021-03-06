const { Nanny } = require("../models");

const nannyData = [
  {
    username: "natalie",
    password: "password",
    location: "chicago",
    years_experience: 2,
    education: "highschool",
    languages: "english",
    gender: "female",
    filename: "dmitry-zmiy-rD01mlJ5WUM-unsplash.jpg",
  },
  {
    username: "ashley",
    password: "password1",
    location: "chicago",
    years_experience: 5,
    education: "bachelors",
    languages: "english, spanish",
    gender: "female",
    filename: "eric-boggs-pMGMHcNStuc-unsplash.jpg",
  },
  {
    username: "jaden",
    password: "password2",
    location: "chicago",
    years_experience: 4,
    education: "masters",
    languages: "english",
    gender: "female",
    filename: "joe-gardner-N5GCRjEMboQ-unsplash.jpg",
  },
  {
    username: "john",
    password: "password3",
    location: "chicago",
    years_experience: 6,
    education: "masters",
    languages: "english, spanish",
    gender: "male",
    filename: "brock-wegner-Ealw1_4nzrE-unsplash.jpg",
  },
  {
    username: "mary",
    password: "password4",
    location: "chicago",
    years_experience: 3,
    education: "highschool",
    languages: "english",
    gender: "female",
    filename: "levi-meir-clancy-J2Yi0eeWLX0-unsplash.jpg",
  },
  {
    username: "anthony",
    password: "password5",
    location: "chicago",
    years_experience: 1,
    education: "highschool",
    languages: "english",
    gender: "male",
    filename: "jesse-k-_19yzFou2Jg-unsplash.jpg",
  },
  {
    username: "vincent",
    password: "password6",
    location: "denver",
    years_experience: 4,
    education: "bachelors",
    languages: "english,spanish",
    gender: "male",
    filename: "joanna-nix-walkup-I45gK7ZU5ss-unsplash.jpg",
  },
  {
    username: "amanda",
    password: "password7",
    location: "denver",
    years_experience: 10,
    education: "associates",
    languages: "english",
    gender: "female",
    filename: "omar-lopez-_7kr8IMASTQ-unsplash.jpg",
  },
  {
    username: "oliver",
    password: "password8",
    location: "denver",
    years_experience: 8,
    education: "associates",
    languages: "english",
    gender: "male",
    filename: "kashod-sullivan-vDP61BhOjlQ-unsplash.jpg",
  },
  {
    username: "derek",
    password: "password9",
    location: "denver",
    years_experience: 3,
    education: "associates",
    languages: "english",
    gender: "male",
    filename: "pexels-hasibullah-zhowandai-819530.jpg",
  },
  {
    username: "kelsey",
    password: "password10",
    location: "denver",
    years_experience: 4,
    education: "masters",
    languages: "english",
    gender: "female",
    filename: "stefan-stefancik-QXevDflbl8A-unsplash.jpg",
  },
  {
    username: "nathan",
    password: "password11",
    location: "denver",
    years_experience: 6,
    education: "bachelors",
    languages: "english",
    gender: "male",
    filename: "roman-shilin-_6whfYYGUWE-unsplash.jpg",
  },
];

const seedNanny = () => Nanny.bulkCreate(nannyData);

module.exports = seedNanny;
