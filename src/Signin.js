import youth from './youth.png';
import facebook from './facebook.png';
import gmail from './gmail.png';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Signin = () => {
    const handleFailure = (result) => {
        alert(result);
    }
        const handleLogin = (googleData) => {
            console.log(googleData);
        }
        const responseFacebook = (response) => {
            console.log(response);
          }
         
    return (
        <div className="justify-center mt-20">
            <div className="flex place-items-center justify-center ">
                <div className="border-white rounded w-96 h-96 bg-green-rgba">
                   <img src={youth} alt="" className="w-96 opacity-20 mt-12" />
                </div>
                <div className="border-white rounded w-96 h-96 bg-white-rgba">
                <div className="">
                    <h3 className="text-2xl text-center mt-12 font-bold"><span className="text-green-rgba">HIRE</span> PURCHASE</h3>
                </div>
                <div className="text-center mt-11">
                    <p className="text-xl font-bold">Sign up</p>
                </div>
                <div className="">
                    <div className="flex place-items-center mt-14 ml-12">
                        <img src={facebook} alt="" className="w-10 border-white-rgba rounded-l-md bg-white-rgba" />
                        <div className="ml-3 bg-blue-rgba w-72 text-center text-white py-1.5 rounded-r-md text-base">
                        <FacebookLogin
                           appId="3216168951999520"
                           autoLoad={true}
                           render={renderProps => (
                            <button onClick={renderProps.onClick}>sign in with facebook</button>
                          )}
                           callback={responseFacebook} />,
                        
                        </div>
                    </div>
                    <div className="flex place-items-center mt-5 ml-14">
                        <img src={gmail} alt="" className="w-8 border-white rounded-l-md bg-white-rgba" />
                        <div className="ml-3 bg-red-rgba w-72 text-center text-white py-1.5 rounded-r-md text-base">
                            <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>continue with google</button>
                            )}
                            buttonText="contiune with google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                            />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Signin;