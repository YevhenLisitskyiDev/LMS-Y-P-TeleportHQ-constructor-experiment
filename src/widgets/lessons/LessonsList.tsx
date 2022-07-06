import React, { useEffect, useState } from "react";
import styled from "styled-components";

import store from "./../../store/index";
import { useParams, useHistory } from "react-router-dom";
import supabase from "./../../services/supabase.ts";

import LessonsListItem from "./../../components/lessons/LessonsListItem";
import Vimeo from "@u-wave/react-vimeo";

const LessonsList = () => {
  const history = useHistory();
  if (!history) return <div>courses not lessons</div>;

  const { id } = useParams();
  const [lessons, setLessons] = useState(null);
  const [error, setError] = useState(null);
  const [selectedLessonUrl, setSelectedLessonUrl] = useState("");

  useEffect(async () => {
    const { data: lessons, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("course_id", id);

    if (!error) {
      setLessons(lessons);
      setSelectedLessonUrl(lessons[0].vimeo_url);
    } else setError(error?.message);
  }, [id]);

  const courses = store.courses.value;

  return (
    <>
      <div>
        Coure id: {id} <br /> Lessons count {lessons?.length}
      </div>

      <div>
        {lessons?.map((lesson) => (
          <LessonsListItem
            selected={selectedLessonUrl == lesson.vimeo_url}
            onClick={() => setSelectedLessonUrl(lesson.vimeo_url)}
            {...lesson}
          />
        ))}
      </div>

      {selectedLessonUrl ? (
        <Vimeo
          video={selectedLessonUrl}
          autoplay
          // height={500}
          showPortrait={false}
          showTitle={false}
          autoplay={false}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default LessonsList;
