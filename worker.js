addEventListener('message', ({data}) => {
  postMessage(typeof data.split('.').reduce(
    ($, k) => $ == null ? $ : $[k],
    globalThis
  ));
});
