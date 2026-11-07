'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './theme-provider';
import {
  Menu,
  X,
  Code2,
  Users,
  Rocket,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Moon,
  Sun,
} from 'lucide-react';

const navItems = [
  { name: 'Hero', href: '#hero' },
  { name: 'Impact', href: '#metrics' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Projects', href: '#projects' },
  { name: 'Social', href: '#social' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-background/50 bg-background/80 backdrop-blur-md dark:bg-slate-900/80 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Mihir<span className="text-primary">Shah</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
}
