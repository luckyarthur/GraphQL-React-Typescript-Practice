

## Setup

First, if you want to ensure you're using the correct Node.js and package manager versions, [install Volta](http://volta.sh)

```sh
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node@14
```
I have tested, this project only works on node version 14, won't work on version 20.

Then, check out a local copy of this repository

under the root path install the project dependencies

```sh
yarn
```
build phase has been done automatically after install dependencies.

And finally, start the project

```sh
yarn dev
```

After the client and server build processes complete, you should see an "imitation Twitter" running on Parcel default Port [http://localhost:1234](http://localhost:1234).
you will see log on your console like:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/6bd46a81-a1f0-49ba-a126-f9c0e4b16c90">

the Web page from thee "localhost:1234" is like:
<img width="1364" alt="image" src="https://github.com/user-attachments/assets/cf9ece78-19a6-46c0-a122-494f215be7d7">
<img width="1394" alt="image" src="https://github.com/user-attachments/assets/d46dfd76-bc9c-4892-8b37-1dd5c835b7cf">

