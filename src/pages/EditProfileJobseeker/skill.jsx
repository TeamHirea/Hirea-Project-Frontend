import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteSkill, getSkill, updateSkill } from "../../redux/action/skill";
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

  const deleteSkillHandler = async (skill_id) => {
    setIsLoading2(true);
    const body = { skill_id: skill_id };
    await dispatch(deleteSkill(id, body));
    await dispatch(getSkill(id));
    setIsLoading2(false);
  };
  const addSkill = async () => {
    try {
      if (newSkill) {
        setIsLoading(true);
        const form = { skill: newSkill };
        await dispatch(updateSkill(id, form));
        await dispatch(getSkill(id));
        setNewSkill("");
        setIsLoading(false);
      }
      setNewSkill("");
    } catch (error) {
      setNewSkill("");
      setIsLoading(false);
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
          {skill.map((item) => {
            return (
              <div className="skill_item" key={item.skill_id}>
                {item.skill_name}{" "}
                <TrashFill
                  onClick={() => {
                    deleteSkillHandler(item.skill_id);
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
