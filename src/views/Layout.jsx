const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link rel="stylesheet" href="/stylesheets/exercises.css" />
        <link rel="stylesheet" href="/stylesheets/welcome.css" />
        <script defer src="/js/application.js" />
        <script defer src="/js/auth.js" />
        <script defer src="/js/addInfo.js" />

        <title>Project</title>
      </head>

      <body>
        <header>
          <nav className="navbar">
            <div className="container">
              <div className="navbar__wrap">
                <div className="hamb">
                  {user?.name ? (
                    <div className="hamb__field" id="hamb">
                      <span className="bar"></span> <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  ) : null}
                </div>
                <div className="logo">
                  <img src="/img/logo.png" alt="" style={{ height: '80px' }} />
                </div>
                {user?.name ? (
                  <ul className="menu" id="menu">
                    <li>
                      <a href="/">
                        <img src="/img/skills.svg" style={{ height: '30px' }} alt="" />
                        Skills
                      </a>
                    </li>
                    {/* <li>
                      <a href="/worckouts">
                        <img src="/img/workout.svg" style={{ height: '30px' }} alt="" /> Workout
                      </a>
                    </li>
                    <li>
                      <a href="/history">
                        <img src="/img/history.svg" style={{ height: '30px' }} alt="" />
                        History
                      </a> 
                    </li>*/}
                    <li>
                      <a href="/profile">
                        <img src="/img/profile.svg" style={{ height: '30px' }} alt="" />
                        {user.name}
                      </a>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </nav>
          <div className="popup" id="popup"></div>
        </header>
        {children}
      </body>
    </html>
  );
};
