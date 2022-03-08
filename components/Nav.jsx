const Nav = () => {
  return (
    <nav className="h-28 w-full bg-gray-400">
      <div className="flex">
        <div className="w-96">
          <h1 className="p-12 text-center text-4xl font-bold">HIRE PURCHASE</h1>
        </div>
        <div className="flex w-3/4 justify-end p-12">
          <ul className="flex">
            <li className="mr-12">
              <a className="text-lg font-normal text-black" href="#">
                HOME
              </a>
            </li>
            <li className="mr-12">
              <a className="text-lg font-normal text-black" href="#">
                PROFILE
              </a>
            </li>
            <li className="mr-12">
              <a className="text-lg font-normal text-black" href="#">
                CONTACT US
              </a>
            </li>
            <li className="mr-12">
              <a className="text-lg font-normal text-black" href="#">
                APPLY
              </a>
            </li>
            <li className="mr-12">
              <a className="text-lg font-normal text-black" href="#">
                REVIEWS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;