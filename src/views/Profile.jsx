const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile(props) {
  const { user } = props;
  return (
    <Layout {...props}>
      <main className="profile-main">
        <h2 className="profile">Profile</h2>
        <div className="div-profile">
          <div className="div-user">
            <div className="user">
              <img src="img/profile.svg" style={{ height: '60px' }} alt="" />
              <h3>{user.name}</h3>
            </div>
            <a className="change" href="">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_271546.png"
                style={{ height: '20px' }}
                alt=""
              />
            </a>
          </div>
          <div className="action">
            <h3>Logout</h3>
            <a href="/auth/logout">
              <img src="img/logout.svg" style={{ height: '25px' }} alt="" />
            </a>
          </div>
          {/* <div className="action">
            <h3>Delete all workout data</h3>
            <a href="">
              <img src="img/trash.svg" style={{ height: '23px' }} alt="" />
            </a>
          </div>
          <div className="action">
            <h3>Delete Profile</h3>
            <a href="">
              <img src="img/trash.svg" style={{ height: '23px' }} alt="" />
            </a>
          </div> */}
        </div>
        <br />
      </main>
    </Layout>
  );
};
