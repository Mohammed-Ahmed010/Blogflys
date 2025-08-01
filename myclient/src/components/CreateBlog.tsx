import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Eye,
	Edit3,
	Save,
	Plus,
	X,
	FileText,
	User,
	Tag,
	Calendar,
	BookOpen,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Simple markdown to HTML converter for preview
const markdownToHtml = (markdown: string): string => {
	return (
		markdown
			// Headers
			.replace(
				/^### (.*$)/gim,
				'<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>'
			)
			.replace(
				/^## (.*$)/gim,
				'<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>'
			)
			.replace(
				/^# (.*$)/gim,
				'<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>'
			)
			// Bold and italic
			.replace(
				/\*\*(.*)\*\*/gim,
				'<strong class="font-semibold">$1</strong>'
			)
			.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
			// Code blocks
			.replace(
				/```([\s\S]*?)```/gim,
				'<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>'
			)
			.replace(
				/`([^`]*)`/gim,
				'<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'
			)
			// Links
			.replace(
				/\[([^\]]*)\]$$([^$$]*)\)/gim,
				'<a href="$2" class="text-blue-600 hover:underline">$1</a>'
			)
			// Lists
			.replace(/^\* (.*$)/gim, '<li class="ml-4">• $1</li>')
			.replace(/^- (.*$)/gim, '<li class="ml-4">• $1</li>')
			// Line breaks
			.replace(/\n/gim, "<br>")
	);
};

export default function CreateBlog() {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		description: "",
		content: `# Welcome to Your New Blog Post

Start writing your amazing content here! You can use **markdown** syntax to format your text.

## Features Available

- **Bold** and *italic* text
- Code blocks and \`inline code\`
- [Links](https://example.com)
- Lists and more!

### Getting Started

1. Write your content in markdown
2. Use the preview tab to see how it looks
3. Add tags to categorize your post
4. Click submit when you're ready!

\`\`\`javascript
// You can even add code examples
function hello() {
  console.log("Hello, World!");
}
\`\`\`

Happy writing! ✨`,
		tags: [] as string[],
	});

	const [newTag, setNewTag] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const addTag = () => {
		if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
			setFormData((prev) => ({
				...prev,
				tags: [...prev.tags, newTag.trim()],
			}));
			setNewTag("");
		}
	};

	const removeTag = (tagToRemove: string) => {
		setFormData((prev) => ({
			...prev,
			tags: prev.tags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleSubmit = async () => {
		if (!formData.title.trim() || !formData.content.trim()) {
			toast({
				title: "Missing Information",
				description: "Please fill in the title and content fields.",
				variant: "destructive",
			});
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		toast({
			title: "Blog Post Created!",
			description:
				"Your blog post has been successfully created and published.",
		});

		// Reset form
		setFormData({
			title: "",
			author: "",
			description: "",
			content: "",
			tags: [],
		});

		setIsSubmitting(false);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addTag();
		}
	};

	return (
		<div className='min-h-screen w-full bg-white'>
			<div className='min-h-screen w-full bg-white p-6'>
				<div className='max-w-7xl mx-auto space-y-6'>
					{/* Header */}
					<div className='text-center space-y-4'>
						<div className='flex items-center justify-center gap-3'>
							<div className='p-3 bg-blue-600 rounded-full'>
								<Edit3 className='w-6 h-6 text-white' />
							</div>
							<h1 className='text-3xl font-bold text-gray-900'>
								Create New Blog Post
							</h1>
						</div>
						<p className='text-gray-600 max-w-2xl mx-auto'>
							Write your next amazing blog post using our markdown
							editor with live preview
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
						{/* Form Section */}
						<div className='lg:col-span-1 space-y-6'>
							<Card className='shadow-lg border-0'>
								<CardHeader className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg'>
									<CardTitle className='flex items-center gap-2'>
										<FileText className='w-5 h-5' />
										Post Details
									</CardTitle>
								</CardHeader>
								<CardContent className='p-6 space-y-4'>
									<div className='space-y-2'>
										<Label
											htmlFor='title'
											className='flex items-center gap-2'
										>
											<BookOpen className='w-4 h-4' />
											Title *
										</Label>
										<Input
											id='title'
											placeholder='Enter your blog post title...'
											value={formData.title}
											onChange={(e) =>
												handleInputChange(
													"title",
													e.target.value
												)
											}
											className='focus:ring-2 focus:ring-blue-500'
										/>
									</div>

									<div className='space-y-2'>
										<Label
											htmlFor='author'
											className='flex items-center gap-2'
										>
											<User className='w-4 h-4' />
											Author
										</Label>
										<Input
											id='author'
											placeholder='Your name...'
											value={formData.author}
											onChange={(e) =>
												handleInputChange(
													"author",
													e.target.value
												)
											}
											className='focus:ring-2 focus:ring-blue-500'
										/>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='description'>
											Description
										</Label>
										<Textarea
											id='description'
											placeholder='Brief description of your post...'
											value={formData.description}
											onChange={(e) =>
												handleInputChange(
													"description",
													e.target.value
												)
											}
											className='focus:ring-2 focus:ring-blue-500 min-h-[80px]'
										/>
									</div>

									<div className='space-y-2'>
										<Label className='flex items-center gap-2'>
											<Tag className='w-4 h-4' />
											Tags
										</Label>
										<div className='flex gap-2'>
											<Input
												placeholder='Add a tag...'
												value={newTag}
												onChange={(e) =>
													setNewTag(e.target.value)
												}
												onKeyPress={handleKeyPress}
												className='focus:ring-2 focus:ring-blue-500'
											/>
											<Button
												onClick={addTag}
												size='sm'
												className='shrink-0'
											>
												<Plus className='w-4 h-4' />
											</Button>
										</div>
										<div className='flex flex-wrap gap-2 mt-2'>
											{formData.tags.map((tag) => (
												<Badge
													key={tag}
													variant='secondary'
													className='bg-blue-100 text-blue-800 hover:bg-blue-200'
												>
													#{tag}
													<button
														onClick={() =>
															removeTag(tag)
														}
														className='ml-1 hover:text-red-600'
													>
														<X className='w-3 h-3' />
													</button>
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Submit Section */}
							<Card className='shadow-lg border-0'>
								<CardContent className='p-6'>
									<Button
										onClick={handleSubmit}
										disabled={isSubmitting}
										className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3'
									>
										{isSubmitting ? (
											<>
												<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
												Publishing...
											</>
										) : (
											<>
												<Save className='w-4 h-4 mr-2' />
												Publish Post
											</>
										)}
									</Button>

									<div className='mt-4 text-center'>
										<div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
											<Calendar className='w-4 h-4' />
											<span>
												Publishing on{" "}
												{new Date().toLocaleDateString()}
											</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Editor Section */}
						<div className='lg:col-span-2'>
							<Card className='border-0 h-[800px]'>
								<CardHeader className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg'>
									<CardTitle>Content Editor</CardTitle>
								</CardHeader>
								<CardContent className='p-0 h-full'>
									<Tabs
										defaultValue='editor'
										className='h-full'
									>
										<div className='border-b bg-gray-50 px-4'>
											<TabsList className='bg-transparent'>
												<TabsTrigger
													value='editor'
													className='flex items-center gap-2'
												>
													<Edit3 className='w-4 h-4' />
													Editor
												</TabsTrigger>
												<TabsTrigger
													value='preview'
													className='flex items-center gap-2'
												>
													<Eye className='w-4 h-4' />
													Preview
												</TabsTrigger>
											</TabsList>
										</div>

										<TabsContent
											value='editor'
											className='h-full m-0'
										>
											<Textarea
												value={formData.content}
												onChange={(e) =>
													handleInputChange(
														"content",
														e.target.value
													)
												}
												placeholder='Start writing your blog post in markdown...'
												className='h-full border-0 rounded-none resize-none focus:ring-0 font-mono text-sm leading-relaxed p-6'
											/>
										</TabsContent>

										<TabsContent
											value='preview'
											className='h-full m-0 overflow-hidden'
										>
											<div className=' h-full overflow-y-auto overflow-x-hidden p-6'>
												<div className='p-6 mb-auto pb-0 shadow-none'>
													<div className='max-w-none break-words'>
														{formData.title && (
															<div className='mb-6 pb-4 border-b'>
																<h1 className='text-3xl font-bold text-gray-900 mb-2 break-words'>
																	{
																		formData.title
																	}
																</h1>
																{formData.author && (
																	<p className='text-gray-600'>
																		By{" "}
																		{
																			formData.author
																		}
																	</p>
																)}
																{formData.description && (
																	<p className='text-gray-700 mt-2 italic break-words'>
																		{
																			formData.description
																		}
																	</p>
																)}
															</div>
														)}
														<div
															dangerouslySetInnerHTML={{
																__html: markdownToHtml(
																	formData.content
																),
															}}
															className='leading-relaxed prose-headings:break-words prose-p:break-words prose-code:break-all prose-pre:overflow-x-auto prose-pre:max-w-full'
														/>
													</div>
												</div>
											</div>
										</TabsContent>
									</Tabs>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
