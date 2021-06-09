document.querySelector('#btn').onclick = function () {
  import(/* webpackPrefetch: true */'./test').then(({ mul }) => {
    console.log(mul(2, 3));
  });
};
