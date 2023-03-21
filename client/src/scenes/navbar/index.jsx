import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Message,
  Search,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "./state/state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

export default function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dipatch = useDispatch();
  const navigate = useNavigate();
  return <div>Navbar</div>;
}
