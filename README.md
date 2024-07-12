

## Setup

First, if you want to ensure you're using the correct Node.js and package manager versions, [install Volta](http://volta.sh)

```sh
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node
```

Then, check out a local copy of this repository

under the root path install the project dependencies

```sh
yarn
```

Build the project for the first time

```sh
yarn build
```

And finally, start the project

```sh
yarn dev
```

After the client and server build processes complete, you should see an "imitation Twitter" running on Parcel default Port [http://localhost:1234](http://localhost:1234).

<img width="1364" alt="image" src="https://github.com/user-attachments/assets/cf9ece78-19a6-46c0-a122-494f215be7d7">

