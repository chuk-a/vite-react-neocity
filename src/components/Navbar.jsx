export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Heating System Design</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
