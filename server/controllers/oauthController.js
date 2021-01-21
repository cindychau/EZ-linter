const fetch = require('node-fetch');

const { client_id, client_secret } = require('../settings.js');

const oauthController = {};

/**
 * Sets the redirect URL for Github OAuth
 */
oauthController.loginToGithub = (req, res, next) => {
  try {
    res.locals.redirectURL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
    return next();
  } catch (err) {
    return next({
      log: 'Error in oauthController.loginToGithub',
      // status: 400,
      message: { err: 'Unable to reach Github' },
    });
  }
};

/**
 * Obtains an access token from Github
 *
 * After logging into Github and verifying your credentials, Github will redirect
 * you to your callback URL (http://localhost:3000/api/user/signin/callback) and
 * provide a code in the URL query, which is how we can access it in the callback
 */
oauthController.githubAuth = (req, res, next) => {
  try {
    const { code } = req.query;

    // server makes a fetch request with credentials in body and expects an
    // access token to be returned
    fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: client_id,
        client_secret: client_secret,
        code: code,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const accessToken = response.access_token;

        if (accessToken === undefined) {
          return next({
            log:
              'Error in oauthController.githubAuth: accessToken is undefined',
            // status: 400,
            message: { err: 'Unable to get access token' },
          });
        }

        res.locals.accessToken = accessToken;
        return next();
      });
  } catch (err) {
    return next({
      log: 'Error in oauthController.githubAuth',
      // status: 400,
      message: {
        err: 'An error occurred while trying to get permissions from Github',
      },
    });
  }
};

/**
 * Obtains user data
 *
 * With the access token available, the server now makes a request to Github to
 * get user's public github info
 */
oauthController.getGithubUserInfo = (req, res, next) => {
  try {
    const accessToken = res.locals.accessToken;

    fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // https://docs.github.com/en/rest/reference/users
        // response contains all info in "Response with public profile information"
        console.log(response);
        const { id, name } = response;

        if (id === undefined) {
          return next({
            log: 'Error in oauthController.getGithubUserInfo: id is undefined',
            status: 401,
            message: { err: 'Unable to authenticate' },
          });
        }

        res.locals.userId = id;
        res.locals.realName = name;
        res.locals.gitProfile = response;
        return next();
      });
  } catch (err) {
    return next({
      log: 'Error in oauthController.getGithubUserInfo',
      // status: 400,
      message: {
        err: 'An error occurred while trying to get user info from Github',
      },
    });
  }
};

module.exports = oauthController;
