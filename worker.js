import {dump} from 'https://cdn.jsdelivr.net/gh/nuxodin/dump.js@1.2.1/mod.js';
addEventListener('message', ({data}) => {
  const target = data.split('.').reduce(
    ($, k) => $ == null ? $ : $[k],
    globalThis
  );
  console.log(dump)
  postMessage({
    type:typeof target,
    dumped: dump(target, {depth: 1, inherited: true})
  });
});
