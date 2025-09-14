import React from "react";
import { Users, User } from "lucide-react"; // optional, if using lucide-react icons

const StatistikSection = () => {
  return (
    <section>
      {/* Top - Statistics */}
      <div className="bg-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Card 1 */}
          <div>
            <User className="w-10 h-10 mx-auto mb-2" />
            <p className="text-3xl font-bold">40</p>
            <p className="mt-1">Guru dan Tenaga Pendidikan</p>
          </div>

          {/* Card 2 */}
          <div>
            <Users className="w-10 h-10 mx-auto mb-2" />
            <p className="text-3xl font-bold">549</p>
            <p className="mt-1">Siswa Kelas X</p>
          </div>

          {/* Card 3 */}
          <div>
            <Users className="w-10 h-10 mx-auto mb-2" />
            <p className="text-3xl font-bold">505</p>
            <p className="mt-1">Siswa Kelas XI</p>
          </div>

          {/* Card 4 */}
          <div>
            <Users className="w-10 h-10 mx-auto mb-2" />
            <p className="text-3xl font-bold">526</p>
            <p className="mt-1">Siswa Kelas XII</p>
          </div>
        </div>
      </div>

      {/* Bottom - CTA */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3.5 px-36">
          <h3 className="text-2xl font-bold mb-4 md:mb-0">
            Ayo Daftar Sekarang Juga!
          </h3>
          <a
            href="https://smkyadikasoreang.sch.id/Ppdb"
            className="px-6 py-2 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            PPDB
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatistikSection;