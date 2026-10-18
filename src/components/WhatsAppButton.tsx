export default function WhatsAppButton() {
  const whatsappNumber = '+2348140192298';
  const message = encodeURIComponent('Hi! I would like to order from DeeLicious BITES.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f4c430] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0a]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-11 w-11"
      >
        <path
          fill="white"
          d="M16 3.2A12.8 12.8 0 0 0 5.03 22.6L3.2 28.8l6.38-1.8A12.8 12.8 0 1 0 16 3.2Z"
        />
        <circle cx="16" cy="15.5" r="10.25" fill="#25D366" />
        <path
          fill="white"
          d="M21.84 18.68c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.87-1.75-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.32-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.6-.36Z"
        />
      </svg>
    </a>
  );
}
