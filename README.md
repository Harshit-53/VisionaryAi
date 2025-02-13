# ✨ Full Stack Text to Image Generator AI SaaS App ✨

Highlights:

- 🌟 Tech stack: MERN + Vite + TailwindCSS 
- 🎃 Authentication && Authorization with JWT
- 🐞 Error handling both on the server and on the client
- ✨ Simple API integration
- 🌟 Payment integration with razorpay and stripe

### Setup .env file inside server

```js
JWT_SECRET = "secret#text"
MONGODB_URI =
CLIPDROP_API = 
CURRENCY ='INR'
RAZORPAY_KEY_ID = 
RAZORPAY_KEY_SECRET = 
STRIPE_SECRET_KEY = 
```

### Build the app

```shell
cd server
npm install
```

### Start the app

```shell
npm run server
```

### Setup .env file inside client

```js
VITE_BACKEND_URL = 'http://localhost:4000'
VITE_RAZORPAY_KEY_ID = 'rzp_test_pBx80W4VR1h80b'
```

### Build the app

```shell
cd client
npm install
```

### Start the app

```shell
npm run dev
```
