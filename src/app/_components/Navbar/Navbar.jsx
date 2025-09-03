"use client";

import Link from "next/link";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Navbar() {
  return (
    <Nav className="p-4 shadow-md shadow-gray-300 ">
      <NavbarBrand as={Link} href="/" className="flex items-center gap-2 ">
        <div className="flex items-center gap-2">
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#63E6BE" }}
          />
          <span className="lg:text-xl font-semibold">FreshCart</span>
        </div>
        <ul className="flex flex-row gap-3 text-sm ">
          <li className="hover:text-green-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/category">Category</Link>
          </li>
          <li className="hover:text-green-500" >
            <Link href="/brands">Brands</Link>
          </li>
        </ul>
      </NavbarBrand>

      {/* Toggle for mobile */}
      <NavbarToggle />

      {/* Collapsible content */}
      <NavbarCollapse>
        <ul className="flex flex-row gap-4 mt-4 lg:mt-0">
          <li className="hover:text-green-500">
            <Link href="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="#">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li className="hover:text-green-500" >
            <Link href="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="#">
              <i className="fab fa-tiktok"></i>
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="#">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row gap-4 mt-4 lg:mt-0">
          <li className="hover:text-green-500">
            <Link href="/register">Register</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/login">Login</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/login">Signout</Link>
          </li>
        </ul>
      </NavbarCollapse>
    </Nav>
  );
}
