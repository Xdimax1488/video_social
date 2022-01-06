import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

import './video_details.css';

function VideoDetail({ match }) {
  const url = 'http://127.0.0.1:8000/api/comment/';
  const [video, setVideo] = useState([]);
  const [comment, setComment] = useState([]);
  

  const id = match.params.id;

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/api/videos/${id}/`,
    }).then((response) => {
      setVideo(response.data);
      setComment(response.data.comments);
    });
  }, [id]);
  const video_id = video.id;
  
  const [date, setDate] = useState({
    name: '',
    body: '',
    video: '',
  });

  console.log(date)

  function submit(event) {
    event.preventDefault();
    axios
      .post(url, {
        name: date.name,
        body: date.body,
        video: date.value,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle_commit(e) {
    const newdate = { ...date };
    newdate[e.target.id] = e.target.value;
    setDate(newdate);
    console.log(newdate);
  }

  const caunter = comment.length;
  
  
  return (
    <div className="content">
      <div className="conteiner__category">
        <div className="video">
          <video width="1200" height="800" controls="controls" poster={video.preview}>
            <source src={video.video} type="video/mp4" />
          </video>
        </div>
        <div className="video__detail-content">
          <div className="video__detail-tittle">{video.name}</div>
          <div className="video__detail-date">{dateFormat(video.published, 'mmmm dS,yyyy')}</div>

          <div className="video__detail-user">
            <img
              className="user__avatar"
              src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg"
              alt=""
            />
            <div className="user__detail-name">{video.author}</div>
          </div>
          <div className="video__detail-description">{video.description}</div>
          <div className="video__comments">
            <h1 className="tittle">{caunter} коментариев : </h1>
            {comment.map((com) => (
              <div className="commets__details">
                <div className="comments__header">
                  <div className="comments__user">{com.name}</div>
                  <div className="comments__date">{com.created}</div>
                </div>
                <div className="comments__body">{com.body}</div>
              </div>
            ))}
            <form className="comment__form" onSubmit={(event) => submit(event)}>
              <ul>
                <li>
                  <label for="name">Имя</label>
                  <input
                    className="input__text"
                    onChange={(e) => handle_commit(e)}
                    value={date.name}
                    type="text"
                    id="name"
                    name="name"
                  />
                </li>
                <li>
                  <label for="body">Текст</label>
                  <input
                    className="input__body"
                    onChange={(e) => handle_commit(e)}
                    value={date.doby}
                    type="text"
                    id="body"
                    name="body"
                  />
                </li>
                <li>
                  <input
                    className="input__body"
                    
                    value={date.video}
                    type="hidden"
                    id="video"
                    name="video"
                  />
                </li>
              </ul>
              <button className="create__botton" type="primery" htmlType="submit">
                <h1>Добавить</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
