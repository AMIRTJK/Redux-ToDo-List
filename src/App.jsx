import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Switcher from "./component/Switcher";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import {
  Box,
  Typography,
  Stack,
  Container,
  TextField,
  Button,
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material/";

import { useSelector, useDispatch } from "react-redux";

import { deleteData, getData } from "./api/todo/todoApi";

function App() {
  // useState for translator
  const [t, i18n] = useTranslation();
  // Функция для смены языка
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };
  // useState для select
  const [lang, setLang] = useState();

  const dispatch = useDispatch();

  const data = useSelector((store) => store.todo.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <main className="dark:bg-[#000] dark:text-[#fff] p-[50px]">
        <div className="wrappers flex gap-[20px] py-[20px]">
          <TextField label="Search..." />
          <select name="" id="">
            <option value="">ACTIVE</option>
            <option value="">INACTIVE</option>
          </select>
        </div>
        <form className="flex gap-[20px]">
          <TextField label="Введите логин" type="text" />
          <TextField label="Введите пароль" type="text" />
          <Button variant="outlined" type="submit" sx={{ height: "56px" }}>
            Add
          </Button>
        </form>
        <div className="wrapper py-[50px]">
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className="post flex justify-between items-center border-b-[1px] border-[#000]"
              >
                <div className="wrapper-text flex gap-[20px] items-center">
                  <h1>{e.title}</h1>
                  <p>{e.desc}</p>
                </div>
                <div className="panel-control flex items-center gap-[20px]">
                  <IconButton>
                    <EditIcon className="text-[green]" />
                  </IconButton>
                  <Checkbox />
                  <IconButton onClick={() => dispatch(deleteData(e))}>
                    <DeleteIcon className="text-[red]" />
                  </IconButton>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="modal-container fixed bg-[#00000020] h-[100%] w-full top-0 left-0">
          <div className="modal bg-[#fff] w-[30%] absolute rounded-[10px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <form className="flex flex-col gap-[20px] items-center p-[20px]">
              <div className="wrapper-text flex justify-between items-center w-full">
                <h1 className="mx-auto">Edit Task</h1>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </div>
              <TextField label="Изменить логин" fullWidth />
              <TextField label="Изменить пароль" fullWidth />
              <Button type="submit" variant="outlined" fullWidth>
                Изменить
              </Button>
            </form>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default App;
