import axios from 'axios';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Coins from '../components/Coins';

const index = ({ coins }) => (
  <Layout>
    <div className="index">
      <Coins coins={coins} />
    </div>
  </Layout>
);

index.getInitialProps = async () => {
  const url = 'https://api.coinmarketcap.com/v1/ticker/';
  const res = await axios.get(url);

  return {
    coins: res.data,
  };
};

index.propTypes = {
  coins: PropTypes.array.isRequired,
};

export default index;
