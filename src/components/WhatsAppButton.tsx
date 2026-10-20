import { WhatsAppIcon } from './WhatsAppIcon';

export default function WhatsAppButton() {
  const whatsappNumber = '+2348140192298';
  const message = encodeURIComponent('Hi! I would like to order from DeeLicious BITES.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 drop-shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:drop-shadow-[0_14px_30px_rgba(37,211,102,0.7)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f4c430] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0a] group"
      aria-label="Chat with DeeLicious BITES on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-16 w-16" />
    </a>
  );
}
