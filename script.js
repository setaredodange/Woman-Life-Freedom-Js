let autoCompleteWrapper = document.querySelector('.search-input')
let searchInputElem = document.querySelector('input')
let autoCompleteBox = document.querySelector('.autocom-box')


searchInputElem.addEventListener('keyup', function(){
    let searchValue = searchInputElem.value

    if(searchValue){
        autoCompleteWrapper.classList.add('active')  

        let filteredWords = suggestions.filter(function(word){
            // return word.toLowerCase().includes(searchValue.toLowerCase())
            return word.toLowerCase().startsWith(searchValue.toLowerCase())

        })
// console.log(filteredWords);
suggestionWordsGenerator(filteredWords)

    }else{
        autoCompleteWrapper.classList.remove('active')  
    }
})

function suggestionWordsGenerator (wordArray){
    let listItemArray = wordArray.map(function(word){
        return '<li>' + word + '</li>'
    })
    // console.log(listItemArray);

    let customListItem
    if(!listItemArray.length){
        customListItem = '<li>' + searchInputElem.value + '</li>'

    }else{
        customListItem = listItemArray.join('')
    }
    // console.log(customListItem);
    autoCompleteBox.innerHTML = customListItem
    select()
}
      
function select(){
    let allListItem = autoCompleteBox.querySelectorAll('li')
    allListItem.forEach(function(wordItem){
        wordItem.addEventListener('click', function(event){
            // console.log(event);
            searchInputElem.value = event.target.textContent 
            autoCompleteWrapper.classList.remove('active')
        })
    })

}