const Nav = () => {
  return (
    <nav className="w-full bg-gray-400 h-20 flex items-center">
      <div className="w-96">
        <h1 className="text-center text-4xl font-bold">
          <span className="project-green-text">HIRE</span> PURCHASE
        </h1>
      </div>
      <div className="flex w-3/4 justify-end items-center mr-20">
        <ul className="flex">
          <li className="mx-4">
           <span className="project-green-text"><a className="text-lg font-normal" href="#">
              HOME
            </a>
            </span>
          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              PROFILE
            </a>
          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              CONTACT US
            </a>
          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              APPLY
            </a>
          </li>
          <li className="mx-4">
            <a className="text-lg font-normal text-black" href="#">
              REVIEWS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
