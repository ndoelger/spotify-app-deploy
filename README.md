Create your own personalized Spotify tracker that links to your account and showcases your most-played tracks, favorite artists, and curated playlists according to your chosen time frame.

## Setting Up Locally

1. Begin by registering a Spotify App through your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/). Include `http://localhost:8888/callback` as a Redirect URI within the app settings. The app name, description, and website URL can be anything.

2. Create a `.env` file in the project's root directory, using `.env.example` as a template. Insert your unique `CLIENT_ID` and `CLIENT_SECRET` from your Spotify App's dashboard. The REDIRECT/FRONTEND URIs should mirror those in the `.env.example`.

3. Ensure [npm](https://www.npmjs.com/) is installed globally

4. Install the required dependencies:

    ```shell
    npm install
    ```

5. Launch the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>. 
  
    ```shell
    npm start
    ```

The `concurrently` package will allow you to install and run both backend and client directories with just one command for each.

## Deploying to Heroku with Git

1. Create a new [Heroku](https://www.heroku.com/) app

2. Add your Heroku app as a remote git repository

    ```shell
    heroku git:remote -a your-app-name
    ```

3. Add `http://your-app-name.herokuapp.com/callback` as a Redirect URI within your Spotify app's settings

4. In your Heroku dashboard's **Settings** tab, add [config vars](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard). Use the values in your `.env` file, the `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, and `FRONTEND_URI` key value pairs. Make sure to replace the `localhost` URLs with your heroku app's URL.

   ```env
   REDIRECT_URI: http://your-app-name.herokuapp.com/callback
   FRONTEND_URI: http://your-app-name.herokuapp.com
   ```

5. Deploy to Heroku

    ```shell
    git push heroku main
    ```
