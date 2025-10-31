export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Heating System Design. All rights reserved.
      </p>
    </footer>
  );
}
