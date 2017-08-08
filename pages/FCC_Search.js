var Search = (function () {
  function Search() {


    this.activeCheckBox = 'body table form #statusActive';
    this.zipCodeTextBox = 'body table form input[name="fiUlsZipcode"]';
    this.searchButton = 'body table form [alt="Search"]';


  }


  Search.prototype.getActiveCheckBox = function () {   return this.activeCheckBox;  };
  Search.prototype.getZipCodeTextBox = function () {   return this.zipCodeTextBox;  };
  Search.prototype.getSearchButton = function () {   return this.searchButton;  };


  Search.prototype.visitFCC = function () {
    console.log("url:" + browser.testEnv.baseUrl + "searchAmateur.jsp");
    browser.get(browser.testEnv.baseUrl + "searchAmateur.jsp");
  };


  return Search;


})();

module.exports = Search;
