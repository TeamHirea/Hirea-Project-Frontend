import React from "react";
import { TrashFill } from "react-bootstrap-icons";

function personal() {
  return (
    <div className="skill_personal">
      <div className="skill_personal-title">Skill</div>
      <div className="skill_input-section">
        <div>
          <input
            type="text"
            placeholder="Masukan skill"
            className="skill_input"
          />
        </div>
        <div className="skill_save-button">Simpan</div>
        <div className="skill_container">
          <div className="skill_item">
            Phyton <TrashFill />
          </div>
          <div className="skill_item">
            Java <TrashFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default personal;
