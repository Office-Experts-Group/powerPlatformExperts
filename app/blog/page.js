'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Contact from '../../components/Contact';
import CTAMain from '../(components)/CTAMain';

import styles from '../../styles/blog.module.scss';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Export to PDF in Power Apps - The Best Way to Do It!',
    description: 'Learn how to export data from Power Apps to PDF using Power Automate. This tutorial shows the easiest and most effective way to generate professional PDF documents directly from your Power Apps.',
    slug: 'export-to-pdf-in-power-apps',
    date: 'April 11, 2025',
    author: 'Marcello Brocchi',
    readingTime: '6 min',
    category: 'Power Apps',
    featured: true,
    youtubeId: '_mgLYllGY-Y',
  },
  {
    id: 2,
    title: 'Getting Started with Power Apps and Microsoft SQL Database',
    description: 'Learn how to evolve your Power Apps development by connecting to Microsoft SQL databases. This comprehensive guide covers setting up an Azure SQL database and building applications.',
    slug: 'power-apps-with-sql-database',
    date: 'April 11, 2025',
    author: 'Marcello Brocchi',
    readingTime: '8 min',
    category: 'Power Apps',
    featured: true,
    youtubeId: 'awsNLPGNI4w',
  },
  {
    id: 3,
    title: 'Power Apps PDF Function - The Best Way to Export to PDF?',
    description: 'Discover how to use the new experimental PDF function in Power Apps to generate PDF documents directly from your applications without complex workarounds.',
    slug: 'power-apps-pdf-function',
    date: 'April 11, 2025',
    author: 'Marcello Brocchi',
    readingTime: '4 min',
    category: 'Power Apps',
    featured: false,
    youtubeId: 'BiOCK1jDOMo',
  },
  {
    id: 4,
    title: 'File Attachments in Power Apps - The Best Way to Do Them',
    description: 'Learn the best approach to implement file attachments in Power Apps using the new Power Automate action that makes uploading documents to SharePoint document libraries simple and efficient.',
    slug: 'file-attachments-in-power-apps',
    date: 'April 11, 2025',
    author: 'Marcello Brocchi',
    readingTime: '5 min',
    category: 'Power Apps',
    featured: false,
    youtubeId: 'yC0W5am6M3Q',
  },
  {
    id: 5,
    title: "Use SharePoint Lists just like a Relational Database in Power Apps",
    description:
    "In this tutorial, Marcello gives you a quick introduction into how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
    slug: 'sharepoint-lists',
    date: 'April 20, 2025',
    author: 'Marcello Brocchi',
    readingTime: '5 min',
    category: 'SharePoint',
    featured: false,
    youtubeId: 'Bea5aP-OpZg',
  },
];

  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Function to render a card (used for both featured and regular posts)
  const renderPostCard = (post, isFeatured = false) => (
    <Link 
      href={`/blog/${post.slug}`} 
      key={post.id} 
      className={isFeatured ? styles.featuredPostCard : styles.postCard}
    >
      <div className={styles.postImageContainer}>
        <Image 
          src={`https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`}
          alt={post.title}
          className={styles.postImage}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={styles.categoryBadge}>{post.category}</span>
      </div>
      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className={styles.headFiller}></div>
      <div className={styles.blogHeader}>
        <div className={styles.headerContent}>
          <h1>Power Platform Experts Blog</h1>
          <p>Expert tutorials, tips, and best practices for Microsoft Power Platform</p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        {/* Featured posts section */}
        {featuredPosts.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Featured Articles</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map(post => renderPostCard(post, true))}
            </div>
          </section>
        )}

        {/* Search and filter section */}
        <section className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <div className={styles.categoryFilters}>
            {categories.map(category => (
              <button 
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All posts section */}
        <section className={styles.allPostsSection}>
          <h2>All Articles</h2>
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No articles found matching your criteria. Please try a different search term or category.</p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {filteredPosts.map(post => renderPostCard(post))}
            </div>
          )}
        </section>
        <div className={styles.ctaContainer}>
<CTAMain />
</div>
      </div>
      
      <Contact />
    </>
  );
};

export default BlogPage;