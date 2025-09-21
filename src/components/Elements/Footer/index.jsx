import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tanya Jawab
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Hubungkan Investor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cara Menonton
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Butuh Bantuan?</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Masukan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privasi & Kebijakan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Terhubung dengan Kami</h4>
            <ul className="flex gap-4">
              <li>
                <a href="https://wa.me/6285122951065" className="text-gray-400 hover:text-white">
                  <FaWhatsapp size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/azhril-nurmaulidan/" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lirhza" className="text-gray-400 hover:text-white">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="mailto:mazhrilnurmaulidan@gmail.com" className="text-gray-400 hover:text-white">
                  <FaEnvelope size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Kontak Kami</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/6285122951065" className="text-gray-400 hover:text-white">
                  +62 851 2295 1065
                </a>
              </li>
              <li>
                <a href="mailto:mazhrilnurmaulidan@gmail.com" className="text-gray-400 hover:text-white">
                  mazhrilnurmaulidan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Konten tergantung pada ketersediaan. © 2025 Lirhza Movie. Hak Cipta
                Dilindungi Undang-Undang.
              </p>
              <ul className="flex space-x-4 mt-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Ketentuan Penggunaan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Kebijakan Privasi Tambahan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
