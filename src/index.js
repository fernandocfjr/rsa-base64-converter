// Put the RSA Key here
const rsaKey = `-----BEGIN RSA PRIVATE KEY-----
rsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKey
rsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKeyrsaKey
rsaKeyrsaKey...
-----END RSA PRIVATE KEY-----
`

// JS converts the Key to base64
const buffer = Buffer.from(rsaKey).toString('base64');

// Log the base64 on Terminal
console.log(buffer);
