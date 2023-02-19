import axios from 'axios';


const LandingPage = ({ currentUser }) => {
    //   console.log(currentUser);
    //   axios.get('/api/users/currentuser').catch((err) => {
    //     console.log(err.message);
    //   });

    console.log(currentUser);
    return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
    // console.log(req.headers);
    if (typeof window === 'undefined') {
        const { data } = await axios.get(
            // 'http://SERVICENAME.NAMESPACE.svc.cluster.local'
            'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
            {
                headers: req.headers
            }
        );

        return data;
        // we are on the server!
    } else {
        // we are on the browser
        const { data } = await axios.get('/api/users/currentuser');
        return data;
    }

    console.log('I WAS EXECUTED');
    return {};
};


export default LandingPage;


// At the time of writing, the service name for all platforms
// (Windows, Mac, Linux) and Docker clients (Docker Desktop
//     and Minikube) should be:

// ingress-nginx-controller