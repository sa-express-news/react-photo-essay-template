This is a starter template for working with React + Webpack + Grommet that is structured to deploy to WCM. It also installs Redux and comes with empty `action` and `reducer` directories that should be populated if you choose to use Redux.

## Quickstart

Run this command in your project's folder:

```sh
curl -fsSL https://github.com/sa-express-news/expressnews-react-template/archive/master.tar.gz | tar -xz --strip-components=1
```

Next, `npm install`.

You'll next want to run `npm run start`.

Currently there is a bug with a Grommet dependency and Sass-Loader that, until new versions are released, will likely throw an error on first load. Here's how to fix it:

In both of these files – `node_modules/grommet/scss/grommet-core/index.scss` and `node_modules/grommet/scss/grommet-core/_settings.scss` – change all of the imports that begin with `inuit` to `~inuit`. Eg. `@import "inuit-normalize/generic.normalize";` becomes `@import "~inuit-normalize/generic.normalize";`. Then you should be up and running.

I'll fill out the ReadMe more soon but, it's worth noting that the React/Redux structure is based loosely on [this 3-part tutorial](https://css-tricks.com/learning-react-router/) (but we're not using React-Router at the moment due to a WCM conflict I need to debug)

## Deploying

In `package.json` enter the path to your S3 bucket.

Run `npm run build`.

Upload all compressed assets to S3, minus `index.html`. Load `index.html`'s JS and CSS scripts into a freeform and override the WCM template CSS as necessary.