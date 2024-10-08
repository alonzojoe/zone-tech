import Logo from "../assets/images/logo.png";

const menus = [
  {
    id: 1,
    title: "Home",
    path: "",
  },
  {
    id: 2,
    title: "Services",
    path: "#services",
  },
  {
    id: 3,
    title: "How We Work",
    path: "#work",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#team",
  },
  {
    id: 5,
    title: "Careers",
    path: "#careers",
  },
  {
    id: 6,
    title: "Blog",
    path: "#blog",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <div className="container flex items-center justify-between py-10">
        <div>
          <img className="h-[66px] w-[231px]" src={Logo} alt="zone-tech-logo" />
        </div>
        <div>
          <ul className="flex gap-4">
            {menus.map((menu) => (
              <li>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-2 text-xl group relative hover:text-secondary"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
