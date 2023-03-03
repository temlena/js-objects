//question 1
const Post = new Object();
Post.handle = 'helena';
Post.content = 'Happy holidyas are here';
Post.image = 'https.//images.com';
Post.view = 59;
Post.likes = 100;
console.log(Post);


//question two
function Post2(handle, content, image, views, likes) {
    this.handle = handle;
    this.content = content;
    this.image = image;
    this.views = views;
    this.likes = likes;
}
const Post3 = new Post2('Joan', 'Travels', 'www.images.com', 90, 100);
console.log(Post3);

const Post4 = new Post2('mirabel', 'skincare routine', 'www.images.com', 86, 200);
console.log(Post4);

//question three
function createJambScores(ENG, GOVT, LIT, CRK) {
    this.ENG = ENG;
    this.GOVT = GOVT;
    this.LIT = LIT;
    this.CRK = CRK;
    return ({ENG, GOVT, LIT, CRK})
}
const score = createJambScores(70, 85, 82, 94);
console.log(score);
// {ENG: 70, GOVT: 85, LIT: 82, CRK: 94}
function createPerson(name, age, location, scores) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.scores = scores;
    return ({name, age, location, scores})
}
const student = createPerson('Mariam yesuf', 19, 'Abuja', score);
console.log(student);
/**
 * {
 *    name: 'Mariam yesuf',
 *    age: 19,
 *    location: 'Abuja',
 *    scores: {ENG: 70, GOVT: 85, LIT: 82, CRK: 94}
 * }
 */

//question 4
// Option 1
//Object.assign(): 
const firstPerson = {
    firstName: 'tiana',
    age: 18,
}
const secondPerson = Object.assign({}, firstPerson);
secondPerson.age = 50;
console.log(secondPerson);
//{firstName: 'tiana', age: 50}

 // Option 2
 //Spread Operator:
const thirdPerson = {...firstPerson};
thirdPerson.age = 30;
console.log(thirdPerson);
// {firstName: 'tiana', age: 30}

 // Option 3
 //JSON.parse() and JSON.stringify():
const fourthPerson = JSON.parse(JSON.stringify(firstPerson));
fourthPerson.age = 35;
console.log(fourthPerson);
// {firstName: 'tiana', age: 35}

//question 4
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for (const key in presidentialCandidates) {
        console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`)
}