import supabase from "./../../../../services/supabase";
import config from "./../../../../config";

const submitHandler = async (e) => {
  e.preventDefault();
  const button = e.target[e.target.length - 1];
  button.disabled = true;
  console.log(button);
  const formData = { organization_id: config.ORGANIZATION_ID };

  for (let i = 0; i < e.target.length; i++) {
    const fieldName = e.target[i].name;
    const fieldValue = e.target[i].value;
    if (fieldName) formData[fieldName] = fieldValue;
  }

  const { data, error } = await supabase.from("courses").insert([formData]);
  if (!error) {
    for (let i = 0; i < e.target.length; i++) {
      const fieldValue = e.target[i].value;
      if (fieldValue) e.target[i].value = "";
    }
    button.disabled = false;

    alert("Course created successfully");
  } else alert(error?.message);
};

export default submitHandler;
