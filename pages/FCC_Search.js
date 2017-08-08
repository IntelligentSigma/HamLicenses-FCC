var FCC_Search = (function () {
  function FCC_Search() {


    this.ActiveCheckBox = 'body table form #statusActive';
    this.ZipCodeTextBox = 'body table form input[name="fiUlsZipcode"]';
    this.SearchButton = 'body table form [alt="Search"]';


  }


  FCC_Search.prototype.getActiveCheckBox = function () {   return this.ActiveCheckBox;  };
  FCC_Search.prototype.getZipCodeTextBox = function () {   return this.ZipCodeTextBox;  };
  FCC_Search.prototype.getSearchButton = function () {   return this.SearchButton;  };


  FCC_Search.prototype.visitFCC = function () {
    console.log("url:" + browser.testEnv.baseUrl + "searchAmateur.jsp");
    browser.get(browser.testEnv.baseUrl + "searchAmateur.jsp");
  };


  return FCC_Search;


})();

module.exports = FCC_Search;
