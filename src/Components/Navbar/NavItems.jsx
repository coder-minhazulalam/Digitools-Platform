import React from 'react';

const navItems = [
  {
    id: 1,
    name: "Products",
    path: "/products"
  },
  {
    id: 2,
    name: "Features",
    path: "/features"
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/testimonials"
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq"
  }
];

const NavItems = () => {
    return (
        <ul className='hidden md:flex gap-4 text-lg font-medium'>
        {
            navItems.map(item => <a href={item.path} key={item.id} className='duration-300 text-black hover:bg-blue-200 hover:text-black p-3 rounded-2xl'>{item.name}</a>)    
        }
        </ul>
    );
};

export default NavItems;