import React, { useState } from 'react';
import { LayoutGrid, List, Search, Columns } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import FAQTwoColumn from './components/FAQTwoColumn';
import FAQCards from './components/FAQCards';
import FAQSearchable from './components/FAQSearchable';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'accordion' | 'twocolumn' | 'cards' | 'searchable'>('accordion');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'accordion':
        return <FAQAccordion />;
      case 'twocolumn':
        return <FAQTwoColumn />;
      case 'cards':
        return <FAQCards />;
      case 'searchable':
        return <FAQSearchable />;
      default:
        return <FAQAccordion />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              Q
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">RapidRestore <span className="text-brand-600">FAQ</span></h1>
          </div>
          <div className="text-sm text-slate-500 hidden sm:block">
            Choose a layout style below
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('accordion')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'accordion' 
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 ring-2 ring-brand-600 ring-offset-2' 
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <List size={16} />
            Classic Accordion
          </button>
          
          <button
            onClick={() => setActiveTab('twocolumn')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'twocolumn' 
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 ring-2 ring-brand-600 ring-offset-2' 
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Columns size={16} />
            Two-Column
          </button>

          <button
            onClick={() => setActiveTab('cards')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'cards' 
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 ring-2 ring-brand-600 ring-offset-2' 
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <LayoutGrid size={16} />
            Card Grid
          </button>

          <button
            onClick={() => setActiveTab('searchable')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'searchable' 
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 ring-2 ring-brand-600 ring-offset-2' 
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Search size={16} />
            Searchable
          </button>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in-up">
          {renderActiveComponent()}
        </div>

        {/* JSON-LD Explanation */}
        <div className="mt-16 p-6 bg-slate-100 rounded-xl border border-slate-200 text-sm text-slate-600">
          <p className="font-semibold text-slate-800 mb-2">SEO Note:</p>
          <p>
            Each component includes comments indicating where to place the <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">application/ld+json</code> script for Google's FAQ Schema. 
            This structured data helps your FAQs appear as rich results in Google Search.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;