var FCC_Results = (function () {
  function FCC_Results() {


    this.SearchResultsCount = 'tbody tr td div table tbody tr .cell-pri-dark table tbody tr [valign="middle"].cell-pri-dark';
    this.SearchPageError = 'body table tbody tr td table tbody tr .cell-pri-light a';
    this.SearchPageNew = 'tbody tr td div table tbody tr td table tbody tr td a[title="New Search"]';

  }


  FCC_Results.prototype.getSearchResultsCount = function () {   return this.SearchResultsCount;  };
  FCC_Results.prototype.getSearchPageError = function () {   return this.SearchPageError;  };
  FCC_Results.prototype.getSearchPageNew = function () {   return this.SearchPageNew;  };


  return FCC_Results;


})();

module.exports = FCC_Results;
