import supabase from "../../../services/supabase";
import store from "../../../store";
 
export const deleteCourseHandler = async (id: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    let{ data, error }  = await supabase.from("courses").delete().eq("id", id);
     if (!error) {
       const courses =  store.courses.value
      store.courses.next(courses.filter((course) => course.id !== id));
    } else if(error) {
      setError(error?.message);
    }
  }