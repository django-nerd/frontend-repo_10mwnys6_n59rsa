export default function Footer(){
  return (
    <footer id="support" className="relative mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">FireStrikeX Officials</h4>
            <p className="text-slate-400">Play free. Fair and fun for everyone.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety & Fair Play</a></li>
              <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} FireStrikeX Officials. All rights reserved.</p>
      </div>
    </footer>
  );
}
