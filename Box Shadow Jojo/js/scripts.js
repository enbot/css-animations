import { frames } from './frames.js';
import { config } from './config.js';

var j = document.querySelector(".joseph");

var f = config.frames;

(function run(p = 0) {

    j.style["boxShadow"] = frames[f[p].pos];

    setTimeout(() => {

        run(p == f.length - 1 ? 0 : ++p);

    }, f[p].interval);

})();