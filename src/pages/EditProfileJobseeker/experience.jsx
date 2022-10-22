import React from "react";

function personal() {
  return (
    <div className="experience_personal">
      <div className="experience_personal-title">Pengalaman Kerja</div>
      <div className="experience_input-section">
        <div className="experience_column">
          <div className="experience_section">
            <div>
              <label className="experience_input-label">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Masukan nama perusahaan"
                className="experience_input"
              />
            </div>
            <div>
              <label className="experience_input-label">Tanggal Masuk</label>
              <input
                type="date"
                placeholder="Masukan Username IG"
                className="experience_input"
              />
            </div>
          </div>
          <div className="experience_section">
            <div className="experience_section">
              <div>
                <label className="experience_input-label">Posisi</label>
                <input
                  type="text"
                  placeholder="Masukan posisi"
                  className="experience_input"
                />
              </div>
              <div>
                <label className="experience_input-label">Tanggal Masuk</label>
                <input
                  type="date"
                  placeholder="Masukan Username Github"
                  className="experience_input"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="experience_input-label">Deskripsi singkat</label>
          <input
            type="text-area"
            placeholder="Deskripsikan pekerjaan anda"
            className="experience_input-desc"
          />
        </div>
        <div className="experience_save-button">Tambah pengalaman kerja</div>
      </div>
    </div>
  );
}

export default personal;
