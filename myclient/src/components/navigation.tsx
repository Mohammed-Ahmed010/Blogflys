import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export default function Navigation() {
	return (
		<header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='lg:hidden'>
						<MenuIcon className='h-6 w-6' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<Link to='#' className='mr-6 hidden lg:flex'>
						<MountainIcon className='h-6 w-6' />
						<span className='sr-only'>Acme Inc</span>
					</Link>
					<div className='grid gap-2 py-6'>
						<Button className='bg-white p-2 text-black'>
							<Link
								to='/home'
								className='flex w-full items-center py-2 text-lg font-semibold'
							>
								Home
							</Link>
						</Button>
						<Button className='bg-white p-2 text-black'>
							<Link
								to='/login'
								className='flex w-full items-center py-2 text-lg font-semibold'
							>
								login
							</Link>
						</Button>
						<Button className='bg-white p-2 text-black'>
							<Link
								to='/signup'
								className='flex w-full items-center py-2 text-lg font-semibold'
							>
								signup
							</Link>
						</Button>
						<Button className='bg-white p-2 text-black'>
							<Link
								to='/'
								className='flex w-full items-center py-2 text-lg font-semibold'
							>
								About
							</Link>
						</Button>
					</div>
				</SheetContent>
			</Sheet>
			<Link to='/' className='mr-6 hidden lg:flex'>
				<h1>Blog Space</h1>
				<span className='sr-only'>Acme Inc</span>
			</Link>
			<nav className='ml-auto hidden lg:flex gap-6'>
				<Link
					to='/home'
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
				>
					Home
				</Link>
				<Link
					to='/login'
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
				>
					login
				</Link>
				<Link
					to='/signup'
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
				>
					signup
				</Link>
				<Link
					to='/'
					className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
				>
					About
				</Link>
			</nav>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m8 3 4 8 5-5 5 15H2L8 3z' />
		</svg>
	);
}
