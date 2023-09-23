//######################################## Filter introduction. it is always it conditions are apply here.#############################
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  // this is a CONDITION (index_books.genre ==="History") or task here Filter are perform here.

  //filter(callbackFn)
  //filter(callbackFn, thisArg)
  
 let ind_books =  books.filter((index_books)=>{return index_books.genre ==="History" })
// console.log(ind_books);

function books_edition(index){
    if(index.edition >= 2000){
      return index.edition
    }
}

// console.log(books.filter(books_edition));
console.log("################## publish 1995 bw 2000 ###################");

function books_publish(index) {
  if (index.publish >= 1990 && index.publish <= 2000){
    return index.publish
  }
}
console.log(books.filter(books_publish));
// console.log(books.filter((fil) => fil.publish >= 2000));
