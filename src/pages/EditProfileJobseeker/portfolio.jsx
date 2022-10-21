import React from "react";

function personal() {
  return (
    <div className="portfolio_personal">
      <div className="portfolio_personal-title">Portofolio</div>
      <div className="portfolio_input-section">
        <div>
          <label className="portfolio_input-label">Nama aplikasi</label>
          <input
            type="text"
            placeholder="Masukan nama aplikasi"
            className="portfolio_input"
          />
        </div>
        <div>
          <label className="portfolio_input-label">Link repository</label>
          <input
            type="text"
            placeholder="Masukan link repository"
            className="portfolio_input"
          />
        </div>
        <div>
          <label className="portfolio_input-label">Upload gambar</label>
          <input
            type="file"
            placeholder="Upload gambar"
            className="portfolio_input"
          />
        </div>
        <div className="portfolio_save-button">Tambah portofolio</div>
      </div>
    </div>
  );
}

export default personal;
