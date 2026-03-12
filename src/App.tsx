import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ShieldCheck, HelpCircle, ArrowRight, ExternalLink, CheckCircle2, Languages, MessageSquare, Copy, Check } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState<'home' | 'about'>('home');
  const [copied, setCopied] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText('matixbest');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {page === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6 z-10"
            >
              {/* Logo - Using the uploaded image.png */}
              <motion.div
                animate={{ 
                  filter: ["drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))", "drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))", "drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-blue-600/10"
              >
                <img 
                  src="https://ibb.co/WNpthzs3" 
                  alt="Matix Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] neon-text">
                Matix
              </h1>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(59, 130, 246, 0.9)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('about')}
              className="group relative px-10 py-5 bg-blue-600 rounded-full font-bold text-xl transition-all duration-300 flex items-center gap-3 z-10 shadow-[0_0_20px_rgba(37,99,235,0.6)] mt-12"
            >
              Get to know me
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="absolute bottom-8 text-zinc-500 text-sm font-medium tracking-widest uppercase">
              Roblox Bee Swarm Simulator Middleman
            </div>

            <style>{`
              .neon-text {
                text-shadow: 0 0 10px rgba(255,255,255,0.8),
                             0 0 20px rgba(59, 130, 246, 0.8),
                             0 0 30px rgba(59, 130, 246, 0.6),
                             0 0 40px rgba(59, 130, 246, 0.4);
              }
            `}</style>
          </motion.div>
        ) : (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#4169E1] text-white p-6 md:p-12 lg:p-24"
          >
            <div className="max-w-5xl mx-auto">
              <header className="mb-16 flex justify-between items-center">
                <motion.button 
                  whileHover={{ x: -5 }}
                  onClick={() => setPage('home')}
                  className="text-white/80 hover:text-white flex items-center gap-2 font-medium"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  Back
                </motion.button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/30 bg-white/10">
                    <img src="https://ibb.co/WNpthzs3" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Matix</h2>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages Section */}
                <motion.section 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Languages className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Languages I Speak</h3>
                  </div>
                  <ul className="space-y-3 text-lg opacity-90">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-200" /> English</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-200" /> Romanian</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-200" /> Russian (a little)</li>
                  </ul>
                </motion.section>

                {/* Trust Section */}
                <motion.section 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Why You Can Trust Me</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-black text-blue-200">500+</div>
                    <p className="text-lg font-medium leading-relaxed opacity-90">
                      I have successfully conducted over 500 safe deals in Bee Swarm Simulator. 
                      As an honest middleman, I prioritize the security of every transaction above all else. 
                      I carefully monitor each step to ensure both parties are protected from any potential scams. 
                      My goal is to make the trading process as smooth and stress-free as possible for everyone involved. 
                      You can rely on my experience and reputation for a fair and transparent deal.
                    </p>
                  </div>
                </motion.section>

                {/* What is Middleman Section */}
                <motion.section 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">What Is a Middleman?</h3>
                  </div>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    A middleman is a neutral third party who facilitates a transaction between a buyer and a seller. 
                    They hold the payment or item until both sides have fulfilled their part of the agreement, 
                    ensuring that neither party gets cheated.
                  </p>
                  <a 
                    href="https://en.wikipedia.org/wiki/Middle_man" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors font-medium"
                  >
                    Learn more on Wikipedia
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.section>

                {/* Contact Section */}
                <motion.section 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Contact Me</h3>
                  </div>
                  <p className="text-lg opacity-90 mb-6">
                    Feel free to reach out to me on Discord for any inquiries or to start a deal.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                      <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0821.0821 0 00.0312-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm opacity-60 uppercase font-bold tracking-wider">Discord Username</p>
                        <p className="text-xl font-mono font-bold">matixbest</p>
                      </div>
                      <button 
                        onClick={copyDiscord}
                        className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all active:scale-95"
                        title="Copy Username"
                      >
                        {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </motion.section>

                {/* How it Works Section */}
                <motion.section 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl md:col-span-2"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">How the Deal Works</h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <p className="text-xl font-medium">
                        If you’re not sure how trades work with a middleman, don’t worry — I’ll explain everything 😊
                      </p>
                      <p className="text-lg opacity-90">
                        My goal is to make the deal safe and comfortable for both the buyer and the seller. 
                        Here’s how the process goes:
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        "The buyer sends the payment for the item plus the middleman fee (my commission is 3%).",
                        "I confirm that I received the payment.",
                        "The seller gives the item to the buyer.",
                        "The buyer checks the item to make sure everything is correct.",
                        "Once the buyer confirms that everything is good, I send the payment to the seller."
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                            {i + 1}
                          </div>
                          <p className="text-lg opacity-90">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-lg font-medium italic">
                      This way both sides stay safe, and no one has to worry about getting scammed. 
                      If you have any questions or feel unsure about something, feel free to ask me anytime 👍
                    </p>
                  </div>
                </motion.section>
              </div>

              <footer className="mt-24 text-center opacity-50 text-sm">
                &copy; {new Date().getFullYear()} Matix Middleman Services. All rights reserved.
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
