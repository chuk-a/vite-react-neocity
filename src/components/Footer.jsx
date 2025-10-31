export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-narrow py-6 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Heating System Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}