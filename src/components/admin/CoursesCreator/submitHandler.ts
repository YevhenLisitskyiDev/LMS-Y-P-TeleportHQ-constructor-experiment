import { Subject } from "subjecto";
import supabase from "../../../services/supabase";
import config from "../../../config";
import store from "../../../store";


const submitHandler = async (e) => {
  e.preventDefault();
  const button = e.target[e.target.length - 1];
  button.disabled = true;
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
    store.lessons[data[0].id] = new Subject<any>(null);
    store.courses.nextPush(data[0])
    alert("Course created successfully");
    store.modal.isOpen.toggle()
  } else alert(error?.message);
    button.disabled = false;

};

export default submitHandler;
