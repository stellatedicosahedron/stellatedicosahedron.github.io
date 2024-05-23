'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar(){
    const pathname = usePathname();
    return(
        <div className="navbar px-6">
            <img src="/test.jpg" id="logo"/>
            <ul id="sidebar-links">
                <li><Link href="/" className={pathname === "/" ? 'link-active' : 'link-inactive'}>Home</Link></li>
                <li><Link href="/about" className={pathname === "/about" ? 'link-active' : 'link-inactive'}>About</Link></li>
                <li><Link href="/projects" className={pathname === "/projects" ? 'link-active' : 'link-inactive'}>Projects</Link></li>
                <li><Link href="/resume" className={pathname === "/resume" ? 'link-active' : 'link-inactive'}>Resume</Link></li>
                <li><Link href="/extra" className={pathname === "/extra" ? 'link-active' : 'link-inactive'}>Extra</Link></li>
            </ul>
        </div>
    );
}