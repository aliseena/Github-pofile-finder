import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="hero h-screen">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!!</h1>
          <p className="text-5xl mb-8"> 404 Page not found</p>
          <Link to="/" className="btn btn-accent btn-lg">
            <BsArrowLeft className="mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
