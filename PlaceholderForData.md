Client Id: 
440225779107-92ouqdds9c4td1eng62fjkp9qk2mp0co.apps.googleusercontent.com

Client Secret:
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


Heroku app name: final-group-app-123

New production call back url: 
https://final-group-app-123.herokuapp.com/auth/google/callback

heroku app client ID:
440225779107-qfjp64m6q2f3icm3olt4a3ff2ebc2pct.apps.googleusercontent.com

heroku app client secret:
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


# setting environment variables:

heroku config:set ALPHAVANTAGE_API_KEY="ZT0WIJXZFV46BQKH"

heroku config:set GOOGLE_CLIENT_ID="440225779107-qfjp64m6q2f3icm3olt4a3ff2ebc2pct.apps.googleusercontent.com"
heroku config:set GOOGLE_CLIENT_SECRET="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"
# this is used for customizing the callback url, matching the callback url you registered via google console:
heroku config:set GOOGLE_CALLBACK_URL="https://final-group-app-123.herokuapp.com/auth/google/callback"

# choose your own secret string value instead of xyz999:
heroku config:set SESSION_SECRET="kn516"