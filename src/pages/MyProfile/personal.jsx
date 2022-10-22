import React from "react";

function personal() {
  return (
    <div className="personal_personal">
      <div className="personal_personal-title">Data Diri</div>
      <div className="personal_input-section">
        <div>
          <label className="personal_input-label">Nama lengkap</label>
          <input
            type="text"
            placeholder="Masukan nama lengkap"
            className="personal_input"
          />
        </div>
        <div>
          <label className="personal_input-label">Job desk</label>
          <input
            type="text"
            placeholder="Masukan job desk"
            className="personal_input"
          />
        </div>
        <div>
          <label className="personal_input-label">Domisili</label>
          <input
            type="text"
            placeholder="Masukan domisili"
            className="personal_input"
          />
        </div>
        <div className="personal_social-section">
          <div>
            <label className="personal_input-label">Instagram</label>
            <input
              type="text"
              placeholder="Masukan Username IG"
              className="personal_input"
            />
          </div>
          <div>
            <label className="personal_input-label">Github</label>
            <input
              type="text"
              placeholder="Masukan Username Github"
              className="personal_input"
            />
          </div>
          <div>
            <label className="personal_input-label">Gitlab</label>
            <input
              type="text"
              placeholder="Masukan Username Gitlab"
              className="personal_input"
            />
          </div>
        </div>
        <div>
          <label className="personal_input-label">Deskripsi singkat</label>
          <input
            type="text-area"
            placeholder="Tuliskan deskripsi singkat"
            className="personal_input-desc"
          />
        </div>
        <div className="personal_save-button">Simpan</div>
      </div>
    </div>
  );
}

export default personal;
