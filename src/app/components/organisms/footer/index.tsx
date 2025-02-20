const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Radiodiagnosis</h2>
                        <p className="text-gray-400 text-sm">AI-powered dental detection</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 text-xs mt-6">
                    &copy;Naufal. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
