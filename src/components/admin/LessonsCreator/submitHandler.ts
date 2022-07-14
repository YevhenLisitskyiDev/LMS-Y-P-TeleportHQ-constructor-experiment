import supabase from "../../../services/supabase";
import store from "../../../store";
import config from "../../../config";

const submitHandler = async (e, id) => {
  e.preventDefault();
  const button = e.target[e.target.length - 1];
  button.disabled = true;
  const formData = { course_id: id, organization_id: config.ORGANIZATION_ID  };

  for (let i = 0; i < e.target.length; i++) {
    const fieldName = e.target[i].name;
    const fieldValue = e.target[i].value;
    if (fieldName) formData[fieldName] = fieldValue;
  }

  const { data, error } = await supabase.from("lessons").insert([formData]);
  if (!error) {
    for (let i = 0; i < e.target.length; i++) {
      const fieldValue = e.target[i].value;
      if (fieldValue) e.target[i].value = "";
    }
    button.disabled = false;
    store.lessons[id].nextPush(data[0])
    alert("Lesson created successfully");
  } else alert(error?.message);
};

export default submitHandler;
