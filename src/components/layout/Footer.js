export default function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className=" p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p className="text-neutral-100">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
}
