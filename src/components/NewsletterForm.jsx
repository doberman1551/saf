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
        mode: 'no-cors',
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
    <div className="max-w-md mx-auto  rounded-xl  overflow-hidden mb-8">
      <div className="p-4">
    {/*    <form onSubmit={handleSubmit} className="space-y-4">
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
          </button> /*}
       
        </form> */}
           <iframe src="https://embeds.beehiiv.com/91ad6a57-6681-46ad-9f35-cd5a6a7dcd10?slim=true" data-test-id="beehiiv-embed" height="52" className="w-full space-y-4 mx-4"></iframe>
      </div>
    </div>
  );
};