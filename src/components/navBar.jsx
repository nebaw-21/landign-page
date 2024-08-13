import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Biopsies
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Solution
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Clinical Studies
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        Partnerships
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        News
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white" // Updated color
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        About
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" top-0 z-10   border-0 shadow-none bg-transparent px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
         HederaDx
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          color="blue"
          className="hidden lg:inline-block"
        >
          <span>Contact us</span>
        </Button>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 bg-white  " strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 bg-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Button fullWidth variant="gradient" color="blue" size="sm">
          <span>contact us</span>
        </Button>
      </Collapse>
    </Navbar>
  );
}
