import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.beehiiv.com/v2/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          publication_id: import.meta.env.VITE_BEEHIIV_PUBLICATION_ID,
          reactivate_existing: true
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      toast.success('Successfully subscribed! Check your email to confirm.');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto  rounded-xl  overflow-hidden mb-8">
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              'Subscribe ✉️'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};