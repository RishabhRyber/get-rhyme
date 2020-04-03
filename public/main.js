// Information to reach API


// Selecting page elements
const inputField = document.querySelector('#input');
const submitRhyme = document.querySelector('#rhyme');
const submitAdjective = document.querySelector('#adjective');
const submitSound = document.querySelector('#soundLike');
const submitMeaning = document.querySelector('#meaning');
const responseField = document.querySelector('#responseField');

// AJAX function
const getRhymes = () => {
  const url = 'https://api.datamuse.com/words?';
  const queryParams = 'rel_rhy=';
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displayRhymesSuggestions = (event,flag) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getRhymes();
}

const getAdjective = () => {
  const url = 'https://api.datamuse.com/words?';
  const queryParams = 'rel_jbb=';
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displayAdjectiveSuggestions = (event,flag) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getAdjective();
}

const getMeaning = () => {
  const url = 'https://api.datamuse.com/words?';
  const queryParams = 'ml=';
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displayMeaningSuggestions = (event,flag) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getMeaning();
}

const getSound = () => {
  const url = 'https://api.datamuse.com/words?';
  const queryParams = 'sl=';
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySoundSuggestions = (event,flag) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSound();
}


submitRhyme.addEventListener('click', displayRhymesSuggestions);
submitAdjective.addEventListener('click', displayRhymesSuggestions);
submitMeaning.addEventListener('click', displayMeaningSuggestions);
submitSound.addEventListener('click', displaySoundSuggestions);
