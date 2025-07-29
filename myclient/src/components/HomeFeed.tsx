import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, User, Filter, Search, BookOpen } from "lucide-react";
type Post = {
	id: number;
	title: string;
	description: string;
	author: string;
	createdAt: string;
	tags: string[];
	readTime: string;
};

export default function HomeFeed() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [selectedTag, setSelectedTag] = useState("all");
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		try {
	// 			const res = await axios.get("/api/posts");
	// 			const data = res.data.posts;

	// 			setPosts(data);
	// 			setFilteredPosts(data);

	// 			const allTags = new Set<string>();
	// 			data.forEach((post: Post) => {
	// 				post.tags.forEach((tag) => allTags.add(tag));
	// 			});

	// 			setTags(["all", ...Array.from(allTags)]);
	// 		} catch (err) {
	// 			console.error("Error fetching posts:", err);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchPosts();
	// }, []);

	// useEffect(() => {
	// 	if (selectedTag === "all") {
	// 		setFilteredPosts(posts);
	// 	} else {
	// 		setFilteredPosts(
	// 			posts.filter((post) => post.tags.includes(selectedTag))
	// 		);
	// 	}
	// }, [selectedTag, posts]);
	const mockdata = [
		{
			id: 1,
			title: "Getting Started with React Server Components",
			description:
				"Learn how to build modern React applications with Server Components and understand the benefits they bring to your development workflow.",
			author: "Sarah Chen",
			createdAt: "2024-01-15",
			tags: ["React", "Next.js", "Web Development"],
			readTime: "5 min read",
		},
		{
			id: 2,
			title: "The Future of Web Development",
			description:
				"Exploring emerging trends and technologies that will shape the future of web development, from AI integration to new frameworks.",
			author: "Alex Rodriguez",
			createdAt: "2024-01-12",
			tags: ["Web Development", "AI", "Future Tech"],
			readTime: "8 min read",
		},
		{
			id: 3,
			title: "Mastering TypeScript in 2024",
			description:
				"A comprehensive guide to advanced TypeScript features and best practices for building scalable applications.",
			author: "Emily Johnson",
			createdAt: "2024-01-10",
			tags: ["TypeScript", "JavaScript", "Programming"],
			readTime: "12 min read",
		},
		{
			id: 4,
			title: "Building Responsive Layouts with CSS Grid",
			description:
				"Master CSS Grid to create beautiful, responsive layouts that work perfectly across all devices and screen sizes.",
			author: "Michael Park",
			createdAt: "2024-01-08",
			tags: ["CSS", "Web Design", "Responsive"],
			readTime: "6 min read",
		},
		{
			id: 5,
			title: "Building Responsive Layouts with CSS Grid",
			description:
				"Master CSS Grid to create beautiful, responsive layouts that work perfectly across all devices and screen sizes.",
			author: "Michael Park",
			createdAt: "2024-01-08",
			tags: ["CSS", "Web Design", "Responsive"],
			readTime: "6 min read",
		},
		{
			id: 6,
			title: "Building Responsive Layouts with CSS Grid",
			description:
				"Master CSS Grid to create beautiful, responsive layouts that work perfectly across all devices and screen sizes.",
			author: "Michael Park",
			createdAt: "2024-01-08",
			tags: ["CSS", "Web Design", "Responsive"],
			readTime: "6 min read",
		},
		{
			id: 7,
			title: "Building Responsive Layouts with CSS Grid",
			description:
				"Master CSS Grid to create beautiful, responsive layouts that work perfectly across all devices and screen sizes.",
			author: "Michael Park",
			createdAt: "2024-01-08",
			tags: ["CSS", "Web Design", "Responsive"],
			readTime: "6 min read",
		},
	];
	useEffect(() => {
		const mockPosts = [...mockdata]; // paste the JSON array above here
		setPosts(mockPosts);
		setFilteredPosts(mockPosts);

		const allTags = new Set<string>();
		mockPosts.forEach((post) => {
			post.tags.forEach((tag) => allTags.add(tag));
		});

		setTags(["all", ...Array.from(allTags)]);
		setLoading(false);
	}, []);

	if (loading) {
		return (
			<div className='space-y-4'>
				{Array.from({ length: 8 }).map((_, i) => (
					<Skeleton key={i} className='h-24 w-full rounded-lg' />
				))}
			</div>
		);
	}

	return (
		// <div className='flex flex-col gap-4'>
		// 	{/* Dropdown */}
		// 	<div className='w-48'>
		// 		<Select value={selectedTag} onValueChange={setSelectedTag}>
		// 			<SelectTrigger>
		// 				<SelectValue placeholder='Filter by tag' />
		// 			</SelectTrigger>
		// 			<SelectContent>
		// 				{tags.map((tag) => (
		// 					<SelectItem key={tag} value={tag}>
		// 						{tag}
		// 					</SelectItem>
		// 				))}
		// 			</SelectContent>
		// 		</Select>
		// 	</div>

		// 	{/* Posts */}
		// 	{filteredPosts.length === 0 && (
		// 		<p className='text-center text-muted-foreground'>
		// 			No posts found for "{selectedTag}"
		// 		</p>
		// 	)}

		// 	{filteredPosts.map((post) => (
		// 		<Card key={post.id} className='hover:shadow-md transition'>
		// 			<CardHeader>
		// 				<CardTitle>{post.title}</CardTitle>
		// 			</CardHeader>
		// 			<CardContent>
		// 				<p className='text-sm text-muted-foreground line-clamp-3'>
		// 					{post.description}
		// 				</p>
		// 				<div className='mt-3 text-xs text-gray-500 flex justify-between'>
		// 					<span>By {post.author}</span>
		// 					<span>
		// 						{new Date(post.createdAt).toLocaleDateString()}
		// 					</span>
		// 				</div>
		// 				<div className='mt-2 flex flex-wrap gap-2'>
		// 					{post.tags.map((tag) => (
		// 						<span
		// 							key={tag}
		// 							className='text-xs bg-gray-100 px-2 py-0.5 rounded-md text-gray-700'
		// 						>
		// 							#{tag}
		// 						</span>
		// 					))}
		// 				</div>
		// 				<Link
		// 					to={`/post/${post.id}`}
		// 					className='text-blue-500 text-sm mt-2 block'
		// 				>
		// 					Read more →
		// 				</Link>
		// 			</CardContent>
		// 		</Card>
		// 	))}
		// </div>
		<div className='max-w-6xl mx-auto p-6 space-y-8'>
			{/* Header Section */}
			<div className='text-center space-y-4'>
				<h1 className='text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
					Latest Articles
				</h1>
				<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
					Discover insights, tutorials, and thoughts on modern web
					development
				</p>
			</div>

			{/* Filter Section */}
			<div className='flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50/50 rounded-xl p-4 border'>
				<div className='flex items-center gap-2 text-sm text-muted-foreground'>
					<Filter className='w-4 h-4' />
					<span className='font-medium'>Filter articles</span>
				</div>

				<div className='flex items-center gap-4'>
					<Select value={selectedTag} onValueChange={setSelectedTag}>
						<SelectTrigger className='w-48 bg-white shadow-sm'>
							<SelectValue placeholder='All categories' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>All categories</SelectItem>
							{tags.map((tag) => (
								<SelectItem key={tag} value={tag}>
									{tag}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<div className='text-sm text-muted-foreground'>
						{filteredPosts.length} article
						{filteredPosts.length !== 1 ? "s" : ""}
					</div>
				</div>
			</div>

			{/* Posts Grid */}
			{filteredPosts.length === 0 ? (
				<div className='text-center py-16 space-y-4'>
					<div className='w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center'>
						<Search className='w-8 h-8 text-gray-400' />
					</div>
					<h3 className='text-xl font-semibold text-gray-900'>
						No articles found
					</h3>
					<p className='text-muted-foreground max-w-md mx-auto'>
						We couldn't find any articles matching "{selectedTag}".
						Try selecting a different category.
					</p>
					<Button
						variant='outline'
						onClick={() => setSelectedTag("all")}
						className='mt-4'
					>
						View all articles
					</Button>
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{filteredPosts.map((post) => (
						<Card
							key={post.id}
							className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm'
						>
							<CardHeader className='space-y-3'>
								<div className='flex flex-wrap gap-1.5'>
									{post.tags.map((tag) => (
										<Badge
											key={tag}
											variant='secondary'
											className='text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors'
										>
											#{tag}
										</Badge>
									))}
								</div>

								<CardTitle className='text-xl leading-tight group-hover:text-blue-600 transition-colors line-clamp-2'>
									{post.title}
								</CardTitle>
							</CardHeader>

							<CardContent className='space-y-4'>
								<p className='text-muted-foreground leading-relaxed line-clamp-3'>
									{post.description}
								</p>

								<div className='flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-gray-100'>
									<div className='flex items-center gap-1.5'>
										<User className='w-3.5 h-3.5' />
										<span className='font-medium'>
											{post.author}
										</span>
									</div>

									<div className='flex items-center gap-1.5'>
										<CalendarDays className='w-3.5 h-3.5' />
										<span>
											{new Date(
												post.createdAt
											).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric",
											})}
										</span>
									</div>
								</div>

								<div className='flex items-center justify-between pt-2'>
									<span className='text-xs text-muted-foreground bg-gray-50 px-2 py-1 rounded-full'>
										{post.readTime}
									</span>

									<Link to={`/post/${post.id}`}>
										<Button
											variant='ghost'
											size='sm'
											className='text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn'
										>
											<BookOpen className='w-4 h-4 mr-1.5' />
											Read article
											<span className='ml-1 group-hover/btn:translate-x-0.5 transition-transform'>
												→
											</span>
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</div>
	);
}
