import youth from './youth.png';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import gmail from './gmail.png';
import facebook from './facebook.png';


const Signup = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }

      const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <div className="">
         <div className="flex justify-center mt-40">
          <div className="border-white w-96 h-96 bg-green-rgba rounded">
              <img src={youth} alt="" className="w-96 mt-12 opacity-25" />
          </div>
          <div className="border-white rounded w-96 h-96 text-center">
              <div className="mt-12">
                  <p className="text-2xl font-semibold"><span className="text-green-rgba">HIRE</span> PURCHASE</p>
              </div>
              <div className="mt-12">
                  <p className="text-2xl font-semibold">Sign up</p>
              </div>
              <div className="flex items-center ml-10 mt-12">
              <div className="bg-white">
                     <img src={gmail} alt="" className="w-8 mr-3" />
                 </div>
              <div className=" bg-red-rgba text-white w-72 h-8 rounded text-lg">
              <GoogleLogin
                clientId="33375746111-5shibttfbar1o2d3hbbjiiopgdck7jsj.apps.googleusercontent.com"
                render={renderProps => (
                 <button onClick={renderProps.onClick} disabled={renderProps.disabled}>continue with google</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />,
              </div>
              </div>
              <div className="flex items-center mt-5 ml-8">
                 <div className="bg-white">
                  <img src={facebook} alt="" className="w-10 mr-3" />
                  </div>
                 <div className="bg-blue-rgba text-white text-lg w-72 h-8 rounded">
                  <FacebookLogin
                    appId="3216168951999520"
                    autoLoad
                    callback={responseFacebook}
                    render={renderProps => (
                     <button onClick={renderProps.onClick}>sign in with facebook</button>
                    )}
                  />
                 </div>
              </div>
          </div>
         </div>
        </div>
      );
}
 
export default Signup;