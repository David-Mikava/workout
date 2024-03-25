const React = require('react');
const Layout = require('../Layout');

module.exports = function Login(props) {
  const {} = props;
  return (
    <Layout {...props}>
      <main className="reg-main">
        <a className="a-back" href="/auth">
          <button className="back">Back</button>
        </a>
        <h1 className="form-h1">Login</h1>
        <form className="form" name="login">
          <input className="form-input" type="text" placeholder="email" name="email" />
          <input className="form-input" type="password" placeholder="password" name="password" />
          <button className="button form-submit-btn" type="submit">
            Login
          </button>
        </form>
      </main>
    </Layout>
  );
};
