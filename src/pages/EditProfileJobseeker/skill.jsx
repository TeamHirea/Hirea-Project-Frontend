import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSkill, updateSkill } from "../../redux/action/skill";
import { TrashFill } from "react-bootstrap-icons";

function personal() {
  const [newSkill, setNewSkill] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const id = localStorage.getItem("id");
  const skill = useSelector((state) => state.skill.skill);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkill(id));
  }, []);

  const deleteSkillHandler = async (index) => {
    setIsLoading2(true);
    const updatedSkill = skill.slice();
    updatedSkill.splice(index, 1);
    const form = { skill: updatedSkill };
    await dispatch(updateSkill(id, form));
    await dispatch(getSkill(id));
    setIsLoading2(false);
  };
  const addSkill = async () => {
    if (newSkill) {
      if (!skill.includes(newSkill)) {
        setIsLoading(true);
        const updatedSkill = skill.slice();
        updatedSkill.push(newSkill);
        const form = { skill: updatedSkill };
        await dispatch(updateSkill(id, form));
        await dispatch(getSkill(id));
        setNewSkill(null);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="skill_personal">
      <div className="skill_personal-title">Skill</div>
      <div className="skill_input-section">
        <div>
          <input
            type="text"
            placeholder="Masukan skill"
            className="skill_input"
            onChange={(e) => {
              setNewSkill(e.target.value);
            }}
            value={newSkill}
          />
        </div>
        {!isLoading ? (
          <div className="skill_save-button" onClick={addSkill}>
            Simpan
          </div>
        ) : (
          <div className="skill_save-button">
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            >
              <span className="visually-hidden" />
            </div>
          </div>
        )}

        <div className="skill_container">
          {skill.map((item, index) => {
            return (
              <div className="skill_item" key={index}>
                {item}{" "}
                <TrashFill
                  onClick={() => {
                    deleteSkillHandler(index);
                  }}
                />
              </div>
            );
          })}
          {isLoading2 ? (
            <div
              className="spinner-border text-secondary spinner-border-sm"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default personal;
