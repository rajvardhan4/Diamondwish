import { Link } from "react-router-dom";
import React from "react";
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] text-gray-600 py-8 px-4 font-RoboFont">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
                        <Link href="/" className="flex items-center mb-4 justify-center md:justify-start">
                            <img
                                src="https://www.diamondwish.com/images/logo.svg"
                                className="w-[200px] md:w-[305px]"
                                alt="DiamondWish Logo"
                            />
                        </Link>
                        <p className="text-[13px] font-[500] mb-4">
                            Located in the heart of Downtown Los Angeles, Diamond Wish is the premiere supplier of custom engagement rings and one-of-a-kind fine diamond jewelry. Every Diamond Wish is handcrafted to your specifications.
                        </p>
                        <div>
                            <p className="text-[13px] font-[500] mb-2 flex items-center justify-center md:justify-start">
                                <Phone className="mr-1" size={15} /> 1-855-368-2837
                            </p>
                            <p className="text-[13px] font-[500] flex items-center justify-center md:justify-start">
                                <Mail className="mr-1" size={15} /> info@diamondwish.com
                            </p>
                        </div>
                    </div>

                    {/* About Us Column */}
                    <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li><Link href="/our-story" className="text-[13px] font-[500] hover:text-gray-800">Our Story</Link></li>
                            <li><Link href="/contact-us" className="text-[13px] font-[500] hover:text-gray-800">Contact Us</Link></li>
                            <li><Link href="/handcrafted-in-usa" className="text-[13px] font-[500] hover:text-gray-800">Handcrafted in USA</Link></li>
                            <li><Link href="/customer-stories" className="text-[13px] font-[500] hover:text-gray-800">Customer Stories</Link></li>
                            <li><Link href="/blog" className="text-[13px] font-[500] hover:text-gray-800">Blog</Link></li>
                            <li><Link href="/our-promise" className="text-[13px] font-[500] hover:text-gray-800">Our Promise</Link></li>
                            <li><Link href="/reviews" className="text-[13px] font-[500] hover:text-gray-800">Reviews</Link></li>
                        </ul>
                    </div>

                    {/* Account Column */}
                    <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
                        <ul className="space-y-2">
                            <li><Link href="/my-account" className="text-[13px] font-[500] hover:text-gray-800">My Account</Link></li>
                            <li><Link href="/sign-up" className="text-[13px] font-[500] hover:text-gray-800">Sign Up</Link></li>
                            <li><Link href="/order-tracking" className="text-[13px] font-[500] hover:text-gray-800">Order Tracking</Link></li>
                            <li><Link href="/wishlist" className="text-[13px] font-[500] hover:text-gray-800">Wishlist</Link></li>
                            <li><Link href="/faqs" className="text-[13px] font-[500] hover:text-gray-800">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/diamond-education" className="text-[13px] font-[500] hover:text-gray-800">Diamond Education</Link></li>
                            <li><Link href="/military-discount" className="text-[13px] font-[500] hover:text-gray-800">Military Discount</Link></li>
                            <li><Link href="/secure-shopping" className="text-[13px] font-[500] hover:text-gray-800">Secure Shopping</Link></li>
                            <li><Link href="/financing" className="text-[13px] font-[500] hover:text-gray-800">Financing</Link></li>
                            <li><Link href="/site-map" className="text-[13px] font-[500] hover:text-gray-800">Site Map</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                </div>

                {/* Bottom Links */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <ul className="flex flex-wrap justify-center space-x-4 text-sm">
                        <li><Link href="/shipping-policy" className="text-[13px] font-[500] hover:text-gray-800">Shipping Policy</Link></li>
                        <li><Link href="/free-returns" className="text-[13px] font-[500] hover:text-gray-800">Free Returns & Exchange</Link></li>
                        <li><Link href="/lifetime-upgrades" className="text-[13px] font-[500] hover:text-gray-800">Lifetime Upgrades</Link></li>
                        <li><Link href="/privacy-policy" className="text-[13px] font-[500] hover:text-gray-800">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-[13px] font-[500] hover:text-gray-800">Terms & Conditions</Link></li>
                        <li><Link href="/buy-back-guarantee" className="text-[13px] font-[500] hover:text-gray-800">Buy Back Guarantee</Link></li>
                        <li><Link href="/layaway" className="text-[13px] font-[500] hover:text-gray-800">Layaway</Link></li>
                        <li><Link href="/lifetime-warranty" className="text-[13px] font-[500] hover:text-gray-800">Lifetime Warranty</Link></li>
                    </ul>
                    <p className="text-center text-sm mt-4">172-038-166</p>
                </div>
            </div>
        </footer>
    );
}
