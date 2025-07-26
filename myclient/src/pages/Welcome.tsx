import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Edit, Users, TrendingUp } from "lucide-react";

export default function Welcome() {
	return (
		<>
			<div className='relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen'>
				{/* Hero Section */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
					<div className='text-center max-w-4xl mx-auto fade-in'>
						<h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight'>
							Share Your Stories,
							<br />
							<span className='text-primary'>
								Connect with Readers
							</span>
						</h1>
						<p className='text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
							Join thousands of writers and readers on BlogSpace.
							Create beautiful blog posts, discover amazing
							content, and build your audience.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link to='/login'>
								<Button
									size='lg'
									className='px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl'
								>
									Get Started Free
								</Button>
							</Link>
							<Link to='/home'>
								<Button
									variant='outline'
									size='lg'
									className='px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl bg-white'
								>
									Explore Blogs
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl font-bold text-slate-900 mb-4'>
							Why Choose BlogSpace?
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							Everything you need to create, share, and grow your
							blog
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
								<Edit className='h-8 w-8 text-primary' />
							</div>
							<h3 className='text-xl font-semibold text-slate-900 mb-4'>
								Rich Editor
							</h3>
							<p className='text-slate-600 leading-relaxed'>
								Create beautiful blog posts with our intuitive
								rich text editor. Add images, format text, and
								embed content seamlessly.
							</p>
						</div>

						<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
								<Users className='h-8 w-8 text-green-600' />
							</div>
							<h3 className='text-xl font-semibold text-slate-900 mb-4'>
								Community
							</h3>
							<p className='text-slate-600 leading-relaxed'>
								Connect with like-minded writers and readers.
								Build your audience and engage with content that
								matters to you.
							</p>
						</div>

						<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
								<TrendingUp className='h-8 w-8 text-purple-600' />
							</div>
							<h3 className='text-xl font-semibold text-slate-900 mb-4'>
								Analytics
							</h3>
							<p className='text-slate-600 leading-relaxed'>
								Track your blog's performance with detailed
								analytics. Understand your audience and optimize
								your content strategy.
							</p>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className='bg-primary py-16'>
					<div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
						<h2 className='text-3xl font-bold text-white mb-4'>
							Ready to Start Blogging?
						</h2>
						<p className='text-blue-100 text-lg mb-8'>
							Join our community of writers and readers today.
						</p>
						<Link to='/login'>
							<Button
								variant='secondary'
								size='lg'
								className='px-8 py-4 text-lg font-semibold shadow-lg bg-white text-primary hover:bg-slate-50'
							>
								Sign Up Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
