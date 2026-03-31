import { PHONE_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'm interested in the Lotwaala wholesale marketplace app."
  );
  const href = `https://wa.me/91${PHONE_NUMBER}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.4)] animate-fade-in-up delay-800"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 2.667A13.22 13.22 0 0 0 2.788 15.883a13.1 13.1 0 0 0 1.776 6.59L2.667 29.333l7.073-1.854a13.24 13.24 0 0 0 6.264 1.588h.005A13.22 13.22 0 0 0 29.333 15.89 13.22 13.22 0 0 0 16.004 2.667Zm0 24.2a10.97 10.97 0 0 1-5.6-1.533l-.4-.24-4.2 1.1 1.12-4.093-.263-.42a10.93 10.93 0 0 1-1.68-5.807A11 11 0 0 1 16.004 4.9a11 11 0 0 1 11.02 10.993 11 11 0 0 1-11.02 10.974Zm6.027-8.227c-.33-.166-1.953-.964-2.256-1.074-.303-.113-.524-.166-.744.166s-.854 1.074-1.047 1.294c-.193.22-.386.248-.716.083a9.03 9.03 0 0 1-2.656-1.64 9.96 9.96 0 0 1-1.837-2.29c-.193-.33-.02-.508.145-.672.148-.148.33-.386.496-.58.166-.193.22-.33.33-.55.11-.22.056-.413-.028-.58-.083-.166-.744-1.793-1.02-2.456-.268-.644-.54-.557-.744-.567-.193-.01-.413-.01-.634-.01a1.22 1.22 0 0 0-.882.413c-.303.33-1.157 1.13-1.157 2.756s1.185 3.197 1.35 3.417c.166.22 2.332 3.56 5.65 4.994.79.34 1.406.544 1.886.696.793.252 1.514.216 2.084.131.636-.095 1.953-.798 2.228-1.568.276-.77.276-1.43.193-1.568-.083-.138-.303-.22-.634-.386Z" />
      </svg>
    </a>
  );
}
