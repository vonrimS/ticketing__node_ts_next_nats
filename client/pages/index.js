import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
    // console.log(currentUser);
    // axios.get('/api/users/currentuser');
    console.log(currentUser);

    return currentUser ? <h1 className="container">You are singed in</h1> : <h1 className='container'>You are NOT signed in</h1>;

};

LandingPage.getInitialProps = async context => {
    console.log('Landing page');
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');

    return data;
};

export default LandingPage;
;