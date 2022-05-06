import { FiUser } from "react-icons/fi";
const Application = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center m-0 ">
        <div>
          <FiUser className="h-36 w-36 mt-24 bg-gray-400 rounded-full mx-auto" />
        </div>
      </div>
      <form>
      <div className=" form-container h-full flex flex-col items-center justify-center ml-10 mx-auto md:mx-auto px-20 mt-10 md:flex-row md:w-3/4">
        <div className="md:basis-1/2 w-full">
          <div className="flex flex-col">
            <div className="basis-1/2 form-group mb-6">
              <label
                htmlFor="name"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Name
              </label>
              <input
                type="text"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="phone"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Phone
              </label>
              <input
                type="number"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="phone"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                E-mail
              </label>
              <input
                type="email"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Your e-mail"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="password"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Password
              </label>
              <input
                type="password"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                aria-describedby="emailHelp"
                placeholder="Input password"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="gender"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Your gender
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Rather not say</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 w-full">
          <div>
            <div className="form-group mb-6">
              <label
                htmlFor="address"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Street Address
              </label>
              <input
                type="address"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Your address"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="city"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                City
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
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
              <label
                htmlFor="state"
                className="form-label inline-block mb-2 text-gray-700"
              >
                State
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
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
              <label
                htmlFor="age"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Age
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Your age</option>
                <option value="1">18-25</option>
                <option value="2">26-40</option>
                <option value="3">41-70</option>
                <option value="4">70+</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="number"
                className="form-label inline-block mb-2 text-gray-700"
              >
                NIN
              </label>
              <input
                type="number"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="number"
                aria-describedby="emailHelp"
                placeholder="Your NIN number"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 flex justify-center m-0 ">
        <button
          type="submit"
          id="btn"
          className="
                      w-72
                      h-12
                      mt-5
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
                    "
        >
          Apply
        </button>
      </div>
      </form>
    </>
  );
};

export default Application;
