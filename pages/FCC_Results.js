var Results = (function () {
  function Results() {


    this.searchResultsCount = 'tbody tr td div table tbody tr .cell-pri-dark table tbody tr [valign="middle"].cell-pri-dark';
    this.searchPageError = 'body table tbody tr td table tbody tr .cell-pri-light a';
    this.searchPageNew = 'tbody tr td div table tbody tr td table tbody tr td a[title="New Search"]';

  }


  Results.prototype.getSearchResultsCount = function () {   return this.searchResultsCount;  };
  Results.prototype.getSearchPageError = function () {   return this.searchPageError;  };
  Results.prototype.getSearchPageNew = function () {   return this.searchPageNew;  };


  return Results;


})();

module.exports = Results;
