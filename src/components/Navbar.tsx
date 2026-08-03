import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, Layers, Cpu, Building2, BookOpen, Mail } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold tracking-tighter text-lg transition-transform group-hover:scale-105">
              15
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">
              Fifteen Miles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/50 border border-border/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                <Layers className="w-4 h-4" />
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {productsDropdownOpen && (
                <div
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-card border border-border shadow-2xl p-2 z-50 animate-in fade-in-50 zoom-in-95"
                >
                  <Link
                    to="/atlas"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground flex items-center gap-1">
                        Atlas <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-normal">Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">Enterprise Operating System</p>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-border/40" />

                  <Link
                    to="/products"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <span>View all products & directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/engineering"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              <Cpu className="w-4 h-4" />
              <span>Engineering</span>
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                <Building2 className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {companyDropdownOpen && (
                <div
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-card border border-border shadow-2xl p-2 z-50 animate-in fade-in-50 zoom-in-95"
                >
                  <Link
                    to="/company"
                    onClick={() => setCompanyDropdownOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-muted/50 transition-colors text-sm font-medium text-foreground"
                  >
                    About Fifteen Miles
                  </Link>
                  <Link
                    to="/manifesto"
                    onClick={() => setCompanyDropdownOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-muted/50 transition-colors text-sm font-medium text-foreground"
                  >
                    Manifesto
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/atlas"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all shadow-sm hover:shadow group"
            >
              <span>Explore Atlas</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 shadow-2xl md:hidden animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Products</div>
            <Link
              to="/atlas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 text-foreground font-medium"
            >
              <Layers className="w-5 h-5 text-primary" />
              <div>
                <div>Atlas</div>
                <div className="text-xs text-muted-foreground">Enterprise Operating System</div>
              </div>
            </Link>

            <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mt-2">Navigation</div>
            <Link
              to="/engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
            >
              Engineering
            </Link>
            <Link
              to="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
            >
              Company
            </Link>
            <Link
              to="/manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
            >
              Manifesto
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-border">
              <Link
                to="/atlas"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground text-background font-medium text-sm"
              >
                <span>Explore Atlas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
