/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  BarChart3, 
  Filter, 
  Download, 
  FileSpreadsheet, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  ExternalLink,
  Star,
  MapPin,
  ShoppingCart,
  Menu,
  ChevronDown,
  Info,
  ArrowRight
} from "lucide-react";

const DOWNLOAD_LINK = "https://www.mediafire.com/file/ebj477mant35wus/amazon-kdp-search-publisher-extension-v6.rar/file";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      {/* Amazon Top Nav */}
      <nav className="bg-[#131921] text-white">
        <div className="max-w-[1500px] mx-auto flex items-center gap-4 px-4 py-2">
          {/* Logo */}
          <div className="flex items-center p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <div className="flex items-center gap-1">
              <div className="bg-[#FF9900] p-1 rounded-sm">
                <Search className="w-5 h-5 text-[#131921]" />
              </div>
              <span className="text-xl font-bold tracking-tight">KDP <span className="text-[#FF9900]">Ars</span></span>
            </div>
          </div>

          {/* Deliver to */}
          <div className="hidden lg:flex flex-col p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <span className="text-[12px] text-gray-400 leading-none ml-5">Deliver to</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-bold">KDP Publisher</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex h-10">
            <div className="bg-[#E6E6E6] text-[#555] text-xs px-3 flex items-center rounded-l-md border-r border-gray-300 cursor-pointer hover:bg-gray-300">
              All <ChevronDown className="w-3 h-3 ml-1" />
            </div>
            <input 
              type="text" 
              placeholder="Search KDP Ars features..." 
              className="flex-1 px-3 text-black focus:outline-none"
            />
            <button className="bg-[#FEBD69] hover:bg-[#f3a847] px-5 rounded-r-md flex items-center justify-center">
              <Search className="w-5 h-5 text-[#131921]" />
            </button>
          </div>

          {/* Account & Lists */}
          <div className="hidden md:flex flex-col p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <span className="text-[12px] leading-none">Hello, Sign in</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">Account & Lists</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </div>

          {/* Orders */}
          <div className="hidden md:flex flex-col p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <span className="text-[12px] leading-none">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </div>

          {/* Cart */}
          <div className="flex items-end p-2 border border-transparent hover:border-white rounded-sm cursor-pointer relative">
            <div className="relative">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#FF9900] font-bold text-sm">0</span>
            </div>
            <span className="text-sm font-bold mb-1">Cart</span>
          </div>
        </div>

        {/* Sub Nav */}
        <div className="bg-[#232F3E] px-4 py-1 flex items-center gap-4 text-sm font-medium">
          <a href="#features" className="p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">Features</a>
          <a href="#how-it-works" className="p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">How it Works</a>
          <a href={DOWNLOAD_LINK} className="p-2 border border-transparent hover:border-white rounded-sm cursor-pointer text-[#FF9900]">Download Extension</a>
          <div className="hidden lg:block p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">Publisher Scanner</div>
          <div className="hidden lg:block p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">Brand Analysis</div>
          <div className="hidden lg:block p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">CSV Export</div>
        </div>
      </nav>

      {/* Main Content (Amazon Product Page Style) */}
      <main className="max-w-[1500px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px_300px] gap-8">
          
          {/* Left Column: Product Image/Preview */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="sticky top-24"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-8 flex items-center justify-center min-h-[500px]">
                <div className="relative w-full max-w-md">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform rotate-1">
                    <div className="bg-[#F3F3F3] border-b border-gray-200 px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 bg-white rounded py-1 px-3 text-[10px] text-gray-400 truncate">
                        amazon.com/s?k=kdp+books
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-[#232F3E]">KDP Ars Analysis</h3>
                        <div className="bg-[#FF9900]/10 text-[#FF9900] text-xs font-bold px-3 py-1 rounded">Scanning...</div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { title: "Independently Published", count: 18, color: "bg-green-500", width: "w-full" },
                          { title: "Brand: Creative Haven", count: 7, color: "bg-blue-500", width: "w-1/3" },
                          { title: "Brand: Dover Publications", count: 4, color: "bg-purple-500", width: "w-1/4" },
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold text-gray-600">
                              <span>{item.title}</span>
                              <span>{item.count}</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className={`h-full ${item.color} ${item.width}`}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-[10px] text-gray-400">Detected 48 items on page</div>
                        <button className="bg-[#232F3E] text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2 shadow-sm">
                          <FileSpreadsheet className="w-4 h-4" />
                          Export CSV
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -left-4 bg-[#FF9900] text-[#131921] font-black text-sm px-4 py-2 rounded-full shadow-lg transform -rotate-12">
                    #1 KDP SCANNER
                  </div>
                </div>
              </div>
              
              {/* Thumbnail strip */}
              <div className="flex gap-2 mt-4 justify-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-12 h-12 border-2 rounded p-1 cursor-pointer transition-all ${i === 1 ? 'border-[#FF9900]' : 'border-gray-200 hover:border-[#FF9900]'}`}>
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                      <Search className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle Column: Product Info */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium leading-tight mb-1">
              KDP Ars - Amazon Publisher Scanner Chrome Extension for KDP Research, Brand Analysis, and CSV Export (v6.0)
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-[#FFA41C]">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-[#007185] text-sm hover:text-[#C7511F] cursor-pointer hover:underline">1,248 ratings</span>
              <span className="text-gray-400">|</span>
              <span className="text-[#007185] text-sm hover:text-[#C7511F] cursor-pointer hover:underline">Chrome Web Store Extension</span>
            </div>
            
            <div className="bg-[#CC0C39] text-white text-xs font-bold px-2 py-1 inline-block w-fit mb-4">
              Amazon Choice
            </div>

            <hr className="mb-4 border-gray-200" />

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-sm self-start mt-1">$</span>
              <span className="text-3xl font-medium">0</span>
              <span className="text-sm font-medium">00</span>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-sm font-bold">About this Extension:</p>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-800">
                <li><span className="font-bold">PUBLISHER SCANNER:</span> Automatically detects and displays the publisher for every book on Amazon search results pages.</li>
                <li><span className="font-bold">BRAND IDENTIFICATION:</span> Instantly see how many titles are Independently Published versus tied to specific brand names.</li>
                <li><span className="font-bold">DATA FILTERS:</span> Use built-in filters to narrow down your research to specific publishers or independent titles.</li>
                <li><span className="font-bold">CSV EXPORT:</span> Download all gathered data (ASIN, Title, Publisher) in a clean CSV format for your research spreadsheets.</li>
                <li><span className="font-bold">PRIVACY FOCUSED:</span> KDP Ars only reads search result data and does not track your personal browsing history.</li>
              </ul>
            </div>

            <div className="bg-[#F3F3F3] p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 text-sm">
                <Info className="w-4 h-4 text-gray-500" />
                <span>Concept: This is a dedicated landing page for the KDP Ars Chrome Extension, styled with the familiar Amazon interface.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 rounded-lg p-4 sticky top-24">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm self-start mt-1">$</span>
                <span className="text-2xl font-medium">0</span>
                <span className="text-sm font-medium">00</span>
              </div>
              
              <p className="text-[#007600] text-sm font-bold mb-4">FREE Download</p>
              
              <div className="flex items-center gap-2 text-sm mb-4">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-[#007185]">Available for Chrome</span>
              </div>

              <p className="text-[#007600] text-lg font-bold mb-4">In Stock.</p>

              <div className="space-y-3">
                <a 
                  href={DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Chrome
                </a>
                <a 
                  href={DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FFA41C] hover:bg-[#FA8900] py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Download Now
                </a>
              </div>

              <hr className="my-4 border-gray-200" />

              <button className="w-full text-left text-sm text-[#007185] hover:text-[#C7511F] hover:underline flex items-center justify-between">
                Add to Wish List
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Extension Details & Installation Guide */}
        <section id="how-it-works" className="mt-16 border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold mb-6">Extension details</h2>
              <div className="space-y-3 border-b border-gray-100 pb-4">
                <div className="grid grid-cols-[150px_1fr] text-sm">
                  <span className="font-bold">Version</span>
                  <span>6.0 (Latest Release)</span>
                </div>
                <div className="grid grid-cols-[150px_1fr] text-sm">
                  <span className="font-bold">Compatibility</span>
                  <span>Chrome, Brave, Edge, Opera</span>
                </div>
                <div className="grid grid-cols-[150px_1fr] text-sm">
                  <span className="font-bold">Language</span>
                  <span>English</span>
                </div>
                <div className="grid grid-cols-[150px_1fr] text-sm">
                  <span className="font-bold">Size</span>
                  <span>1.4 MB</span>
                </div>
                <div className="grid grid-cols-[150px_1fr] text-sm">
                  <span className="font-bold">Developer</span>
                  <span>KDP Ars Research Tools</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-bold mb-2">Legal Disclaimer</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  KDP Ars is an independent tool and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Amazon.com, Inc., or any of its subsidiaries or its affiliates.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6">Installation Guide</h2>
              <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div>
                  <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#232F3E] text-white rounded-full flex items-center justify-center text-[10px]">1</div>
                    Download
                  </h4>
                  <p className="text-xs text-gray-600 ml-7">
                    Click the "Download Now" button to get the <span className="font-bold">v6.0 .rar</span> package.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#232F3E] text-white rounded-full flex items-center justify-center text-[10px]">2</div>
                    Extract
                  </h4>
                  <p className="text-xs text-gray-600 ml-7">
                    Extract the contents of the .rar file to a folder on your computer.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#232F3E] text-white rounded-full flex items-center justify-center text-[10px]">3</div>
                    Load Unpacked
                  </h4>
                  <p className="text-xs text-gray-600 ml-7">
                    Go to <span className="font-mono bg-white border border-gray-200 px-1">chrome://extensions</span>, enable <span className="font-bold">Developer Mode</span>, and click <span className="font-bold">Load unpacked</span>. Select your extracted folder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-8">Product Features & Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AmazonFeatureCard 
              icon={<Search className="w-8 h-8 text-[#FF9900]" />}
              title="Publisher Detection"
              description="Instantly identifies the publisher of every book in search results."
            />
            <AmazonFeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-[#FF9900]" />}
              title="Brand Analysis"
              description="Differentiate between independent and branded titles easily."
            />
            <AmazonFeatureCard 
              icon={<FileSpreadsheet className="w-8 h-8 text-[#FF9900]" />}
              title="CSV Export"
              description="Download all data for offline analysis in Excel or Google Sheets."
            />
            <AmazonFeatureCard 
              icon={<Filter className="w-8 h-8 text-[#FF9900]" />}
              title="Smart Filters"
              description="Filter results to focus on the specific data points you need."
            />
          </div>
        </section>

        {/* Customer Questions & Answers */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-xl font-bold mb-6">Customer questions & answers</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <ChevronDown className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="font-bold text-lg">12</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
                <span className="text-[10px] text-gray-500 uppercase">votes</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <span className="font-bold text-sm min-w-[60px]">Question:</span>
                  <span className="text-sm text-[#007185] hover:underline cursor-pointer font-medium">Does this work on Amazon.de and other marketplaces?</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-sm min-w-[60px]">Answer:</span>
                  <span className="text-sm text-gray-800">Yes, KDP Ars is designed to work on all Amazon marketplaces including .com, .uk, .de, .fr, .it, and .es. It detects the publisher information regardless of the language.</span>
                </div>
                <p className="text-xs text-gray-500 ml-[76px]">By KDP Ars Team on March 20, 2026</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <ChevronDown className="w-4 h-4 text-gray-400 rotate-180" />
                <span className="font-bold text-lg">8</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
                <span className="text-[10px] text-gray-500 uppercase">votes</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <span className="font-bold text-sm min-w-[60px]">Question:</span>
                  <span className="text-sm text-[#007185] hover:underline cursor-pointer font-medium">Is there a limit to how many books it can scan?</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-sm min-w-[60px]">Answer:</span>
                  <span className="text-sm text-gray-800">No, there is no limit. It scans all books currently loaded on your search results page. If you have "infinite scroll" enabled, it will continue to scan as you scroll down.</span>
                </div>
                <p className="text-xs text-gray-500 ml-[76px]">By KDP Ars Team on March 18, 2026</p>
              </div>
            </div>
            
            <button className="text-[#007185] text-sm hover:text-[#C7511F] hover:underline font-medium ml-[76px]">
              See more answered questions (24)
            </button>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#FFA41C]">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-lg">4.9 out of 5</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">1,248 global ratings</p>
              
              <div className="space-y-2 mb-8">
                {[
                  { star: 5, percent: 92 },
                  { star: 4, percent: 6 },
                  { star: 3, percent: 1 },
                  { star: 2, percent: 0 },
                  { star: 1, percent: 1 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-4 text-sm">
                    <span className="text-[#007185] hover:underline cursor-pointer whitespace-nowrap">{row.star} star</span>
                    <div className="flex-1 h-5 bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                      <div className="h-full bg-[#FFA41C]" style={{ width: `${row.percent}%` }}></div>
                    </div>
                    <span className="text-[#007185] hover:underline cursor-pointer w-8">{row.percent}%</span>
                  </div>
                ))}
              </div>
              
              <hr className="mb-6 border-gray-200" />
              
              <h3 className="font-bold mb-2">Review this product</h3>
              <p className="text-sm mb-4">Share your thoughts with other publishers</p>
              <button className="w-full border border-gray-300 rounded-md py-1.5 text-sm shadow-sm hover:bg-gray-50">
                Write a customer review
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Top reviews from the KDP community</h3>
              <div className="space-y-8">
                <Review 
                  user="Sarah J."
                  rating={5}
                  title="Game changer for niche research!"
                  date="Reviewed in the United States on March 15, 2026"
                  content="This extension has saved me hours of manual work. Being able to see who the publisher is without clicking into every single book is incredible. The CSV export is the cherry on top."
                />
                <Review 
                  user="David K."
                  rating={5}
                  title="Essential tool for KDP"
                  date="Reviewed in the United Kingdom on March 10, 2026"
                  content="I use this daily to check how many independent publishers are in a niche before I decide to enter it. It's fast, accurate, and completely free. Highly recommend!"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16">
        <div className="bg-[#37475A] text-white text-center py-4 text-sm font-medium hover:bg-[#485769] cursor-pointer">
          Back to top
        </div>
        
        <div className="bg-[#232F3E] text-white py-12">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            <div>
              <h4 className="font-bold mb-4">Get to Know Us</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li className="hover:underline cursor-pointer">About KDP Ars</li>
                <li className="hover:underline cursor-pointer">Our Mission</li>
                <li className="hover:underline cursor-pointer">KDP Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li className="hover:underline cursor-pointer">KDP University</li>
                <li className="hover:underline cursor-pointer">Keyword Research</li>
                <li className="hover:underline cursor-pointer">Niche Finder</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li className="hover:underline cursor-pointer">Help Center</li>
                <li className="hover:underline cursor-pointer">Contact Us</li>
                <li className="hover:underline cursor-pointer">Report a Bug</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li className="hover:underline cursor-pointer">Privacy Policy</li>
                <li className="hover:underline cursor-pointer">Terms of Service</li>
                <li className="hover:underline cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#131921] text-white py-8 text-center border-t border-gray-800">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#FF9900] p-1 rounded-sm">
              <Search className="w-4 h-4 text-[#131921]" />
            </div>
            <span className="text-lg font-bold tracking-tight">KDP <span className="text-[#FF9900]">Ars</span></span>
          </div>
          <p className="text-xs text-gray-400">© 2026 KDP Ars. Not affiliated with Amazon.com, Inc. or its affiliates.</p>
        </div>
      </footer>
    </div>
  );
}

function AmazonFeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Review({ user, rating, title, date, content }: { user: string, rating: number, title: string, date: string, content: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-gray-500">{user[0]}</span>
        </div>
        <span className="text-sm">{user}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex text-[#FFA41C]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`w-4 h-4 ${i <= rating ? 'fill-current' : 'text-gray-200'}`} />
          ))}
        </div>
        <span className="text-sm font-bold">{title}</span>
      </div>
      <p className="text-xs text-gray-500">{date}</p>
      <div className="bg-[#FEF6E6] text-[#C45500] text-[10px] font-bold px-2 py-0.5 inline-block rounded-sm">
        Verified Purchase
      </div>
      <p className="text-sm text-gray-800 leading-relaxed">{content}</p>
      <div className="flex items-center gap-4 pt-2">
        <button className="border border-gray-300 rounded-md px-6 py-1 text-xs shadow-sm hover:bg-gray-50">
          Helpful
        </button>
        <span className="text-xs text-gray-500">|</span>
        <button className="text-xs text-gray-500 hover:underline">Report abuse</button>
      </div>
    </div>
  );
}
