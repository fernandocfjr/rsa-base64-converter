# RSA to Base64 - Key Converter
### Simplest code to convert RSA Key to Base64 - under 15 lines of code.  
When developing on **Back-End of Nevellus**, I faced issues when attempting to work with RSA Keys on Env.  
**Because the RSA Keys are multi-line.** _Env vars do not fit very well with multi-line vars._

## The solution:
- Single-line Key.
- Convert RSA Key (Multi-line) to Base64(Single-line) and then put it on Env.

## How to use:
* Copy your RSA Key and put on `rsaKey` *const* on _index.js_ file  
Eg:  
````JavaScript
const rsaKey = `-----BEGIN RSA PRIVATE KEY-----
rsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKey
rsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKey
rsaKeyrsaKey...
-----END RSA PRIVATE KEY-----
`
````
* Run the code on Node and Copy base64 Key from Terminal, Paste on your Env var.
* Using the Key:  
````JavaScript
const privateKey = Buffer.from(process.env.BASE64_KEY , 'base64').toString('ascii');
````

### I hope this repo will help you ;)
