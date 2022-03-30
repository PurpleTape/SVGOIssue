# Problem

There are 2 files in the `assets` folder: `image.svg` and `image2.svg`. Both files contain a comments. 
At the same time, for some reason, `image.svg` is processed (comments and extra groups are removed), 
and comments are not removed in the second file `image2.svg`.

Steps to repeat:

1. Start the server `npm run serve`
2. Go to the development page (the link is indicated in the console at startup)
3. Open browser's developer console and try to extract image links (like `/img/image.8ea55e89.svg` and `/img/image2.2f7be380.svg`)
4. In this case, the `image.svg` file will be optimized, and `image2.svg` will contain comments...

This works on vue-cli, which uses webpack 5. The configuration is configured in the `vue.config.js` file. 
To view a raw webpack configuration, write 
```
vue inspect > output.js
```
or to print in console:
```
vue inspect 
```



