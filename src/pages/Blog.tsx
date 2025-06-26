import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, ArrowRight, Search, Filter, Tag, Eye, MessageSquare, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useData } from '../context/DataContext'
import type { BlogPost } from '../context/DataContext'

const Blog = () => {
  const { getPublishedPosts, getFeaturedPosts } = useData()
  const blogPosts = getPublishedPosts()
  const featuredPosts = getFeaturedPosts()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('')

  // Get unique categories from blog posts
  const uniqueCategories = ['All', ...new Set(blogPosts.map((post: BlogPost) => post.category))]
  const categories = uniqueCategories
  
  const tags = [
    'React', 'TypeScript', 'Node.js', 'AI', 'Machine Learning', 'Cloud Computing',
    'DevOps', 'UI/UX', 'Project Management', 'Software Architecture', 'Testing',
    'Performance', 'Security', 'Mobile Development', 'Web Development'
  ]

  // Filter posts based on search and filters
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = selectedTag === '' || post.tags.some((tag: string) => tag === selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const latestPosts = blogPosts.slice(0, 5)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link to="/" className="inline-flex items-center text-[#44bee7] hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Sirius <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and industry perspectives from our team of experts. 
            Stay updated with the latest trends in technology and software development.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
              >
                {categories.map((category: string) => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="flex items-center space-x-2">
              <Tag size={20} className="text-gray-400" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
              >
                <option value="" className="bg-gray-800">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag} className="bg-gray-800">
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'All' && searchTerm === '' && selectedTag === '' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post: BlogPost, index: number) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#44bee7] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{formatDate(post.publishDate)}</p>
                        </div>
                      </div>
                      
                      <button className="text-[#44bee7] hover:text-white transition-colors flex items-center">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {searchTerm || selectedCategory !== 'All' || selectedTag ? 'Search Results' : 'Latest Articles'}
                </h2>
                <span className="text-gray-400">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post: BlogPost, index: number) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(post.publishDate)}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#44bee7] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <p className="text-white text-sm font-medium">{post.author}</p>
                              <p className="text-gray-400 text-xs">{post.authorRole}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center">
                              <Eye size={14} className="mr-1" />
                              <span className="text-sm">{post.views}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare size={14} className="mr-1" />
                              <span className="text-sm">{post.comments}</span>
                            </div>
                            <button className="hover:text-[#44bee7] transition-colors">
                              <Share2 size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs hover:bg-[#44bee7]/20 hover:text-[#44bee7] transition-colors cursor-pointer"
                              onClick={() => setSelectedTag(tag)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-gray-400 mb-4">
                    <Search size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No articles found matching your criteria.</p>
                    <p className="text-sm">Try adjusting your search terms or filters.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('All')
                      setSelectedTag('')
                    }}
                    className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Latest Posts */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Latest Posts</h3>
                <div className="space-y-4">
                  {latestPosts.map((post: BlogPost) => (
                    <div key={post.id} className="flex space-x-3 group cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-[#44bee7] transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">{formatDate(post.publishDate)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category: string) => {
                    const count = blogPosts.filter((post: BlogPost) => post.category === category).length
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#44bee7]/20 text-[#44bee7]'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span>{category}</span>
                        <span className="text-sm">({count})</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 12).map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTag === tag
                          ? 'bg-[#44bee7] text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-[#44bee7]/20 hover:text-[#44bee7]'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter and never miss our latest articles and insights.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  />
                  <button className="w-full bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
