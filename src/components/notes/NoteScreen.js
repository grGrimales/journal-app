import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="what happened today"
          className="notes__texarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjTj75jfltahVrGNGGumpRsXC4G12ipFFvw&usqp=CAU"
            alt="imagen"
          ></img>
        </div>
      </div>
    </div>
  );
};
