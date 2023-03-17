import { Link } from 'react-router-dom';
export default function About() {
  return (
    <main class="grid min-h-full place-items-center  py-24 px-6 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="mt-4 text-gray-400 text-3xl">
          A simple github profile finder with the github rest api
        </p>

        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <button className="btn-accent">Back to home</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
