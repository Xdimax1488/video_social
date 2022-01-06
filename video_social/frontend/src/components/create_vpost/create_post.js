import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'react-cookie';

import './create_post.css';

function CreatePost() {
  const url = 'http://127.0.0.1:8000/api/videos/';
  const [date, setDate] = useState({
    name: '',
    description: '',
    video: '',
    preview: '',
    category: '2',
    author: '1',
  });
  function submit(event) {
    event.preventDefault();
    axios
      .post(url, {
        name: date.name,
        description: date.description,
        video: date.value,
        preview: date.preview,
        category: date.category,
        author: date.author,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdate = { ...date };
    newdate[e.target.id] = e.target.value;
    setDate(newdate);
    console.log(newdate);
  }

  return (
    <div className="content">
      <div className="conteiner__category">
        <form className="create__form" onSubmit={(event) => submit(event)}>
          <ul>
            <li>
              <label for="name">Название:</label>
              <input
                className="input__text"
                onChange={(e) => handle(e)}
                value={date.name}
                type="text"
                id="name"
                name="name"
              />
            </li>
            <li>
              <label for="description">Описание:</label>
              <input
                className="input__text"
                onChange={(e) => handle(e)}
                value={date.description}
                type="text"
                id="description"
                name="description"
              />
            </li>
            <li>
              <label for="video">Видео:</label>
              <input
                onChange={(e) => handle(e)}
                value={date.video}
                type="file"
                id="video"
                name="video"
              />
            </li>
            <li>
              <label for="preview">Картинка на превю:</label>
              <input
                onChange={(e) => handle(e)}
                value={date.preview}
                type="file"
                id="preview"
                name="preview"
              />
            </li>
          </ul>
          <button className="create__botton">
            <h1>Добавить </h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
