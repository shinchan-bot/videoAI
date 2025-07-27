import { useState } from "react";
import { Play, X, Sparkles, Menu } from 'lucide-react';
import Button from './ui/button'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <header className=" sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Play className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            VideoAI
                        </span>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 ">
                        <a href="#dummyfornow" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Pricing
                        </a>

                    </nav>
                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="cursor-pointer text-gray-600 hover:text-gray-900">
                            Sign In
                        </Button>
                        <Button className="cursor-pointer p-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 to-pink-600 text-white">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu open button */}
                    <button className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200/20">
                        <nav className="flex flex-col space-y-4 items-start">
                            <a className="text-gray-600 hover:text-gray-900 transition-colors">
                                Pricing
                            </a>
                        </nav>
                        <div className="flex flex-col space-y-2 pt-4 items-start">
                            <Button variant="ghost" className="justify-start">
                                Sign In
                            </Button>
                            <Button className="justify-start w-full rounded p-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 to-pink-600 text-white">
                                Get Started
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;