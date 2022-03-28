const Profile = () => {
  return (
  <>
       <div className="w-full h-full flex justify-center m-0 ">
             <div className="h-36 w-36 mt-24 bg-gray-300 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-33 w-33" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
             </div>
             </div>
             <div className="h-96 w-3/4 flex flex-row justify-center m-0 mx-64 px-32 mt-16">
              <div className="basis-1/2 w-full">
                <form>
                  <div className="form-group mb-3">
                    <label for="name" class="form-label inline-block mb-2 text-gray-700"> Name</label>
                    <input type="text" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" id="name"
                      aria-describedby="emailHelp" placeholder="Your Name" />
                  </div>
                  <div className="form-group mb-3">
                    <label for="name" class="form-label inline-block mb-2 text-gray-700"> Phone</label>
                    <input type="number" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                      aria-describedby="emailHelp" placeholder="Phone Number"></input>
                  </div>
                  <div className="form-group mb-3">
                    <label for="email" class="form-label inline-block mb-2 text-gray-700"> E-mail</label>
                    <input type="email" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                      aria-describedby="emailHelp" placeholder="Your e-mail"></input>
                  </div>
                  <div className="form-group mb-3">
                    <label for="password" class="form-label inline-block mb-2 text-gray-700"> Password</label>
                    <input type="password" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                      aria-describedby="emailHelp" placeholder="Input password"></input>
                  </div>
                  <div className="form-group mb-3">
                    <label for="gender" class="form-label inline-block mb-2 text-gray-700"> Your gender</label>
                    <select class="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Rather not say</option>
                  </select>
                  </div>
                </form>
              </div>
              <div className="basis-1/2 w-full">
                <form>
                  <div class="form-group mb-3">
                    <label for="address" class="form-label inline-block mb-2 text-gray-700">Street Address</label>
                    <input type="address" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" id="name"
                      aria-describedby="emailHelp" placeholder="Your address"></input>
                  </div>
                  <div className="form-group mb-3">
                    <label for="city" class="form-label inline-block mb-2 text-gray-700"> City</label>
                    <select className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Your city</option>
                      <option value="1">Aba</option>
                      <option value="2">Awka</option>
                      <option value="3">Enugu</option>
                      <option value="4">Ikeja</option>
                      <option value="5">Port-harcourt</option>
                      <option value="6">Uyo</option>
                      <option value="7">Yola</option>
                  </select>
                  </div>
                  <div className="form-group mb-3">
                    <label for="state" class="form-label inline-block mb-2 text-gray-700">State</label>
                    <select className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Your state</option>
                      <option value="1">Abia</option>
                      <option value="2">Adamawa</option>
                      <option value="3">Akwa Ibom</option>
                      <option value="4">Anambra</option>
                      <option value="5">Enugu</option>
                      <option value="6">Lagos</option>
                      <option value="7">Rivers</option>
                  </select>
                  </div>
                  <div className="form-group mb-3">
                    <label for="age" class="form-label inline-block mb-2 text-gray-700">Age</label>
                    <select className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Your age</option>
                      <option value="1">18-25</option>
                      <option value="2">26-40</option>
                      <option value="3">41-70</option>
                      <option value="4">70+</option>
                  </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="number" class="form-label inline-block mb-2 text-gray-700">NIN</label>
                    <input type="number" class="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="number"
                      aria-describedby="emailHelp" placeholder="Your NIN number"></input>
                  </div>
                </form>
              </div>
       </div>
       <div className="w-full h-60 flex justify-center m-0 ">
                 <button type="submit" id="btn" className="
                        w-72
                      h-12
                       mt-20
                      py-2.5
                      bg-blue-400
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-blue-700 hover:shadow-lg
                      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-blue-800 active:shadow-lg
                    ">Sign in</button>
                    </div>
       </>
  );
};

export default Profile;
