//TODO Austin: Create api routes for getting, posting, and deleting comment information from the server //No reference yet maybe wait on this one
/*
    Post Route Url: 'api/users/'
    Used to make a new acccount
    req.body format:
    {
        username: 'password',
        password: 'username'
    }
    psuedo code:
    create new user in database
    create new session and set the session info from user returned from database
    send user info back to the front end
*/

/*
    Post Route Url: api/users/login
    Used to login to already created account
    req.body.format:
    {
        username: 'whater',
        password: 'mypass'
    }
    psuedo code:
    Get user info from database by searching for their username
    check the password sent from req.body against the password in the database
    if password is wrong send error message to user
    if password is right create a new session for the user and tell the user it worked
*/

/*
*/