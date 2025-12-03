import React from 'react';
import { Copy, Quote } from 'lucide-react';

const QuoteCard = ({ quote, onNewQuote }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
        alert('Vibe copied to clipboard!');
    };

    return (
        <div className="quote-card">
            <div className="quote-icon">
                <Quote size={48} />
            </div>
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>

            <div className="card-actions">
                <button onClick={copyToClipboard} className="icon-btn" title="Copy Vibe">
                    <Copy size={20} />
                </button>
                <button onClick={onNewQuote} className="new-quote-btn">
                    New Vibe
                </button>
            </div>
        </div>
    );
};

export default QuoteCard;
