import React from 'react';
import { Brain, ArrowRight, Link2, BookMarked, Share2, Database } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Brain className="w-10 h-10 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-800">Second Brain</h1>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
          <a href="/signup">Sign Up Now</a>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Digital Memory Vault
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Store, organize, and access all your important links in one place. 
          Never lose a valuable resource again with your personal Second Brain.
        </p>
        <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:bg-purple-700 transition-colors">
          <span><a href="/signin">Get Started</a></span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Link2 className="w-8 h-8 text-purple-600" />}
              title="Store Any Link"
              description="Save URLs from YouTube, Twitter, Instagram, or any website for future reference."
            />
            <FeatureCard
              icon={<BookMarked className="w-8 h-8 text-purple-600" />}
              title="Organize Notes"
              description="Keep your study materials, articles, and documentation organized and accessible."
            />
            <FeatureCard
              icon={<Share2 className="w-8 h-8 text-purple-600" />}
              title="Easy Sharing"
              description="Share your curated collections with friends or keep them private."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-purple-600" />}
              title="Cloud Sync"
              description="Access your Second Brain from any device, anytime, anywhere."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Digital Memory?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using Second Brain to organize their digital life.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            <a href="/signup">Start Free Trial</a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="font-bold text-lg">Second Brain</span>
              </div>
              <p className="text-gray-400">
                Your personal link management system for the digital age.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Second Brain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default LandingPage;