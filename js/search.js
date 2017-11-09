(function() {
  function decodeTags(tags){
    var str = tags.split("[")[1];
    str = str.split("]")[0];
    str = str.replace(/&quot;/g, "");
    return str.split(", ");
  }

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = "";
    if (results.length) { // Are there any results?
      var appendString = '';
      var postStringList = [];
      

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<article class="post-showinfo post type-post status-publish format-standard has-post-thumbnail hentry category-html category-seo tag-css tag-html tag-mobile">'; 
        appendString += '<div class="post-media overlay">';
        appendString += '<a href="' + item.url + '" class="feature-image hover-animate">';
        appendString += '<img src="'+ item.baseUrl + item.image + '" alt="img-4-1170x400.png"><i class="fa fa-link"></i></a>';
        appendString += '</div>';
        appendString += '<div class="post-text">';
        appendString += '<div class="post-head small-screen-center">';
        appendString += '<h2 class="post-title entry-title">';
        appendString += '<a href="' + item.url + '" title="' + item.title + '" rel="bookmark">' + item.title + '</a>';
        appendString += '</h2>';
        appendString += '</div>';
        appendString += '<div class="post-body entry-content">';
        appendString += '<p>' + item.content + '</p>';
        appendString += '</div>';
        appendString += '<a href="' + item.url + '" class="more-link box">Lees meer</a>';
        appendString += '<div class="post-extras bordered text-center">';
        appendString += '<div class="text-center">';
        appendString += '<span class="post-category">'; 
        appendString += '<i class="fa fa-folder-open"></i>';
        appendString += '<a href="" rel="tag">'+item.category+'</a>';
        appendString += '</span>';

        var tags = decodeTags(item.tags);

        if(tags[0] != ""){
          appendString += '<span class="post-tags">';
          appendString += '<i class="fa fa-tags"></i>';
          tags.forEach(function (it) {
            appendString += '<a href="" rel="tag">' + it + '</a>';
          });
          appendString += '</span>';          
        }
        
        appendString += '</div>';
        appendString += '</div>';
        appendString += '</div>';
        appendString += '</article>';

        postStringList.push(appendString);
        appendString = "";
      }
      postStringList.forEach(function (item) {
        searchResults.innerHTML += item;
      });
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('category');
      this.field('content');
      this.field('tags');
    });



    for (var key in window.store) { // Add the data to lunr
      window.store[key].tags
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'category': window.store[key].category,
        'content': window.store[key].content,
        'tags': decodeTags(window.store[key].tags)
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      console.log(results);
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
