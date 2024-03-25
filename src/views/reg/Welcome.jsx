const React = require('react');
const Layout = require('../Layout');

module.exports = function Welcome(props) {
  const {} = props;
  return (
    <Layout {...props}>
      <main className="welcome-main">
        <img src="/img/welcome.jpeg" alt="" />
        <h2>Workout</h2>
        <span>Learn impressive Calistenics skils!</span>
        <div>
          <a className='reg' href="/auth/login">Login</a>
          <a className='reg' href="/auth/reg">Sign Up</a>
        </div>
      </main>
    </Layout>
  );
};
