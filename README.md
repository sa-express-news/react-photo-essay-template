This is a photo essay template build atop [expressnews-react-template](https://github.com/sa-express-news/expressnews-react-template) designed for deployment to WCM. It uses React + Webpack + Redux + Grommet.

[Here's an example of it in use](http://www.expressnews.com/scott-deem-firefighter-san-antonio-photo-essay/).

## Quickstart

Run this command in your project's folder:

```sh
curl -fsSL https://github.com/sa-express-news/react-photo-essay-template/archive/master.tar.gz | tar -xz --strip-components=1
```

Next, `npm install`.

Replace the placeholder images in the `images` directory with your own images.

Open `data/photos.json` and update the image url paths (they point to the `images` directory), titles and captions.

Open `data/credits.json` and update the photographers' names.

You'll next want to run `npm run start`.

Currently there is a bug with a Grommet dependency and Sass-Loader that, until new versions are released, will likely throw an error on first load. Here's how to fix it:

In both of these files – `node_modules/grommet/scss/grommet-core/index.scss` and `node_modules/grommet/scss/grommet-core/_settings.scss` – change all of the imports that begin with `inuit` to `~inuit`. Eg. `@import "inuit-normalize/generic.normalize";` becomes `@import "~inuit-normalize/generic.normalize";`. Then you should be up and running.

## Deploying

In `package.json` enter the path to your S3 bucket.

Run `npm run build`.

Upload all compressed assets to S3, minus `index.html`. Load `index.html`'s JS and CSS scripts into a freeform and override the WCM template CSS as necessary.