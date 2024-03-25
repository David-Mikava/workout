const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration(props) {
  const {} = props;
  return (
    <Layout {...props}>
      <main className="reg-main">
        <a className='a-back' href="/auth">
          <button className="back">Back</button>
        </a>
        <h1 className="form-h1">Registration</h1>
        <form className="form" name="registration">
          <input className="form-input" type="text" placeholder="name" name="name" />
          <input className="form-input" type="text" placeholder="email" name="email" />
          <input className="form-input" type="password" placeholder="password" name="password" />
          <div>
            <a href="/auth/login">
              <button className="button form-submit-btn" type="submit">
                Register
              </button>
            </a>
          </div>
        </form>
      </main>
    </Layout>
  );
};
