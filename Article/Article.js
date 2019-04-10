// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton;
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

class Article {
  constructor(article) {
    this.article = article;
    this.articleButtons = this.article.querySelector(".expandButton");
    this.articleBtnOpen = this.article.querySelector(".article-open");
    this.articleBtnClose = this.article.querySelector(".close");
    this.articleContent = this.article.querySelector(".article");

    this.articleButtons.addEventListener("click", () => this.toggleArticle());
  }
  toggleArticle() {
    this.articleBtnOpen.classList.toggle(".article-open");
    this.articleBtnClose.classList.toggle(".close");
    this.articleContent.classList.toggle(".article");
  }
};

let articles = document.querySelectorAll(".article");

articles.forEach(function(article){
  return new Article(article);
});

