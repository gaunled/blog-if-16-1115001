dpd.articles.get({
    $sort: {updatedAt:-1},
    $fields: { id: 1, title: 1}
},function (result, err) {
  if(err) return console.log(err);
  console.log(result);
  setResult(result);
});