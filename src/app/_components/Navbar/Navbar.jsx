"use client";

import Link from "next/link";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "@/context/Cartcontextx";

export default function Navbar() {
  const {numberOfCartItems} = useContext(CartContext);
  const { data: session, status } = useSession();

  function logout() {
    signOut({callbackUrl:"/login"})
   }


  return (
    <Nav className="p-4 shadow-md shadow-gray-300 ">
      <NavbarBrand as={Link} href="/" className="flex items-center gap-2 ">
        <div className="flex items-center gap-2">
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#4aa58a" }}
          />
          <span className="lg:text-xl font-semibold">FreshCart</span>
        </div>
        <ul className="flex flex-row gap-3 text-sm ">
          <li className="hover:text-green-500">
            <Link href="/">Home</Link>
          </li>
          {session && (
            <li className="hover:text-green-500">
              <Link href="/cart" className="relative">
                Cart{" "}
                {numberOfCartItems > 0 && (
                  <span className="absolute top-[-10px] end-[-10px] bg-green-500 rounded-full  text-white flex size-5 justify-center items-center">
                    {numberOfCartItems}
                  </span>
                )}
              </Link>
            </li>
          )}
          {session && (
            <li className="hover:text-green-500">
              <Link href="/WishList">WishList</Link>
            </li>
          )}

          <li className="hover:text-green-500">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/category">Category</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/brands">Brands</Link>
          </li>
        </ul>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <ul className="flex flex-row gap-4 mt-4 lg:mt-0">
          {!session ? (
            <>
              {" "}
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
              <li className="hover:text-green-500">
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
              <li className="hover:text-green-500">
                <Link href="/register">Register</Link>
              </li>
              <li className="hover:text-green-500">
                <Link href="/login">Login</Link>
              </li>
            </>
          ) : (
            <>
              {" "}
                <div className="flex items-center gap-2 " >
                  <li className="hover:text-green-500">
                <span className="cursor-pointer" onClick={logout}>
                  Signout
                </span>
              </li>
              {session && (
                <li className="text-green-500 rounded-2xl bg-slate-100 p-2" >
                  <Link href="/Profile">
                    {" "}
                    Profile
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#4aa58a" }}
                    />
                  </Link>
                </li>
              )}</div>
            </>
          )}
        </ul>
      </NavbarCollapse>
    </Nav>
  );
}
