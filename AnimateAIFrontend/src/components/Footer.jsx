import {Play, Twitter, Github, Linkedin, Mail} from 'lucide-react'


const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                                <Play w-4 h-4 text-white/>
                            </div>
                            <span className='text-xl font-bold'>
                                VideoAI
                            </span>
                        </div>
                        <p className='text-gray-400 max-w-md mb-6 text-justify'>
                            Create stunning  Animated videos with the power of AI. Transform your ideas into professional content with just a text prompt.
                        </p>
                        <div className='flex space-x-4'>
                            <a className='text-gray-400 hover:text-white-400 transition-colors'>
                                <Twitter className='w-5 h-5'/>
                            </a>
                            <a className='text-gray-400 hover:text-white-400 transition-colors'>
                                <Github className='w-5 h-5'/>
                            </a>
                            <a className='text-gray-400 hover:text-white-400 transition-colors'>
                                <Mail className='w-5 h-5'/>
                            </a>
                        </div>
                    </div>
                    {/* Product */}
                    <div>
                        <h3 className='font-semibold mb-4'>
                            Product
                        </h3>
                        <ul>
                            <li><a className='text-gray-400 hover:text-white cursor-pointer transition-colors'>Pricing</a></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h3 className='font-semibold mb-4'>Resources</h3>
                        <ul>
                            <li><a className='text-gray-400 hover:text-white transition-colors cursor-pointer'>Support</a></li>
                        </ul>
                    </div>
                </div>
                {/* Bottom */}
                <div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;