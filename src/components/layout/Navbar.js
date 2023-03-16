import { ImGithub } from 'react-icons/im';
import { Link } from 'react-router-dom';
export default function Navbar({ title }) {
  return (
    <div className="flex flex-col justify-between ">
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <ImGithub className="inline pr-2 text-4xl" />
            <Link to="/" className="text-lg align-middle font-bold">
              {title}
            </Link>
          </div>
          <div className=" px-2 flex-1 mx-2">
            <div className="flex justify-end">
              <Link to="/" className="btn btn-ghost btn-sm  rounded-btn">
                Home
              </Link>
              <Link
                to="/about"
                className="btn btn-sm  btn-ghost  rounded-btn mx-2"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Github profile finder',
};
