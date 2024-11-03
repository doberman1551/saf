function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Clear Sky OS</h3>
            <p className="text-gray-300">
              Building the Sustainable Avition Industry together
            </p>
          </div>
     <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">About</a></li>
            
            </ul>
          </div>
              {/* 
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
  </div> */}
          <div> 
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ClearSkyOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer