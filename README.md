# droplet-portfolio
Steps to setting up nodemailer for use on Digital Ocean droplet.
>https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app follow more or less, fix broken form given out on this page.
>npm package 'dotenv' to set your env variables. touch process.env server side, .env should be in your .gitignore. 
>set up google email and write credentials to .env
>make sure your google account has 2FA
>https://myaccount.google.com/security
>set an app specific password on google for your droplet's SMTP function, otherwise it will return an error to login from a web browser.
>https://myaccount.google.com/apppasswords

## Alternatively, update to use your own email host like Privateemail (namecheap) by pointing your nameservers to DO's and handle all DNS through Digital Ocean. Privateemail has readily available docs for the MX, TXT, etc records you'll need. NPM package 'dotenv' still works fine for credentials.
