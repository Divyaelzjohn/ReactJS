// withAuth.js
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("token"); 
    if (!isLoggedIn) {
      return <h2>Please login to continue</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

