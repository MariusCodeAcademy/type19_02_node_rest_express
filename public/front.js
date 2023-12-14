'use strict';
console.log('front.js file was loaded');

const url = 'http://localhost:3000/api/users';
// gauti userius
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log('data ===', data);
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });

// sukurti funkcija kuri parsiuncia pirma useri is back end ir atvaizduoja ji html h3 tage (http://localhost:3000/users/1)

async function addUserToHtml() {
  const resp = await fetch(`${url}/1`);
  console.log('resp ===', resp);
  const userObj = await resp.json();
  console.log('userObj ===', userObj);
  const h3El = document.createElement('h3');
  const { age, name } = userObj;
  h3El.textContent = `name: ${name} is ${age} years old`;
  document.body.append(h3El);
}
addUserToHtml();
