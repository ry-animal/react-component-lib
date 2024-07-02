# nft-web-components

NFT Marketplace component library.

https://internal.nft.gstop-sandbox.com/nft-web-components/
(VPN connection required)

### Develop

```
npm install
npm start
```

Storybook will run in http://localhost:6006/

### Usage

To use this library in your web app, run:

```
npm install --save @gamestop/nft-web-components
```

To update to the latest version in your web app, run: `npm update @gamestop/nft-web-components`

To develop this in parallel with a web app (e.g. nft-web-store):

- Run in this repo:
  - `sudo npm link ../nft-web-store/node_modules/react ../nft-web-store/node_modules/react-router-dom ../nft-web-store/node_modules/styled-components`
    - **This is necessary to ensure that each package references an identical instance of React**
  - `npm run build`
  - `sudo npm link`
- Run in the web-app repo:
  - `npm link @gamestop/nft-web-components`
  - you might have to install the npm packages `downshift` and `polished`. Sometimes the peerDeps do not install correctly
- When you are done developing locally, make sure to run the following commands in order to unlink the packages
  - in the web-app repo run `npm unlink --no-save @gamestop/nft-web-components`
  - in the component library, `nft-web-components`, run `npm unlink --no-save react react-router-dom styled-components`
  - finally uninstall the global packages that were created because of the link with the command `npm uninstall --location=global react react-router-dom styled-components @gamestop/nft-web-components`

## :confetti_ball: Code Generators

When creating a new component use code generator in target folder

```bash
$ npx yo gme-nft:component MyComponentName --withStories
```

```
MyComponentName/
  ¬ index.interface.tsx
  ¬ index.spec.tsx
  ¬ index.stories.tsx
  ¬ index.styled.tsx
  ¬ index.tsx
  ¬ README.md
```

To learn more about NFT generators check https://gitlab.com/gamestopcorp/platform/blockchain/marketplace/nft-ops-codegen
