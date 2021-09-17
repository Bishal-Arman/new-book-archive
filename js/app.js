const errorMessage=document.getElementById('error-message')
//search area for input field
const searchBook=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    searchField.value='';
    //error message for empty search
  if(searchText===''){
    const searchResult=document.getElementById('search-result');
    searchResult.textContent='';
    errorMessage.innerText='please type the book name';
    return;
    }
  else{
    errorMessage.innerText=''
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchBook(data.docs))
  }
      
 }
 //for display books
   const displaySearchBook=books=>{
   const errorMessage=document.getElementById('error-message')
   const h2 = document.createElement('h2');
   h2.innerHTML = `
      <h2 class="text-center mb-5">Total Book Found ${books.length}</h2>
    `
  errorMessage.appendChild(h2)
 //for not found result
  if(books.length===0){
  errorMessage.innerText='result not found,Please type a valid book name'
   }
  const searchResult=document.getElementById('search-result');
  searchResult.textContent='';

 
  books.forEach(book=>{
     const div=document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`  <div class="card h-100">
       <img  src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"   class ="card-img-top">
         <div class="card-body">
         <h5 class="card-title">Book Name:${book.title}</h5>
         <p class="card-text text-warning">Author Name: ${book?.author_name?.[0]}</p>
         <p class="card-text text-success">Publisher: ${book?.publisher?.[0]}</p>
         <p class="card-text">Publishing Year: ${book.first_publish_year}</p>
      </div>
    </div> `
    searchResult.appendChild(div);   
  })
       
    
}