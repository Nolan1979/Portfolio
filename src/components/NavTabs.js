export default function NavTabs() {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/About' },
        { name: 'Portfolio', href: '/Portfolio' },
        { name: 'Resume', href: '/Resume' },
        { name: 'Contact', href: '/Contact' }
    ]
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-currentColor py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className=" px-10 py-2 rounded-md text-3xl font-logo text-blue hover:text-gray-900 hover:currentColor"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
