import PropTypes from 'prop-types';
import Navbar from './Navbar';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />

    <div className="wrapper">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
